import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth';  // If using Firebase Auth
import { firebaseService, store, setProfile, clearProfile } from 'modules';
import { createProfileObj, handleAsync } from 'helper';

const { dispatch } = store;

/**
 * a Service for get current user from firebase auth with auth state change
 * this service will be to use in App.js and always call every user change
 * like login, register, and logout
 */
export const getProfile = () => {
  const promise = new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(
      async user => {
        if(user) {
          let userData = await firebaseService.getUserData(user.uid);
          if(!userData) {
            userData = await firebaseService.createUserData({
              name: user.displayName,
              email: user.email,
              userId: user.uid,
              photo: user.photoURL
            });
          }
          const userObj = createProfileObj({ ...user, ...userData });
          dispatch(setProfile(userObj));
          resolve(user);
        } else {
          dispatch(clearProfile());
          resolve(null)
        }
      },
      error => {
        dispatch(clearProfile());
        reject(error);
      }
    );
  });

  return promise
};


/**
 * a Service for update current user data
 * @param {*} payload
 */
export const updateProfile = async (payload = {}) => {
  try {
    await firebaseService.updateUserData(payload);
    const userData = await firebaseService.getUserData();
    const userObj = createProfileObj({ ...userData });
    dispatch(setProfile(userObj));
    return userObj;
  } catch (err) {
    throw err;
  }
};
