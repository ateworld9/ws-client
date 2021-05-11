import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from 'store/store';
import { IUser } from 'types';

interface IUserState {
  sessionUser: IUser;
  authorized: boolean;
  user: IUser;
  users: IUser[];
  loading: 'INVALID' | 'REQUEST' | 'SUCCESS' | 'FAILURE';
  error: any | null;
}

const initialState: IUserState = {
  sessionUser: {
    _id: '',
    name: '',
    __v: NaN,
  },
  authorized: false,
  user: {
    _id: '',
    name: '',
    __v: NaN,
  },
  users: [],
  loading: 'INVALID',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequest: (state: IUserState) => {
      state.loading = 'REQUEST';
    },
    getUserSuccess: (state: IUserState, { payload }: PayloadAction<IUser>) => {
      state.loading = 'SUCCESS';
      state.user = payload;
    },
    getUsersSuccess: (
      state: IUserState,
      { payload }: PayloadAction<IUser[]>
    ) => {
      state.loading = 'SUCCESS';
      state.users = payload;
    },
    setSessionUserSuccess: (
      state: IUserState,
      { payload }: PayloadAction<IUser>
    ) => {
      state.loading = 'SUCCESS';
      state.sessionUser = payload;
      state.authorized = true;
    },
    getUserFailure: (state: IUserState, { payload }) => {
      state.loading = 'FAILURE';
      state.error = payload;
    },
    clearUser: (state: IUserState) => {
      state.user = {
        _id: '',
        name: '',
        __v: NaN,
      };
      state.authorized = false;
    },
  },
});

export const {
  getUserRequest,
  getUserSuccess,
  getUsersSuccess,
  setSessionUserSuccess,
  getUserFailure,
  clearUser,
} = userSlice.actions;

export const fetchUserById = (userId?: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(
      `http://localhost:3001/user${userId ? '/' + userId : ''}`,
      { withCredentials: !userId }
    );
    if (userId) {
      dispatch(getUserSuccess(response.data));
    } else {
      dispatch(setSessionUserSuccess(response.data));
    }
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get('http://localhost:3001/user/users');
    dispatch(getUsersSuccess(response.data));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const userReducer = userSlice.reducer;

// export enum UserActionT {
//   SET_USER = 'SET_USER',
//   UPDATE_USER = 'UPDATE_USER',
//   CLEAR_USER = 'CLEAR_USER',
// }

// export const SetUserAC = (payload: IUser) => ({
//   type: UserActionT.SET_USER,
//   payload,
// });
// export const ClearUserAC = () => ({ type: UserActionT.CLEAR_USER });

// export const userReducer = (
//   state: IUserState = initialState,
//   action: AnyAction
// ) => {
//   switch (action.type) {
//     case UserActionT.SET_USER: {
//       return { ...state, user: action.payload, authorized: true };
//     }
//     case UserActionT.UPDATE_USER: {
//       return state;
//     }
//     case UserActionT.CLEAR_USER: {
//       return { ...state, user: null, authorized: false };
//     }
//     default:
//       return state;
//   }
// };
