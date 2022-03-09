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

function App() {

  return (
    <div className="page__container">
      <Switch>
        <Route exact path="/">
          <Header/>
          <Main/>
          <Footer/>
        </Route>

        <Route path="/movies">
          <Header/>
          <Movies/>
          <Footer/>
        </Route>

        <Route path="/saved-movies">
          <Header/>
          <MoviesCardList dataMovie={savedMovie}/>
          <Footer/>
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
