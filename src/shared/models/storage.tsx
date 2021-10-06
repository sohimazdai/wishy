import { IAlert } from '../../client/types/alert';
import { IUser } from './user';
import { IWishlist } from './wishlist';

export interface IStorage {
  user: IUser | null,
  wishlists: IWishlist[],
  alerts: IAlert[],
}
