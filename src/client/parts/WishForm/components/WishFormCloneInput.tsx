import React, { useCallback } from 'react';

import BaseInput, { InputSize } from '../../../components/Input';

interface Props {
  keyName: string,
  keyValue: string,
  onChangeText: (keyName: string, keyValue: string) => void,
}

export default function WishFormCloneInput(props: Props) {
  const { keyName, keyValue, onChangeText } = props;

  const handleChangeText = useCallback((val: string) => {
    onChangeText(keyName, val);
  }, [keyName]);

  return (
    <BaseInput
      formFactor={InputSize.Medium}
      value={keyValue}
      onChangeText={handleChangeText}
      label={keyName}
    />
  );
}
