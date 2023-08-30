import {UserType} from '../mock';
import {useCallback, useContext} from 'react';
import {
  addUserSignUp,
  getIsSignIn,
  getMe,
  removeIsSignInAndUserId,
  setIsSignIn,
  signIn,
  signInAsAnonymous,
} from '../storage/asyncStorage';
import {StoreContext} from '../storage/store';
export interface UserSignUpType extends UserType {
  username: string;
  password: string;
  fullName: string;
}

export const useAuth = () => {
  const [state, action] = useContext(StoreContext);

  const checkSignIn = useCallback(async () => {
    try {
      await getIsSignIn();
      const user = await getMe();

      action({type: 'signIn', payload: user});
      action({type: 'checkSignIn', payload: true});
    } catch (err) {
      action({type: 'checkSignIn', payload: false});
    }
  }, [action]);

  const logout = useCallback(async () => {
    try {
      action({type: 'loadingSignIn', payload: true});

      await removeIsSignInAndUserId();
    } finally {
      action({type: 'loadingSignIn', payload: false});
      action({type: 'logout'});
    }
  }, [action]);

  const login = useCallback(
    async (username: string, password: string) => {
      console.log('%c jordan username', 'color: lime;', {username, password});
      try {
        action({type: 'loadingSignIn', payload: true});
        const user = await signIn(username, password);
        action({
          type: 'signIn',
          payload: {lastName: 'asdasd', id: '2'},
        });
        await setIsSignIn();
      } catch (err) {
        logout();
        throw err;
      } finally {
        action({type: 'loadingSignIn', payload: false});
      }
    },
    [action, logout],
  );

  const loginAsAnonymous = useCallback(async () => {
    try {
      action({type: 'loadingSignIn', payload: true});

      const user = await signInAsAnonymous();

      action({
        type: 'updateMe',
        payload: user,
      });
    } finally {
      action({type: 'loadingSignIn', payload: false});
    }
  }, [action]);

  const signUp = useCallback(
    async (user: UserSignUpType): Promise<UserType> => {
      console.log('%c jordan user', 'color: lime;', user);
      try {
        action({type: 'loadingSignUp', payload: true});
        return addUserSignUp(user);
      } finally {
        action({type: 'loadingSignUp', payload: false});
      }
    },
    [action],
  );

  return {
    login,
    loginAsAnonymous,
    action,
    logout,
    signUp,
    checkSignIn,
    isSignIn: state.isSignIn,
    loadingSignUp: state.loadingSignUp,
    loadingSignIn: state.loadingSignIn,
  };
};
