// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.8.0;

/*@@@@@@@       @@@@@@@@@
 @@@@@@@@@       @@@@@@@@@
  @@@@@@@@@       @@@@@@@@@
   @@@@@@@@@       @@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@
     @@@@@  HYPERLANE  @@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@       @@@@@@@@@
  @@@@@@@@@       @@@@@@@@@
 @@@@@@@@@       @@@@@@@@@
@@@@@@@@@       @@@@@@@@*/

// ============ External Imports ============
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
// ============ Internal Imports ============
import {IInterchainSecurityModule} from "../../interfaces/IInterchainSecurityModule.sol";
import {IStaticWeightedMultisigIsm} from "../../interfaces/isms/IWeightedMultisigIsm.sol";
import {Message} from "../../libs/Message.sol";

import {MerkleLib} from "../../libs/Merkle.sol";
import {AbstractMultisig} from "./AbstractMultisigIsm.sol";

/**
 * @title AbstractStaticWeightedMultisigIsm
 * @notice Manages per-domain m-of-n Validator sets with stake weights that are used to verify
 * interchain messages.
 */
abstract contract AbstractStaticWeightedMultisigIsm is
    AbstractMultisig,
    IStaticWeightedMultisigIsm
{
    // ============ Constants ============

    // total weight of all validators
    uint96 public constant TOTAL_WEIGHT = 1e10;

    /**
     * @inheritdoc IStaticWeightedMultisigIsm
     */
    function validatorsAndThresholdWeight(
        bytes calldata /* _message*/
    ) public view virtual returns (ValidatorInfo[] memory, uint96);

    /**
     * @notice public function for reading number of signatures in metadata
     * @param _metadata ABI encoded module metadata
     * @return the number of signatures
     */
    function signatureCount(
        bytes calldata _metadata
    ) public pure virtual returns (uint256) {
        return _signatureCount(_metadata);
    }

    /**
     * @inheritdoc IInterchainSecurityModule
     */
    function verify(
        bytes calldata _metadata,
        bytes calldata _message
    ) public view virtual returns (bool) {
        bytes32 _digest = digest(_metadata, _message);
        (
            ValidatorInfo[] memory _validators,
            uint96 _thresholdWeight
        ) = validatorsAndThresholdWeight(_message);

        require(
            _thresholdWeight > 0 && _thresholdWeight <= TOTAL_WEIGHT,
            "Invalid threshold weight"
        );

        uint256 _validatorCount = Math.min(
            _validators.length,
            _signatureCount(_metadata)
        );
        uint256 _validatorIndex = 0;
        uint96 _totalWeight = 0;

        // assumes that signatures are ordered by validator
        for (
            uint256 i = 0;
            _totalWeight < _thresholdWeight && i < _validatorCount;
            ++i
        ) {
            address _signer = ECDSA.recover(_digest, signatureAt(_metadata, i));
            // loop through remaining validators until we find a match
            while (
                _validatorIndex < _validatorCount &&
                _signer != _validators[_validatorIndex].signingAddress
            ) {
                ++_validatorIndex;
            }
            // fail if we never found a match
            require(_validatorIndex < _validatorCount, "Invalid signer");

            // add the weight of the current validator
            _totalWeight += _validators[_validatorIndex].weight;
        }
        require(
            _totalWeight >= _thresholdWeight,
            "Insufficient validator weight"
        );
        return true;
    }
}
