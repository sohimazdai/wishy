import React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import BaseCheckbox from '../../components/BaseCheckbox';
import BaseInput, { InputSize } from '../../components/Input';
import Papirus from '../../components/Papirus';
import BaseButton, { ButtonFormFactor } from '../../components/BaseButton';

import { api } from '../../api';
import { IWishlist } from '../../../shared/models/wishlist';
import { Routes } from '../../../shared/routes';

import { generatePath, Redirect } from 'react-router-dom';
import { createAddWishlistAction } from '../../store/items/wishlists';

const mapDispatch = (dispatch: Dispatch<Action>) => ({
  createAddWishlist: (wishlist: IWishlist) => dispatch(createAddWishlistAction(wishlist)),
});

interface Props {
  createAddWishlist: (wishlist: IWishlist) => void;
}

type State = {
  name: string,
  isPrivate: boolean,
  error: string,
  wishlistId: string | null,
};

export class CreateWishlistPage extends React.Component<Props, State> {
  state: State = {
    name: '',
    isPrivate: false,
    error: '',
    wishlistId: null,
  };

  handleNameChange = (name: string) => this.setState({ name });

  handleIsPrivateChange = (isPrivate: boolean) => this.setState({ isPrivate });

  handleClickButton = () => {
    const { name, isPrivate } = this.state;

    api
      .post<IWishlist>(
        'wishlist/create',
        { name, isPrivate, items: {} },
      )
      .then((res) => {
        this.setState({ wishlistId: res.id || null });
        this.props.createAddWishlist(res);
      })
      .catch((e) => this.setState({ error: e.message }));
  };

  render() {
    const { name, isPrivate, error, wishlistId } = this.state;

    return (
      <div className="pages_createWishlistPage">
        <h3>Создание вишлиста</h3>
        <Papirus>
          <>
            <BaseInput
              placeholder="Введите название"
              value={name}
              onChangeText={this.handleNameChange}
              formFactor={InputSize.Medium}
              label="Название"
            />
            <BaseCheckbox
              text="Скрыть список"
              description="Список можно будет открыть по прямой ссылке"
              onChangeValue={this.handleIsPrivateChange}
              checked={isPrivate}
            />
            <div className="pages_createWishlistPage_button">
              <BaseButton
                formFactor={ButtonFormFactor.Medium}
                text={'Создать'}
                onClick={this.handleClickButton}
                flex
              />
            </div>
            {!!error && <p>{error}</p>}
          </>
        </Papirus>
        {!!wishlistId && (
          <Redirect to={{ pathname: generatePath(Routes.WishlistById, { id: wishlistId }) }} />
        )}
      </div>
    );
  }
}

export default connect(null, mapDispatch)(CreateWishlistPage);
