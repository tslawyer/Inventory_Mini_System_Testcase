import dotenv from "dotenv";

dotenv.config();

export const getEnvVar = (starterValue, defaultValue) => {
  const value = process.env[starterValue] ?? defaultValue;

  if (value === undefined) {
    throw new Error(`You are missing ${starterValue} in your .env file`);
  }

  if (value) return value;
  if (defaultValue) return defaultValue;

  // throw new Error(`You are missing a ${value} in your .env file`);
};
