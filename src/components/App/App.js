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
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import SearchForm from '../SearchForm/SearchForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as AuthMainApi from '../../utils/AuthMainApi';
import movieApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';

function App() {

  const history = useHistory();
  const [isLogin, setLogin] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({});
  const [currentMovie, setCurrentMovie] = React.useState([]);
  const [isSearchFilm, setSearchFilm] = React.useState(false)
  const [isLocal, setLocal] = React.useState();
  const [isFilterMoviesData, setFilterMoviesData] = React.useState([])
  const [isMassageSearch, setMassageSearch] = React.useState('Ничего не найдено')
  const [isShortFilm, setShortFilm] = React.useState(false);
  const [isSavedMovie, setSavedMovie] = React.useState([]);
  const [isLikeFilm, setLikeFilm] = React.useState(true);
  const [isCreateMovie, setCreateMovie] = React.useState(false);


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
    if(tokenMovie && tokenMovie.length === 0) {
      setLocal(false)
    } else if (tokenMovie) {
      setFilterMoviesData(tokenMovie)
      setSearchFilm(true);
      setLocal(false)
    } else {
      setLocal(false)
    }
  }, [isLocal])


  React.useEffect(() => {
    Promise.all([movieApi.getAllLikeMovie()])
    .then(([SavedFilm]) => {
      setSavedMovie(SavedFilm)
      setCreateMovie(false)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [isCreateMovie]);

  React.useEffect(() => {
    handelLikeButton(isSavedMovie, currentMovie)
  }, [ ])

  function handelCheckToken() {
    const token = localStorage.getItem('token')

    if(token) {
      movieApi.setToken(token)
      AuthMainApi.getToken(token)
      .then((iserInfo) => {
        setLogin(true);
        history.push('/movies');
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

  // ------------------------------------------------------

  const [request, setRequest] = React.useState('')

  function filter(movie, request) {
    let movieBase;
    if (request) {
      // console.log(request);
      const regex = new RegExp(request, 'gi');
      movieBase = movie.filter((item) => {
        return regex.test(item.nameRU) || regex.test(item.nameEN)
      })
      if(movieBase.length === 0) {
        setSearchFilm(false)
        setMassageSearch('Ничего не найдено, попробуйте ввести другой запрос.')
      } else {
        setMassageSearch('')
      }
      return movieBase;
    }
    return movieBase;
  }

  function searchMovie22(request) {
    setTimeout(() => {
      setRequest(request)
      const result = filter(currentMovie, request);
      localStorage.setItem('movie', JSON.stringify(result));
      setLocal(true);

    }, 500)

  }



  // ------------------------------------------------------

  function ChangeFilter() {
      setShortFilm(true);
      console.log(isShortFilm);
  }

  // описываем логику лайка/сохранение фильма

  function handelSavedMovie(movie) {
    addMovie(movie);
  }

  function addMovie(movie) {
    movieApi.savedMovie(movie)
    .then((res) => {
      setSavedMovie([...isSavedMovie, { ...res, id: res.movieId}])
    })
    .then(() => {
      setCreateMovie(true)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const [isLiked, setLikede] = React.useState(false);

  function Liked() {
    handelLikeButton(isSavedMovie, currentMovie)
  }

  function handelLikeButton(savedMovie, movieBase) {
    if(savedMovie.length > movieBase.length) {
      setLikede(true);
    } else {
      setLikede(false);
    }
  }

  function SavedMovieId(movie) {
    return isSavedMovie.some((item) => item.movieId === movie.id)
  }

  function SavedFilmId(movie) {
    return isSavedMovie.some((item) => item.owner === movie.owner)
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
                  SavedMovieId ={SavedMovieId}
                  isLiked = {isLiked}
                  isSearchFilm = {isSearchFilm}
                  // dataMovie = {isSearchFilm ? isFilterMoviesData: currentMovie}
                  dataMovie = {isFilterMoviesData}
                  searchMovie = {searchMovie22}
                  Message = {isMassageSearch}
                  ChangeFilter = {ChangeFilter}
                  savedMovie={handelSavedMovie}
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
                <MoviesCardList
                  SavedMovieId ={SavedMovieId}
                  isLikeFilm = {isLikeFilm}
                  isSearchFilm = {isSearchFilm}
                  dataMovie={isSavedMovie}
                />
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
