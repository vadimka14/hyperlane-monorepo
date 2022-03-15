/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ValidatorManagerInterface extends ethers.utils.Interface {
  functions: {
    "domainHash(uint32)": FunctionFragment;
    "enrollValidator(uint32,address)": FunctionFragment;
    "improperCheckpoint(address,bytes32,uint256,bytes)": FunctionFragment;
    "isValidatorSignature(uint32,bytes32,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validators(uint32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "domainHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enrollValidator",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "improperCheckpoint",
    values: [string, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidatorSignature",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validators",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "domainHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enrollValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "improperCheckpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidatorSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validators", data: BytesLike): Result;

  events: {
    "ImproperCheckpoint(address,uint32,address,bytes32,uint256,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ValidatorEnrolled(uint32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ImproperCheckpoint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidatorEnrolled"): EventFragment;
}

export class ValidatorManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ValidatorManagerInterface;

  functions: {
    domainHash(
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    enrollValidator(
      _domain: BigNumberish,
      _validator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    improperCheckpoint(
      _outbox: string,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isValidatorSignature(
      _domain: BigNumberish,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  domainHash(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;

  enrollValidator(
    _domain: BigNumberish,
    _validator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  improperCheckpoint(
    _outbox: string,
    _root: BytesLike,
    _index: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isValidatorSignature(
    _domain: BigNumberish,
    _root: BytesLike,
    _index: BigNumberish,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    domainHash(
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    enrollValidator(
      _domain: BigNumberish,
      _validator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    improperCheckpoint(
      _outbox: string,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidatorSignature(
      _domain: BigNumberish,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ImproperCheckpoint(
      outbox?: string | null,
      domain?: BigNumberish | null,
      validator?: string | null,
      root?: null,
      index?: null,
      signature?: null
    ): TypedEventFilter<
      [string, number, string, string, BigNumber, string],
      {
        outbox: string;
        domain: number;
        validator: string;
        root: string;
        index: BigNumber;
        signature: string;
      }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    ValidatorEnrolled(
      domain?: BigNumberish | null,
      validator?: string | null
    ): TypedEventFilter<
      [number, string],
      { domain: number; validator: string }
    >;
  };

  estimateGas: {
    domainHash(
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enrollValidator(
      _domain: BigNumberish,
      _validator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    improperCheckpoint(
      _outbox: string,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isValidatorSignature(
      _domain: BigNumberish,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    domainHash(
      _domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enrollValidator(
      _domain: BigNumberish,
      _validator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    improperCheckpoint(
      _outbox: string,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isValidatorSignature(
      _domain: BigNumberish,
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
