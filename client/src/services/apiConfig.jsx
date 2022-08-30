let apiUrl

const apiUrls = {
  production: 'https://git.heroku.com/fierce-lake-31754.git',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}