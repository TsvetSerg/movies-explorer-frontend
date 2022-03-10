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
import { Route, Switch } from 'react-router-dom';
import { savedMovie } from '../../utils/movieData';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import SearchForm from '../SearchForm/SearchForm';

function App() {

  const [isLogin, setLogin] = React.useState(false)

  function handelLogin() {
    setLogin(true)
  }

  return (
    <div className="page__container">
      <Switch>
        <Route exact path="/">
          <Header/>
          <Main/>
          <Footer/>
        </Route>

        <Route path="/movies">
          <Header
           isLogin={handelLogin}
           />
          <Movies/>
          <Footer/>
        </Route>

        <Route path="/saved-movies">
          <Header
           isLogin={handelLogin}
           />
          <SearchForm/>
          <MoviesCardList dataMovie={savedMovie}/>
          <Footer/>
        </Route>

        <Route path="/profile">
          <Header
           isLogin={handelLogin}
           />
          <Profile/>
        </Route>

        <Route path="/edit-profile">
          <EditProfile/>
        </Route>

        <Route path="/signin">
          <Login/>
        </Route>

        <Route path="/signup">
          <Register/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  )

}

export default App;
