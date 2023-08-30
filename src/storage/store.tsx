import React, {createContext, Dispatch, FC, useReducer} from 'react';

import {mock, UserType} from '../mock';

export type State = {
  me: UserType;
  loadingMe: boolean;
  loadingSignIn: boolean;
  loadingSignUp: boolean;
  isSignIn: boolean | null;
};

type Action =
  | {type: 'logout'}
  | {type: 'signIn'; payload: UserType}
  | {type: 'loadingSignIn'; payload: boolean}
  | {type: 'loadingMe'; payload: boolean}
  | {type: 'updateMe'; payload: UserType}
  | {type: 'signUp'; payload: UserType}
  | {type: 'loadingSignUp'; payload: boolean}
  | {type: 'checkSignIn'; payload: boolean}

const getAnonymousUser = () =>
  mock.Users.find(user => user.id === '10') as UserType;

const initialState: State = {
  me: getAnonymousUser(),
  loadingSignIn: false,
  loadingMe: false,
  loadingSignUp: false,
  isSignIn: null,
};

export const StoreContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

export const StoreProvider: FC<{children?: React.ReactNode}> = ({children}) => {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'updateMe':
        return {
          ...state,
          me: action.payload,
        };

      case 'signIn':
        return {
          ...state,
          me: action.payload,
          isSignIn: true,
        };

      case 'checkSignIn':
        return {
          ...state,
          isSignIn: action.payload,
        };

      case 'logout':
        return {
          ...state,
          me: getAnonymousUser(),
          isSignIn: false,
        };

      case 'loadingSignIn':
        return {
          ...state,
          loadingSignIn: action.payload,
        };

      case 'loadingMe':
        return {
          ...state,
          loadingMe: action.payload,
        };

      case 'loadingSignUp':
        return {
          ...state,
          loadingSignUp: action.payload,
        };

      default:
        return state;
    }
  };

  return (
    <StoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
};
