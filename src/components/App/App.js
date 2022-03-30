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
  const [isSearchFilm, setSearchFilm] = React.useState(true)
  const [isLocal, setLocal] = React.useState();
  const [isFilterMoviesData, setFilterMoviesData] = React.useState([])
  const [isMassageSearch, setMassageSearch] = React.useState('');
  const [isShortFilm, setShortFilm] = React.useState(false);
  const [isSavedMovie, setSavedMovie] = React.useState([]);
  const [isLikeFilm, setLikeFilm] = React.useState(true);
  const [isCreateMovie, setCreateMovie] = React.useState(false);
  const [isLiked, setLikede] = React.useState(false);
  const [request, setRequest] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);
  const [isNotResult, setNotResult] = React.useState(true);
  const [isAuthError, setAuthError] = React.useState('');
  const [isRenderFilm, setRenderFilm] = React.useState([]);
  const [isSerchSaveFilm,  setSerchSaveFilm] = React.useState(false);

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
      setLocal(false);
      setLoading(false);
      setNotResult(false);
    } else if (tokenMovie) {
      setFilterMoviesData(tokenMovie)
      // setNotResult(true)
      setSearchFilm(false);
      setLocal(false);
      setLoading(false);
    } else {
      setNotResult(false);
      setLocal(false);
      setLoading(false);
    }
  }, [isLocal])


  React.useEffect(() => {
    Promise.all([movieApi.getAllLikeMovie()])
    .then(([SavedFilm]) => {
      setSavedMovie(SavedFilm);
      setCreateMovie(false);
    })
    .catch((err) => {
      setSearchFilm(true);
      setNotResult(false);
      setMassageSearch('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
    })
  }, [isCreateMovie]);

  function getlikedMovie() {
    Promise.all([movieApi.getAllLikeMovie()])
    .then(([data]) => {
      setSavedMovie(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function getBestFilm() {
    MoviesApi.getBestFilm()
    .then((allFilm) => {
      setCurrentMovie(allFilm);
    })
    .catch((err) => {
      console.log(err);
    })
  }

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
    localStorage.removeItem('movie');
    localStorage.removeItem('movieSaved');
    setLogin(false)
    history.push('/')
  }

  function handelRegistr(name, email, password) {
    AuthMainApi.register({
      name: name,
      email: email,
      password: password
    }).then(() => {
      history.push('/signin')
    })
    .catch((err) => {
      if (err === 409) {
        return setAuthError('Пользователь с данным email уже существует.')
      }
      if (err === 400) {
        return setAuthError('Некорректные данные в одном из полей.')
      }

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
        handelCheckToken();
        getlikedMovie();
        getBestFilm();
      }
    })
    .catch((err) => {
      if (err === 400) {
        return setAuthError('Неправильно переданны E-mail или Пароль.')
      }
      if (err === 401) {
        return setAuthError('Пользователь не найден. Возможно вы допустили ошибку, попробуйте снова.')
      }
      console.log(err);
    })
  }

  function handelUpdateProfile(name, email) {
    movieApi.updateUser({
      name: name,
      email: email
    })
    .then((data) => {
      history.push('/profile');
      setCurrentUser(data);
    })
    .catch(() => {
      setAuthError('Что то пошло не так. Возможно данный E-mail занят или вы ввели не подходящие данные.');
    })
  }

  // ------------------------------------------------------



  function filter(movie, request) {
    let movieBase;
    if (request) {
      const regex = new RegExp(request, 'gi');
      movieBase = movie.filter((item) => {
        return regex.test(item.nameRU) || regex.test(item.nameEN)
      })
      if(movieBase.length === 0) {
        setSearchFilm(true);
        setNotResult(false);
        setMassageSearch('Ничего не найдено, попробуйте ввести другой запрос.');
      } else {
        setMassageSearch('')
      }
      return movieBase;
    }
    return movieBase;
  }

  function searchMovie(request) {
    setLoading(true);
    setNotResult(true);
    setTimeout(() => {
      setRequest(request)
      const result = filter(currentMovie, request);
      localStorage.setItem('movie', JSON.stringify(result));
      setLocal(true);

    }, 500)

  }

  function searchSavedMovie(request) {
    setLoading(true);
    setNotResult(true);
    setSerchSaveFilm(true);
    setTimeout(() => {
      setRequest(request)
      const result = filter(isSavedMovie, request);
      localStorage.setItem('movieSaved', JSON.stringify(result));
      setLocal(true);

    }, 500)
    localStorage.removeItem('movieSaved');
    setRenderFilm([]);

  }

  React.useEffect(() => {
    const savedMovie = JSON.parse(localStorage.getItem('movieSaved'));
    if(savedMovie && savedMovie.length === 0) {
      setLocal(false);
      setLoading(false);
      setSerchSaveFilm(false)
    } else if (savedMovie) {
      setRenderFilm(savedMovie)
      setSearchFilm(false);
      setLocal(false);
      setLoading(false);
    } else {
      setLocal(false);
      setLoading(false);
      setSerchSaveFilm(false)
    }
  }, [isLocal])


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
    const baseUrl = 'https://api.nomoreparties.co'
    movieApi.savedMovie({
      country: movie.country ? movie.country : 'Not Country',
      director: movie.director ? movie.director : 'Not director',
      duration: movie.duration ? movie.duration : '0',
      year: movie.year ? movie.year : '0000',
      description: movie.description ? movie.description : 'Not description',
      image: movie.image ? baseUrl + movie.image.url : 'No Image',
      trailerLink: movie.trailerLink ? movie.trailerLink : 'trailerLink',
      movieId: movie.id,
      nameRU: movie.nameRU ? movie.nameRU : 'Not nameRU',
      nameEN: movie.nameEN ? movie.nameEN : 'Not nameEN',
    })
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

  function deletMovie(id) {
    movieApi.deletMovie(id)
    .then(() => {
      setCreateMovie(true)
    })
    .catch((err) => {
      console.log(err);
    })


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
    return isSavedMovie.some(() => movie.owner === currentUser._id)
  }

  function handelChangeFilter() {
    if (!isShortFilm) {
      setShortFilm(true);
    } else {
      setShortFilm(false);
    }
  }

  function filterDuration(movies) {
    return movies.filter((i) => {
      return i.duration < 40
    })
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
                  isNotResult = {isNotResult}
                  isLoading = {isLoading}
                  SavedMovieId ={SavedMovieId}
                  isLiked = {isLiked}
                  isSearchFilm = {isSearchFilm}
                  dataMovie = {isShortFilm ? filterDuration(isFilterMoviesData) : isFilterMoviesData}
                  searchMovie = {searchMovie}
                  Message = {isMassageSearch}
                  ChangeFilter = {ChangeFilter}
                  savedMovie={handelSavedMovie}
                  deletMovie = {deletMovie}
                  handelChangeFilter = {handelChangeFilter}
                  deletSaveMovie = {isSavedMovie}
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
                <SearchForm
                  ChangeFilter = {handelChangeFilter}
                  searchSavedMovie = {searchSavedMovie}
                />
                <MoviesCardList
                  SavedMovieId ={SavedFilmId}
                  isLikeFilm = {isLikeFilm}
                  isSearchFilm = {isSearchFilm}
                  dataMovie={isSerchSaveFilm ? isRenderFilm : isShortFilm ? filterDuration(isSavedMovie) : isSavedMovie}
                  deletMovie = {deletMovie}
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
                <EditProfile
                  handelUpdate = {handelUpdateProfile}
                  authError = {isAuthError}
                  setAuthError = {setAuthError}
                />
              </Route>
            )}/>

          <Route path="/signin">
            <Login
              handelAutorize = {handelAutorize}
              authError = {isAuthError}
              setAuthError = {setAuthError}
            />
          </Route>

          <Route path="/signup">
            <Register
              handelRegistr = {handelRegistr}
              authError = {isAuthError}
              setAuthError = {setAuthError}
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
