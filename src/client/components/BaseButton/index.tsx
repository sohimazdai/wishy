import classNames from 'classnames';
import React from 'react';
import Loader, { LoaderSize } from '../Loader';

export enum ButtonFormFactor {
  Link = 'link',
  Medium = 'medium',
}

interface Props extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement
> {
  onClick: () => void;
  formFactor: ButtonFormFactor;
  text: string;
  loading?: boolean;
}

export default function BaseButton(props: Props) {
  const { onClick, formFactor, text, loading, ...restProps } = props;

  const buttonCn = classNames('baseButton', {
    'baseButton--link': formFactor === ButtonFormFactor.Link,
    'baseButton--medium': formFactor === ButtonFormFactor.Medium,
  });

  return (
    <button {...restProps} onClick={onClick} className={buttonCn}>
      {loading
        ? <Loader size={LoaderSize.Small} withText />
        : text
      }
    </button>
  );
}
