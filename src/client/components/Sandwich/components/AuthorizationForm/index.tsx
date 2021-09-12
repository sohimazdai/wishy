import { useCallback, useState } from 'react';
import classNames from 'classnames';

import BaseButton, { ButtonFormFactor } from '../../../BaseButton';
import BaseInput, { InputSize } from '../../../Input';
import CloseIcon from './CloseIcon';

import { IUser } from '../../../../../shared/models/user';
import { api } from '../../../../api';
import { connect } from 'react-redux';
import { IStorage } from '../../../../../shared/models/storage';
import { createSetUserAction } from '../../../../store/items/user';
import { Dispatch } from 'redux';

enum Mode {
  Auth = 'auth',
  SignUp = 'sign-up',
}

const mapState = (state: IStorage) => ({
  user: state.user,
});

const mapDispatch = (dispatch: Dispatch) => ({
  onSetUser: (user: IUser) => dispatch(createSetUserAction(user)),
});

interface Props {
  isModal?: boolean;
  open: boolean;
  onClose?: () => void;
  user: IUser | null;
  onSetUser: (user: IUser) => void;
}

export function AuthorizationForm(props: Props) {
  const { isModal, open, onClose, onSetUser } = props;

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [mode, setMode] = useState(Mode.Auth);
  const [authError, setAuthError] = useState('');

  const handleChangeMode = useCallback((mode: Mode) => {
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setEmailError('');
    setPasswordError('');
    setPasswordConfirmationError('');
    setMode(mode);
    setAuthError('');
  }, [mode])

  const handleChangeEmail = useCallback(setEmail, [setEmail]);

  const handleChangePassword = useCallback(setPassword, [setPassword]);

  const handleChangePasswordConfirmation = useCallback(
    setPasswordConfirmation,
    [setPasswordConfirmation],
  );

  const validate = (): boolean => {
    let isValid = true;

    if (!(/@/i.test(email))) {
      setEmailError('Некорректный email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Пароль должен иметь больше 6 символов');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (mode === Mode.SignUp && password !== passwordConfirmation) {
      setPasswordConfirmationError('Пароли не совпадают')
      isValid = false;
    } else {
      setPasswordConfirmationError('');
    }

    return isValid;
  }

  const handleAuthButtonPress = useCallback(() => {
    const path = mode === Mode.Auth ? 'auth/login' : 'auth/signup';

    if (validate()) {
      setAuthLoading(true);
      api.post<IUser>(
        path,
        {
          email,
          password,
        },
      ).then((user) => {
        onSetUser(user);
        onClose && onClose();
        setAuthLoading(false);
      }).catch((e) => setAuthError(e.message));
    }
  }, [email, password, passwordConfirmation]);

  const isAuthMode = mode === Mode.Auth;

  if (!open) {
    return null;
  }

  const fadeCn = classNames('sandwich_authorizationForm_fade', {
    'sandwich_authorizationForm_fade--open': open,
    'sandwich_authorizationForm_fade--ignored': !isModal,
  });
  const contentCn = classNames('sandwich_authorizationForm', {
    'sandwich_authorizationForm--open': open,
  })

  const description = !isModal && 'Чтобы продолжить, войдите в свой аккаунт';

  return (
    <div className={fadeCn} onClick={onClose} >
      <div className={contentCn}>
        {!!description && <h4>{description}</h4>}
        <div className="sandwich_authorizationForm_content" onClick={e => { e.stopPropagation() }}>
          <h3 className="sandwich_authorizationForm_header">
            {isAuthMode ? 'Авторизация' : 'Регистрация'}
          </h3>
          {!!isModal && (
            <button className="sandwich_authorizationForm_closeIcon" onClick={onClose}>
              <CloseIcon />
            </button>
          )}
          <div className="sandwich_authorizationForm_form">
            <BaseInput
              value={email}
              onChangeText={handleChangeEmail}
              formFactor={InputSize.Medium}
              label="E-mail"
              placeholder="Введите e-mail"
              type="email"
              error={emailError}
            />
            <BaseInput
              value={password}
              onChangeText={handleChangePassword}
              formFactor={InputSize.Medium}
              label="Пароль"
              placeholder="Введите пароль"
              error={passwordError}
            />
            {!isAuthMode && (
              <BaseInput
                value={passwordConfirmation}
                onChangeText={handleChangePasswordConfirmation}
                formFactor={InputSize.Medium}
                label="Повтор пароля"
                placeholder="Повторите пароль"
                error={passwordConfirmationError}
              />
            )}

            <div className="sandwich_authorizationForm_formButtons">
              {isAuthMode
                ? (
                  <BaseButton
                    text="Авторизоваться"
                    onClick={handleAuthButtonPress}
                    loading={authLoading}
                    formFactor={ButtonFormFactor.Medium}
                  />
                ) : (
                  <BaseButton
                    text="Зарегистрироваться"
                    onClick={handleAuthButtonPress}
                    loading={authLoading}
                    formFactor={ButtonFormFactor.Medium}
                  />
                )
              }
              {authError && <p>{authError}</p>}

              {isAuthMode
                ? (
                  <BaseButton
                    text="Регистрация"
                    onClick={() => handleChangeMode(Mode.SignUp)}
                    formFactor={ButtonFormFactor.Link}
                  />
                ) : (
                  <BaseButton
                    text="Авторизация"
                    onClick={() => handleChangeMode(Mode.Auth)}
                    formFactor={ButtonFormFactor.Link}
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapState, mapDispatch)(AuthorizationForm);
