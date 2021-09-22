import React from 'react';
import { IWishlist } from '../../../../shared/models/wishlist';

interface Props {
  wishlist: IWishlist;
}

export default function WishlistItem(props: Props) {
  const { wishlist } = props;

  console.log('🤖🤖🤖🤖 wishlist', wishlist);
  return (
    <div>
      <h5>{wishlist.name}</h5>
      <h5>{wishlist.isPrivate && <div>Список скрыт и доступен по прямой ссылке</div>}</h5>
    </div>
  );
}
