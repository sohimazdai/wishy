import { model, Schema, Model, Document, SchemaTypes } from 'mongoose';
import { IWishlist } from '../../shared/models/wishlist';

export type IIWishlist = Document<IWishlist>;

const WishListSchema: Schema = new Schema<IIWishlist>({
  name: { type: String, required: true },
  items: { type: Map, of: {}, required: false },
  isPrivate: { type: Boolean, required: true },
  userId: { type: String, required: true },
  id: {
    type: SchemaTypes.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
});

export const WishlistModel: Model<IIWishlist> = model('Wishlist', WishListSchema);
