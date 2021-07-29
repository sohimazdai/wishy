export enum Env {
  Dev = 'development',
  Prod = 'production',
}

export function getCurrentEnv() {
  if (process.env.NODE_ENV === Env.Dev) return Env.Dev;

  return Env.Prod;
}
