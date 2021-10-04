import React from 'react';

import Papirus from '../../components/Papirus';
import { UrlParser } from '../../parts/URLParser';
import { WishForm } from '../../parts/WishForm';

export default function CreateWishPage() {
  return (
    <div className="pages_createWishPage">
      <h2>Создание вишлиста</h2>
      <Papirus>
        <UrlParser />
      </Papirus>
      <br />
      ----или----
      <br />
      <Papirus>
        <>
          <p>Заполните поля самостоятельно</p>
          <WishForm />
        </>
      </Papirus>
    </div >
  );
}
