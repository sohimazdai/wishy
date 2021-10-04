import { IWishlist } from '../../../shared/models/wishlist';

export enum WishlistsAction {
  Set = 'wishlists/set',
  Add = 'wishlists/add',
};

type SetWishlistsAction = {
  type: WishlistsAction.Set,
  payload: IWishlist[],
};

export const createSetWishlistAction = (wishlists: IWishlist[]): SetWishlistsAction => ({
  type: WishlistsAction.Set,
  payload: wishlists,
});

type AddWishlistsAction = {
  type: WishlistsAction.Add,
  payload: IWishlist,
};

export const createAddWishlistAction = (wishlist: IWishlist): AddWishlistsAction => ({
  type: WishlistsAction.Add,
  payload: wishlist,
});

type WishlistActionCreator = SetWishlistsAction | AddWishlistsAction;

export const wishlistReducer = (
  wishlists: IWishlist[] = [],
  action: WishlistActionCreator,
): IWishlist[] => {
  switch (action.type) {
    case WishlistsAction.Set:
      return action.payload;
    case WishlistsAction.Add:
      return wishlists.concat(action.payload);
    default:
      return wishlists;
  }
}
