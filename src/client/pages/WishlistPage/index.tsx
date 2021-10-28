import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, generatePath } from 'react-router-dom';

import BaseButton, { ButtonFormFactor } from '../../components/BaseButton';

import { IStorage } from '../../../shared/models/storage';
import { IWishlist } from '../../../shared/models/wishlist';
import { Routes } from '../../../shared/routes';

const mapState = (state: IStorage, withRouterProps: RouteComponentProps) => {
  const { match } = withRouterProps;
  const { params } = match;

  return {
    wishlist: null,
  }
}

interface Props {
  wishlist: IWishlist | null,
}

function WishlistPage(props: Props) {
  const { wishlist } = props;

  if (!wishlist) {
    return (
      <div className="pages_wishlistPage">
        <BaseButton
          href={Routes.CreateWish}
          formFactor={ButtonFormFactor.Medium}
          text="Создать виш"
        />
      </div>
    );
  }

  return <h1>there are at least one wish</h1>
}

export default withRouter(connect(mapState)(WishlistPage))
