import {UserType} from 'mock';
import {useCallback, useContext} from 'react';
import {updateUser} from '../storage/asyncStorage';
import {StoreContext} from '../storage/store';

export const useMe = () => {
  const [state, action] = useContext(StoreContext);

  const updateMe = useCallback(
    async (user: UserType) => {
      try {
        action({type: 'loadingMe', payload: true});
        const updatedUser = await updateUser(user);
        action({type: 'updateMe', payload: updatedUser});
      } finally {
        action({type: 'loadingMe', payload: false});
      }
    },
    [action],
  );

  return {
    me: state.me,
    updateMe,
  };
};
