import React from 'react';

import Papirus from '../../../components/Papirus';
import WishlistItemHeader from './WishlistItemHeader';

import { IWishlist } from '../../../../shared/models/wishlist';

interface Props {
  wishlist: IWishlist;
}

export default function WishlistItem(props: Props) {
  const { wishlist } = props;

  return (
    <Papirus classNames="wishlists_itemPapirus">
      <WishlistItemHeader wishlist={wishlist} />
    </Papirus>
  );
}
