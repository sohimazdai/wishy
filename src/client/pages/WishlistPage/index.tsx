import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { IStorage } from '../../../shared/models/storage';
import { IWishlist } from '../../../shared/models/wishlist';

const mapState = (state: IStorage, withRouterProps: RouteComponentProps) => {
  const { match } = withRouterProps;
  const { params } = match;

  console.log('🤖🤖🤖🤖 params', params);
  console.log('🤖🤖🤖🤖 state', state);

  return {
    wishlist: null,
  }
}

interface Props {
  wishlist: IWishlist | null,
}

function WishlistPage(props: Props) {
  console.log('🤖🤖🤖🤖 props', props);
  return (
    <div>
      {/* <BreadCrumbs
        items={[{ title: 'ok', path: '/' }, { title: 'next', path: 'wishlist/create' }]}
      /> */}
    </div>
  );
}

export default withRouter(connect(mapState)(WishlistPage))
