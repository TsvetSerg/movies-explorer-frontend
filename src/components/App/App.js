import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { Route, Switch, useHistory } from 'react-router-dom';
import { savedMovie } from '../../utils/movieData';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import SearchForm from '../SearchForm/SearchForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as AuthMainApi from '../../utils/AuthMainApi';
import movieApi from '../../utils/MainApi';

function App() {

  const history = useHistory();
  const [isLogin, setLogin] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({});

  function handelLogin() {
    setLogin(true)
  }

  function handelCheckToken() {
    const token = localStorage.getItem('token')

    if(token) {
      movieApi.setToken(token)
      AuthMainApi.getToken(token)
      .then((iserInfo) => {
        setLogin(true)
        history.push('/movies')
        // Тут будем обновлять Current данные
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  function handelRegistr(name, email, password) {
    AuthMainApi.register({
      name: name,
      email: email,
      password: password
    })
  }

  function handelAutorize(email, password) {
    AuthMainApi.authorize({
      identifier: email,
      password: password
    }).then((date) => {
      if(date.token) {
        setLogin(true);
        history.push('/movies')
        handelCheckToken()
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="page__container">

      <CurrentUserContext.Provider value={currentUser}>
        <Switch>

          <Route exact path="/">
            <Header/>
            <Main/>
            <Footer/>
          </Route>

            <ProtectedRoute
            exact path='/movies'
            authorize = {isLogin}
            Component = {(
              <Route>
                <Header
                 isLogin={handelLogin}
                 />
                <Movies/>
                <Footer/>
              </Route>
            )}/>

            <ProtectedRoute
            exact path='/saved-movies'
            authorize = {isLogin}
            Component = {(
              <Route>
                <Header
                 isLogin={handelLogin}
                 />
                <SearchForm/>
                <MoviesCardList dataMovie={savedMovie}/>
                <Footer/>
              </Route>
            )}/>

            <ProtectedRoute
            exact path='/profile'
            authorize = {isLogin}
            Component = {(
              <Route>
                <Header
                 isLogin={handelLogin}
                 />
                <Profile/>
              </Route>
            )}/>

            <ProtectedRoute
            exact path='/edit-profile'
            authorize = {isLogin}
            Component = {(
              <Route>
                <EditProfile/>
              </Route>
            )}/>

          <Route path="/signin">
            <Login
              handelAutorize = {handelAutorize}
            />
          </Route>

          <Route path="/signup">
            <Register
              handelRegistr = {handelRegistr}
            />
          </Route>

          <Route path="*">
           <NotFound/>
          </Route>

        </Switch>

      </CurrentUserContext.Provider>
    </div>
  )

}

export default App;
