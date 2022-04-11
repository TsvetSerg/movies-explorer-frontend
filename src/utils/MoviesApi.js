export const getBestFilm = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if(res.ok) {
      return res.json().then(jsonData => {
        return Promise.resolve(jsonData);
      });
    }
    return Promise.reject(res.status)
  })
}
