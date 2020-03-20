export interface Environment {
    envName: string;
    shortEnv: string;
    production: boolean;
    maBackend: string;
    appVersion: string;
    buildTime: Date;
}
