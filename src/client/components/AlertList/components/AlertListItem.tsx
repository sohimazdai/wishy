import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import BaseButton, { ButtonFormFactor, ButtonIntent, IconPosition } from '../../BaseButton';
import ProgressBar from './ProgressBar';

import { IAlert } from '../../../types/alert';

interface Props {
  alert: IAlert,
  onClose: () => void;
}

export default function AlertListItem(props: Props) {
  const { alert, onClose } = props;
  const [shown, setShown] = useState(false);
  const [startClosing, setStartClosing] = useState(false);

  useEffect(() => {
    if (alert && !shown && !startClosing) {
      setShown(true);
    }

    if (startClosing && shown) {
      setShown(false);
      setTimeout(() => {
        onClose();
      }, 200);
    }
  }, [alert, shown, startClosing]);

  const cn = classNames('alertList_item', { 'alertList_item--shown': shown });

  return (
    <div className={cn}>
      <div>
        <div className="alertList_itemTitle">{alert.title}</div>
        {!!alert.description && (
          <div className="alertList_itemDescription">{alert.description}</div>
        )}
      </div>
      <ProgressBar
        alert={alert}
        closeAlert={() => setStartClosing(true)}
      />
      <BaseButton
        className="alertList_itemClose"
        icon={<div>✕</div>}
        formFactor={ButtonFormFactor.Medium}
        onClick={() => setStartClosing(true)}
        iconPosition={IconPosition.Left}
        intent={ButtonIntent.Clean}
      />
    </div>
  );
}
