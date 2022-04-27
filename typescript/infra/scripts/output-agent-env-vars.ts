import { ChainName } from '@abacus-network/sdk';
import { writeFile } from 'fs/promises';
import { getAgentEnvVars } from '../src/agents';
import {
  getCoreEnvironmentConfig,
  getEnvironment,
  getKeyRoleAndChainArgs,
} from './utils';

async function main() {
  const argv = await getKeyRoleAndChainArgs()
    .alias('f', 'file')
    .string('f')
    .describe('f', 'filepath')
    .require('f').argv;

  const environment = await getEnvironment();
  const config = await getCoreEnvironmentConfig(environment);
  const domains = Object.keys(config.transactionConfigs) as ChainName[];
  const envVars = await getAgentEnvVars(
    argv.c,
    argv.r,
    config.agent,
    domains,
    argv.i,
  );

  await writeFile(argv.f, envVars.join('\n'));
}

main().then(console.log).catch(console.error);
