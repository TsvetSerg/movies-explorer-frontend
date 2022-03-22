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
import moviesData, { savedMovie } from '../../utils/movieData';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import SearchForm from '../SearchForm/SearchForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as AuthMainApi from '../../utils/AuthMainApi';
import movieApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
import Fuse from "fuse.js";

function App() {

  const history = useHistory();
  const [isLogin, setLogin] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({});
  const [currentMovie, setCurrentMovie] = React.useState([]);
  const [isSearchFilm, setSearchFilm] = React.useState(false)
  const [isFilterMoviesData, setFilterMoviesData] = React.useState([])
  const [isMassageSearch, setMassageSearch] = React.useState('')

  React.useEffect(() => {
    handelCheckToken();
    const token = localStorage.getItem('token');
    if (token) {
      Promise.all([movieApi.getUser(), MoviesApi.getBestFilm()])
      .then(([userInfo, allFilm]) => {
        setCurrentUser(userInfo)
        setCurrentMovie(allFilm)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [ ])

  React.useEffect(() => {
    const tokenMovie = JSON.parse(localStorage.getItem('movie'));
    if(tokenMovie) {
      setFilterMoviesData(tokenMovie)
      setSearchFilm(true);
    } else {
      setMassageSearch('Вы еще ничего не искали!!')
    }
  }, [ ])

  function handelCheckToken() {
    const token = localStorage.getItem('token')

    if(token) {
      movieApi.setToken(token)
      AuthMainApi.getToken(token)
      .then((iserInfo) => {
        setLogin(true);
        // history.push('/movies');
        return setCurrentUser(iserInfo);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  function handelTokenRemove() {
    localStorage.removeItem('token');
    setLogin(false)
    history.push('/')
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
        // handelCheckToken()
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }


  function searchFilm(moviesData, searchText) {
    const fuse = new Fuse(moviesData, {
      keys: ["nameRU", 'nameEN'],
      minMatchCharLength: 3,
      threshold: 0.6,
    });
    return fuse.search(searchText)
  }

  function searchMovie(searchText) {
    const result = searchFilm(currentMovie, searchText)
    // if(currentMovie.length > 0) {
    //   // тут будем менять переменную на результата поиска(не выводить ошику)
    // } else {
    //   // тут будем менять переменную на результата поиска(выводить ошику)
    // }
    const tokenMovie = localStorage.setItem('movie', JSON.stringify(result))
    setFilterMoviesData(result);
    setSearchFilm(true);
    setMassageSearch('')
  }


  return (
    <div className="page__container">

      <CurrentUserContext.Provider value={currentUser}>
        <Switch>

          <Route exact path="/">
            <Header
              isLogin={isLogin}
            />
            <Main/>
            <Footer/>
          </Route>

            <ProtectedRoute
            exact path='/movies'
            authorize = {isLogin}
            Component = {(
              <Route>
                <Header
                  name = {currentUser}
                  isLogin={isLogin}
                 />
                <Movies
                  isSearchFilm = {isSearchFilm}
                  // dataMovie = {isSearchFilm ? isFilterMoviesData: currentMovie}
                  dataMovie = {isFilterMoviesData}
                  searchMovie = {searchMovie}
                  Message = {isMassageSearch}
                />
                <Footer/>
              </Route>
            )}/>

            <ProtectedRoute
            exact path='/saved-movies'
            authorize = {isLogin}
            Component = {(
              <Route>
                <Header
                 isLogin={isLogin}
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
                 isLogin={isLogin}
                 />
                <Profile
                  handelTokenRemove = {handelTokenRemove}
                />
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
