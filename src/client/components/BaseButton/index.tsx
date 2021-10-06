import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../shared/routes';
import Loader, { LoaderSize } from '../Loader';

export enum ButtonIntent {
  Primary = 'primary',
  Clean = 'clean',
}

export enum ButtonFormFactor {
  Link = 'link',
  Medium = 'medium',
  Small = 'small',
}

export enum IconPosition {
  Left = 'left',
  Right = 'right',
}

interface Props extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement
> {
  onClick?: () => void;
  formFactor: ButtonFormFactor;
  text?: string;
  loading?: boolean;
  href?: Routes;
  flex?: boolean;
  icon?: JSX.Element;
  iconPosition?: IconPosition;
  intent?: ButtonIntent;
}

export default function BaseButton(props: Props) {
  const {
    onClick,
    formFactor,
    text,
    loading,
    href,
    flex,
    icon,
    iconPosition,
    intent = ButtonIntent.Primary,
    ...restProps
  } = props;

  const buttonCn = classNames(
    'baseButton',
    `baseButton--${formFactor}`,
    `baseButton--${intent}`,
    restProps.className,
  );
  const iconCn = classNames('baseButton_icon', `baseButton_icon--${iconPosition}`)

  const styles = useMemo(() => ({
    display: flex ? 'flex' : 'inline-flex',
  }), [flex])

  if (href) {
    return (
      <div>
        <Link to={href} className={buttonCn} style={styles}>{text}</Link>
      </div>
    );
  }

  if ((icon && !iconPosition) || (iconPosition && !icon)) {
    throw new Error('Icon is unsuccessfully inserted')
  };

  const textContent = text || null;

  return (
    <button
      {...restProps}
      onClick={onClick}
      className={buttonCn}
      style={styles}
    >
      {!!icon && iconPosition === IconPosition.Left && (
        <span className={iconCn}>{icon}</span>
      )}
      {
        loading
          ? <Loader size={LoaderSize.Small} withText />
          : textContent
      }
      {!!icon && iconPosition === IconPosition.Right && (
        <span className={iconCn}>{icon}</span>
      )}
    </button>
  );
}
