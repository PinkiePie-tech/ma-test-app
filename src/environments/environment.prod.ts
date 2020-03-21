import { Environment } from './environment.interface';
import * as packageSettings from '../../package.json';

export const environment: Environment = {
  envName: 'prod',
  shortEnv: 'prod',
  production: true,
  maBackend: 'http://34.77.170.52',
  appVersion: packageSettings?.version ?? '0.0.0',
  buildTime: new Date()
};
