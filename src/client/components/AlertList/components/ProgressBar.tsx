import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { IAlert } from '../../../types/alert';

interface Props {
  alert: IAlert;
  closeAlert: () => void;
}

export default function ProgressBar(props: Props): JSX.Element {
  const { alert: { durationSec = 50 }, closeAlert } = props;
  const [started, setStated] = useState(false);

  useEffect(() => {
    setTimeout(closeAlert, durationSec * 1000);
    setStated(true);
  }, []);

  const cn = classNames('alertList_progressBar', { 'alertList_progressBar--started': started });

  return (
    <div
      className={cn}
      style={{ "transitionDuration": `${durationSec}s` }}
    />
  );
}
