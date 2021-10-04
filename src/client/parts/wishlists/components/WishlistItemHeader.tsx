import React from 'react';

import { Link, generatePath } from 'react-router-dom';

import { IWishlist } from '../../../../shared/models/wishlist';
import { Routes } from '../../../../shared/routes';
import { Icon, Icons } from '../../../components/Icon';
import getDeclension from '../../../modules/utils/get-declension';

interface Props {
  wishlist: IWishlist;
}

export default function WishlistItemHeader(props: Props) {
  const { wishlist } = props;
  const wishCount = Object.values(wishlist.items).length;
  const isListEmpty = !wishCount;
  const wishCountText = isListEmpty
    ? 'Желаний пока нет'
    : `${wishCount} ${getDeclension(
      'желание',
      'желания',
      'желаний',
      wishCount,
    )}`;

  return (
    <div className="wishlists_itemHeader">
      <div className="wishlists_itemHeaderFunctionalBar">
        <Link
          className="wishlists_itemHeaderFunctionalBarName"
          to={generatePath(Routes.WishlistById, { id: wishlist.id })}
        >
          {wishlist.name}
        </Link>
        <Icon
          classNames="wishlists_itemHeaderFunctionalBarLink"
          icon={Icons.linkClip}
        />
      </div>
      <div className="wishlists_itemHeaderRightSideBar">
        <span className="wishlists_itemHeaderFunctionalWishCount">{wishCountText}</span>
        <Link
          to={`${Routes.CreateWish}?wishlist=${wishlist.id}`}
          className="wishlists_itemHeaderFunctionalBarPlusWrap"
        >
          <Icon
            classNames="wishlists_itemHeaderFunctionalBarPlus"
            icon={Icons.plus}
          />
        </Link>
      </div>
    </div>
  );
}
