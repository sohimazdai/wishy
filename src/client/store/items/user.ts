import { IUser } from '../../../shared/models/user';

export enum UserAction {
  SetUser = 'user/setUser',
  ClearUser = 'user/clearUser',
};

type SetUserAction = {
  type: UserAction.SetUser,
  payload: IUser,
};

export const createSetUserAction = (user: IUser): SetUserAction => ({
  type: UserAction.SetUser,
  payload: user,
});

type ClearUserAction = {
  type: UserAction.ClearUser,
};

export const createClearUserAction = (): ClearUserAction => ({
  type: UserAction.ClearUser,
});

type UserActionCreator = SetUserAction | ClearUserAction;

export const userReducer = (user: IUser | null = null, action: UserActionCreator): IUser | null => {
  switch (action.type) {
    case UserAction.SetUser:
      return action.payload;
    case UserAction.ClearUser:
      return null;
    default:
      return user;
  }
}
