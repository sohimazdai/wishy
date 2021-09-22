import { IWish } from './wish';

export interface IWishlist {
  id: string,
  userId: string,
  name: string,
  items: { [id: string]: IWish },
  isPrivate: boolean,
}
