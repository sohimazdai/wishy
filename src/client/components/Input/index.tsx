import classNames from 'classnames';
import React, { useCallback } from 'react';

export enum InputSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  formFactor: InputSize;
  onChangeText: (value: string) => void;
  label?: string;
  error?: string;
  classNames?: string;
};

export default function BaseInput(props: Props) {
  const { formFactor, label, error, onChangeText, ...inputProps } = props;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(e.target.value);
  }, []);

  const labelCn = classNames('baseInput_label', {
    'baseInput_label--errory': !!error,
  });

  const inputCn = classNames('baseInput_input', classNames || '', {
    'baseInput_input--small': formFactor === InputSize.Small,
    'baseInput_input--medium': formFactor === InputSize.Medium,
    'baseInput_input--large': formFactor === InputSize.Large,
    'baseInput_input--errory': !!error,
  });

  return (
    <div className="baseInput">
      {label && (
        <label className={labelCn}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={inputCn}
        onChange={handleChange}
      />
      {!!error && <span className="baseInput_error">{error}</span>}
    </div>
  );
}
