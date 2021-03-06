import axios from 'axios';


class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  isLoggedIn = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout')
    .then(response => response.data)
  }

  private = () => {
    return this.service.get('/private')
    .then(response => response.data)
  }
}

export default AuthService;


