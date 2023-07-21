import classNames from 'classnames';

import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { toggleSettings, login, logout } from '../../../store/reducers/settings';
import Input from '../Input/Input';

import './Settings.scss';

function Settings() {
  const isOpen = useAppSelector((state) => state.settings.isOpen);
  const isLoading = useAppSelector((state) => state.settings.isLoading);
  const pseudo = useAppSelector((state) => state.settings.pseudo);

  const dispatch = useAppDispatch();

  function handleClickToggler() {
    dispatch(toggleSettings());
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    dispatch(login(formData));
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <aside className={classNames('settings', { 'settings--open': isOpen })}>
      <button
        type="button"
        className="settings-toggler"
        title={`${isOpen ? 'Fermer' : 'Ouvrir'} le formulaire de connexion`}
        onClick={handleClickToggler}
      >
        +
      </button>

      {!pseudo && (
        // si pseudo est null, on est pas connecté
        // → on affiche le formulaire
        <form className="settings-form" onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            className="settings-input"
            placeholder="Adresse e-mail"
            aria-label="Adresse e-mail"
          />
          <Input
            name="password"
            type="password"
            className="settings-input"
            placeholder="Mot de passe"
            aria-label="Mot de passe"
          />
          <button
            type="submit"
            className="settings-button"
            disabled={isLoading}
          >
            {isLoading ? 'Chargement…' : 'Se connecter'}
          </button>
        </form>
      )}

      {pseudo && (
        // j'ai un pseudo, mon utilisateur est connecté
        <div className="settings-logged">
          <p>
            Vous êtes connecté en tant que
            <strong>{pseudo}</strong>
          </p>

          <button
            type="button"
            className="settings-button"
            onClick={handleLogout}
          >
            Se déconnecter
          </button>
        </div>
      )}
    </aside>
  );
}

export default Settings;
