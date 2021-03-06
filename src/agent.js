import axios from "axios"

const API_ROOT = process.env.REACT_APP_API_ENDPOINT

const agent = axios.create({
  baseURL: API_ROOT,
  timeout: 30000,
  validateStatus: function(status) {
    return status >= 200 && status < 403
  },
})

export const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
    console.error(err)
  }
  return err
}

const requests = {
  get: url => agent.get(url).then(r => r.data),
  post: (url, body) => agent.post(url, body).then(r => r.data),
}

export const api = {
  submit: p => requests.post("/api/survey/result/", p),
}
