import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeTokenToStorage = async (userAuthToken) => {
  try {
    await SecureStore.setItemAsync(key, userAuthToken);
  } catch (error) {
    console.error("Error occurred while storing user token.", error);
  }
};

const retrieveTokenFromStorage = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Error occurred while retrieving user token.", error);
  }
};

const removeTokenFromStorage = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error occurred while removing user token.", error);
  }
};

export default {
  storeTokenToStorage,
  retrieveTokenFromStorage,
  removeTokenFromStorage,
};
