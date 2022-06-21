// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// login
import { LoginContainer } from '@components/login/login.jsx';

/**
 * login view
 */
class LoginView extends React.Component {
  render() {
    return (
      <LoginContainer
        usernameHolder={'username'}
        passwordHolder={'password'}
        loginBtn={'Login'}
        loginSucUrl={'/manage'}
      />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<LoginView />);