import { IWishlist } from '../../shared/models/wishlist';
import { WishlistModel } from '../models/wishlist';

class WishlistService {
  public async getAllByUserId(userId?: string): Promise<IWishlist[]> {
    if (!userId) return [];

    const wishlists = await WishlistModel.find({ userId }).lean();

    console.log('🤖🤖🤖🤖 wishlists', wishlists);
    return wishlists as any;
  }
}

export default new WishlistService();
