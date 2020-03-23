import axios from "axios"

const API_ROOT = process.env.REACT_APP_API_ENDPOINT

const agent = axios({
  baseURL: API_ROOT,
  timeout: 30000,
  // headers: { Authorization:  },
  validateStatus: function(status) {
    return status >= 200 && status < 403 // default
  },
  cache: {
    maxAge: 15,
    exclude: { query: false },
  },
})

export const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
    console.error(err)
  }
  return err
}

const requests = {
  del: url => agent.del(url),
  get: url => agent.get(url).then(r => r.data),
  put: (url, body) => agent.put(url, body),
  post: (url, body) => agent.post(url, body),
}

const api = {
  submit: p => requests.post("/api/survey/, p"),
}

export default {
  api,
}
