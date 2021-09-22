import React, { useCallback, useState } from 'react';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  onChangeValue: (isChecked: boolean) => void,
  text: string,
  description?: string,
}

export default function BaseCheckbox(props: Props): JSX.Element {
  const { onChangeValue, text, description, disabled, ...restProps } = props;

  return (
    <div className="baseCheckbox">
      <input
        className="baseCheckbox_input"
        type="checkbox"
        checked={restProps.checked}
        onChange={(e) => onChangeValue(e.target.checked)}
        aria-label={text}
        {...restProps}
        id={text}
      />
      <label htmlFor={text} className="baseCheckbox_label">{text}</label>
      {!!description && <p className="baseCheckbox_description">{description}</p>}
    </div>
  );
}
