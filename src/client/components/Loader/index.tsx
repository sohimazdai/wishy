import classNames from 'classnames';
import React from 'react';

export enum LoaderSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface Props {
  size: LoaderSize
  withText?: boolean
}

export default function Loader(props: Props) {
  const { size } = props;

  const loaderCn = classNames('loader_rotor', {
    'loader_rotor--small': size === LoaderSize.Small,
    'loader_rotor--medium': size === LoaderSize.Medium,
    'loader_rotor--large': size === LoaderSize.Large,
  })

  return (
    <div className="loader">
      <span className="loader_label">
        Загрузка
      </span>
      <div className={loaderCn} />
    </div>
  );
}
