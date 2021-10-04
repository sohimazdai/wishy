import { LeanDocument } from 'mongoose';
import { IWishlist } from '../../shared/models/wishlist';
import { WishlistModel } from '../models/wishlist';
import cleanMongooseObject from '../modules/clean-mongoose-object';

class WishlistService {
  public async getAllByUserId(userId?: string): Promise<IWishlist[]> {
    if (!userId) return [];

    const wishlists = await WishlistModel.find({ userId }).lean();

    return wishlists.map((wl: LeanDocument<any>) => cleanMongooseObject<IWishlist>(wl)) as any;
  }
}

export default new WishlistService();
