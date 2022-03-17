export const baseUrl = 'https://api.movie.students.nomoredomains.work'

function checked(res) {
  if (res.ok) {
    return res.json().then(jsonData => {
      return Promise.resolve(jsonData);
    });
  }
  return Promise.reject(res.status)
}

export const register = ({name, email, password}) => {
  return fetch(`${baseUrl}/signup`,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": name,
    "email": email,
    "password": password,
  })
})
.then((res) => {
  return checked(res)
})
}

export const authorize = ({identifier, password}) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": identifier,
      "password": password
    })
  })
  .then((res) => {
    return checked(res)
  })
  .then((data) => {
    if (data) {
      localStorage.setItem('token', data.token);
    }
    return data;
  })
}

export const getToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then((res) => {
    return checked(res)
  })
}
