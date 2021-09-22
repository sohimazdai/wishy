import { IWishlist } from '../../../shared/models/wishlist';

export enum WishlistsAction {
  Set = 'wishlists/set',
};

type SetWishlistsAction = {
  type: WishlistsAction.Set,
  payload: IWishlist[],
};

export const createSetWishlistAction = (wishlists: IWishlist[]): SetWishlistsAction => ({
  type: WishlistsAction.Set,
  payload: wishlists,
});

type WishlistActionCreator = SetWishlistsAction;

export const wishlistReducer = (
  wishlists: IWishlist[] = [],
  action: WishlistActionCreator,
): IWishlist[] => {
  switch (action.type) {
    case WishlistsAction.Set:
      return action.payload;
    default:
      return wishlists;
  }
}
