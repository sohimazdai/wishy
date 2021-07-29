import { Env, getCurrentEnv } from '../../shared/environment';

const ENV_PARAMS = {
  dev: {
    name: 'development',
    apiUrl: "localhost:3000",
  },
  prod: {
    name: 'production',
    apiUrl: 'localhost:9000',
  }
};

function getEnvParams() {
  const env = getCurrentEnv();

  if (env === Env.Dev) return ENV_PARAMS.dev;

  return ENV_PARAMS.prod;
}

export default getEnvParams();
