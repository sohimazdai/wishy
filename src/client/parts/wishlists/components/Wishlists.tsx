import React from 'react';
import { connect } from 'react-redux';
import { IStorage } from '../../../../shared/models/storage';

import BaseButton, { ButtonFormFactor } from '../../../components/BaseButton';

import { IWishlist } from '../../../../shared/models/wishlist';
import { Routes } from '../../../../shared/routes';
import WishlistItem from './WishlistItem';

interface Props {
  wishlists?: IWishlist[]
}
const mapState = (state: IStorage) => ({
  wishlists: state.wishlists,
});

export class Wishlists extends React.Component<Props> {
  render() {
    const { wishlists } = this.props;

    if (!wishlists || !wishlists.length) {
      return (
        <div>
          <h4>У вас пока нет ни одного вишлиста</h4>
          <BaseButton
            text="Создать вишлист"
            href={Routes.CreateWishlist}
            formFactor={ButtonFormFactor.Medium}
          />
        </div>
      );
    }

    console.log('🤖🤖🤖🤖 wishlists', wishlists);

    return (
      <>
        <h3 className="wishlists_contentHeader">Ваши вишлисты</h3>
        <p>
          <BaseButton
            formFactor={ButtonFormFactor.Medium}
            href={Routes.CreateWish}
            text="Создать виш"
          />
        </p>
        <div className="wishlists_contentList">
          {wishlists.map((wl) => <WishlistItem key={wl.id} wishlist={wl} />)}
        </div>
      </>
    );
  }
}

export default connect(mapState)(Wishlists);
