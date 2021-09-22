import React from 'react';

import BaseCheckbox from '../../components/BaseCheckbox';
import BaseInput, { InputSize } from '../../components/Input';
import Papirus from '../../components/Papirus';
import BaseButton, { ButtonFormFactor } from '../../components/BaseButton';

import { api } from '../../api';
import { IWishlist } from '../../../shared/models/wishlist';
import { Routes } from '../../../shared/routes';

type State = {
  name: string,
  isPrivate: boolean,
  error: string,
};

export default class CreateWishlistPage extends React.Component<{}, State> {
  state = {
    name: '',
    isPrivate: false,
    error: '',
  }

  handleNameChange = (name: string) => this.setState({ name });

  handleIsPrivateChange = (isPrivate: boolean) => this.setState({ isPrivate });

  handleClickButton = () => {
    const { name, isPrivate } = this.state;

    api
      .post<IWishlist>(
        'wishlist/create',
        { name, isPrivate },
      )
      .then(() => window.location.replace(Routes.MAIN))
      .catch((e) => this.setState({ error: e.message }));
  };

  render() {
    const { name, isPrivate, error } = this.state;

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
      </div>
    );
  }
}
