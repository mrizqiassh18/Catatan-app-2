import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Navigation from './Navigation';
import DetailPage from '../pages/DetailPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';
import { ThemeProvider } from '../contexts/ThemeContext';
import ToggleTheme from './ToggleTheme';

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      document.documentElement.setAttribute('data-theme', this.state.theme);
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      }
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <div className='container'>
            <ToggleTheme />
            <div className='catatan-app'>
              <header className='catatan-app__header'>
                <h1>Your Notes</h1>
              </header>
              <main>
                <Routes>
                  <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                  <Route path='/register' element={<RegisterPage />} />
                </Routes>
              </main>
            </div>
          </div>
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider value={this.state}>
        <div className='catatan-app'>
          <div className='container'>
            <ToggleTheme />
            <header className='catatan-app__header'>
              <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
              <h1>Your Notes</h1>
            </header>
            <main>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='detail/:id' element={<DetailPage />} />
                </Routes>
              </main>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default CatatanApp;