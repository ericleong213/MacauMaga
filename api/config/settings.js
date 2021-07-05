import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://60cdf77891cc8e00178dc3a7.mockapi.io/api/v1/magas",
  },
  staging: {
    apiUrl: "https://60cdf77891cc8e00178dc3a7.mockapi.io/api/v1/magas",
  },
  prod: {
    apiUrl: "https://60cdf77891cc8e00178dc3a7.mockapi.io/api/v1/magas",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
