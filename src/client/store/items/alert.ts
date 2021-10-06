import { IAlert } from '../../types/alert';

enum AlertAction {
  Add = 'alert/add',
  Remove = 'alert/remove',
  Clear = 'alert/clear',
};

type AddAlertAction = {
  type: AlertAction,
  payload: IAlert,
};

export const createAddAlertAction = (alert: IAlert): AddAlertAction => ({
  type: AlertAction.Add,
  payload: alert,
});

type RemoveAlertAction = {
  type: AlertAction.Remove,
  payload: number,
};

export const createRemoveAlertAction = (alertId: number): RemoveAlertAction => ({
  type: AlertAction.Remove,
  payload: alertId,
});

type ClearAlertsAction = {
  type: AlertAction.Clear,
};

export const createClearAlertsAction = (): ClearAlertsAction => ({
  type: AlertAction.Clear,
});


type AlertActionCreator = (
  ClearAlertsAction | RemoveAlertAction | AddAlertAction
);

export const alertsReducer = (alerts: IAlert[] = [], action: AlertActionCreator): IAlert[] => {
  switch (action.type) {
    case AlertAction.Add:
      return alerts.concat(action.payload);

    case AlertAction.Remove:
      const newAlerts = alerts.filter((al) => al.id !== action.payload);
      return newAlerts;

    case AlertAction.Clear:
      return [];

    default:
      return alerts;
  }
}
