import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import BaseButton, { ButtonFormFactor, ButtonIntent, IconPosition } from '../../BaseButton';
import AlertListItem from './AlertListItem';

import { IStorage } from '../../../../shared/models/storage';
import { IAlert } from '../../../types/alert';
import { createClearAlertsAction, createRemoveAlertAction } from '../../../store/items/alert';

const mapState = (state: IStorage) => ({
  alerts: state.alerts,
});

const mapDispatch = (dispatch: Dispatch<Action>) => ({
  removeAlert: (alertId: number) => dispatch(createRemoveAlertAction(alertId)),
  clearAlerts: () => dispatch(createClearAlertsAction()),
});

interface Props {
  alerts: IAlert[];
  removeAlert: (alertId: number) => void;
  clearAlerts: () => {};
}

function AlertList(props: Props) {
  const { alerts, removeAlert, clearAlerts } = props;

  if (!alerts.length) return null;

  const reversedAlerts = [...alerts].reverse();

  return (
    <div className="alertList">
      {reversedAlerts.map((alert) => (
        <AlertListItem
          key={alert.id}
          alert={alert}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
      {alerts.length > 1 && (
        <div className="alertList_closeAllWrap">
          <BaseButton
            className="alertList_closeAll"
            icon={<div>✕</div>}
            text="Закрыть все"
            formFactor={ButtonFormFactor.Small}
            onClick={clearAlerts}
            iconPosition={IconPosition.Left}
            intent={ButtonIntent.Clean}
          />
        </div>
      )}
    </div>
  );
}

export default connect(mapState, mapDispatch)(AlertList);
