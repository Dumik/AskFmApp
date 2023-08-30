import AsyncStorage from '@react-native-async-storage/async-storage';

import {mock, UserType} from './../mock';
import {Users} from './../mock/User';

export const ANONYMOUS_ID = 'anonymous';
export enum AsyncStorageKeys {
  SIGN_IN = 'SIGN_IN',
  USERS = 'SIGN_UP',
  LOGGED_USER_ID = 'LOGGED_USER_ID',
  SESSION_TOKEN = 'SESSION_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  USER_ID = 'USER_ID',
  BIOMETRIC_LOGIN = 'BIOMETRIC_LOGIN',
  SELECT_LANGUAGE = 'SELECT_LANGUAGE',
}

const initialUsersSignUp = async () => {
  await AsyncStorage.setItem(
    AsyncStorageKeys.USERS,
    JSON.stringify(mock.Users),
  );
  return mock.Users;
};

export const resetUsersSignUp = async () => {
  await AsyncStorage.removeItem(AsyncStorageKeys.USERS);
  await initialUsersSignUp();
};

export const getAllUsers = async (): Promise<UserType[]> => {
  const usersJson = await AsyncStorage.getItem(AsyncStorageKeys.USERS);

  let users;

  try {
    users = JSON.parse(usersJson || '[]') || [];
    if (!users.length) {
      users = await initialUsersSignUp();
    }
  } catch (err) {
    users = [];
  }

  return users;
};

export const getMe = async () => {
  const userId = await AsyncStorage.getItem(AsyncStorageKeys.LOGGED_USER_ID);
  if (userId) {
    const users = await getAllUsers();
    return users.find(user => user.id === userId) as UserType;
  }

  throw Error('errorMessages.userNotExists');
};

export const getIsSignIn = async () => {
  try {
    return !!(await AsyncStorage.getItem(AsyncStorageKeys.SIGN_IN));
  } catch (err) {
    return false;
  }
};

export const setIsSignIn = async () => {
  try {
    await AsyncStorage.setItem(AsyncStorageKeys.SIGN_IN, 'true');
  } catch (err) {
    console.log('ERROR', err);
  }
};

export const removeIsSignInAndUserId = async () => {
  try {
    await AsyncStorage.removeItem(AsyncStorageKeys.LOGGED_USER_ID);
    await AsyncStorage.removeItem(AsyncStorageKeys.SIGN_IN);
  } catch (err) {
    console.log('ERROR', err);
  }
};

export const signIn = async (username: string, password: string) => {
  // const users = await getAllUsers();
  // const userExist = users.find(
  //   user => user.username === username.toLowerCase().trim(),
  // );
  // if (!userExist) {
  //   throw Error('errorMessages.userNotExists');
  // } else if (userExist.password !== password) {
  //   throw Error('errorMessages.invalidCredentials');
  // }
  // await AsyncStorage.setItem(AsyncStorageKeys.LOGGED_USER_ID, userExist.id);
  // return userExist;
};

export const signInAsAnonymous = async () => {
  const users = await getAllUsers();

  const userExist =
    users.find(user => user.id === ANONYMOUS_ID) ||
    (Users.find(user => user.id === ANONYMOUS_ID) as UserType);

  await AsyncStorage.setItem(AsyncStorageKeys.LOGGED_USER_ID, userExist.id);
  return userExist;
};

export const removeAllUsers = async () => {
  await AsyncStorage.clear();
};

export const updateUser = async (user: UserType): Promise<UserType> => {
  const users = await getAllUsers();

  const userIndex = users.findIndex(({id}) => id === user.id);
  if (userIndex !== -1) {
    users[userIndex] = {...users[userIndex], ...user};
  } else {
    // throw Error(errorMessages.userNotExists);
    users.push(user);
  }

  await AsyncStorage.setItem(AsyncStorageKeys.USERS, JSON.stringify(users));
  return users[userIndex];
};

export const addUserSignUp = async (newUser: UserType) => {
  if (
    !newUser.username ||
    !newUser.password ||
    !newUser.firstName ||
    !newUser.lastName
  ) {
    throw Error('errorMessages.fieldRequired');
  }

  const users = await getAllUsers();
  const tempNewUser = {
    ...newUser,
    username: newUser.username.toLowerCase().trim(),
  };

  if (users.some(user => user?.username === tempNewUser.username)) {
    throw Error('errorMessages.userExist');
  }

  tempNewUser.id = `${users.length}`;
  (users as UserType[]).push(tempNewUser);

  await AsyncStorage.setItem(AsyncStorageKeys.USERS, JSON.stringify(users));

  return tempNewUser;
};
