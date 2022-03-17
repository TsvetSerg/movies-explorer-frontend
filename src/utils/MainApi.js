class MainApi {
  constructor(options) {
    this._url = options.baseUrl
    this._headers = options.headers
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка запроса: ${res.status}`);
  }

  // Получаем данные пользователя
  getUser() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._check)
  }

  // обновляем профиль пользователя
  updateUser(input) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: input.editName,
        email: input.editMail
      })
    })
    .then(this._check)
  }

  //Получаем все сохраненные фильмы
  getAllLikeMovie() {
    return fetch(this._url + '/movies', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._check)
  }

  //Добовляем фильм в сохраненные методом создания фильма
  savedMovie(movieCard) {
    return fetch(this._url + '/movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movieCard.country,
        director: movieCard.director,
        duration: movieCard.duration,
        year: movieCard.year,
        description: movieCard.description,
        image: movieCard.image,
        trailerLink: movieCard.trailerLink,
        thumbnail: movieCard.thumbnail,
        owner: movieCard.owner,
        movieId: movieCard.movieId,
        nameRU: movieCard.nameRU,
        nameEN: movieCard.nameEN,
      })
    })
  }

  //Удаляем сохраненный фильм
  deletMovie(movieId) {
    return fetch(this._url + `/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._check)
  }


  setToken(token) {
    this._headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
//  ------------------------
}

const movieApi = new MainApi({
  baseUrl: 'https://api.movie.students.nomoredomains.work',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
})

export default movieApi;
