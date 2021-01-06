import axios from "axios"
import { navigate } from "gatsby"
import cookie from "react-cookies"
import { API_URL } from "../config/config"

const apiFunction = method => {
  return async (url, { body = {}, header = {}, token = false } = {}) => {
    const accessToken = token ? await cookie.load("access_token", { path: "/" }) : ""

    try {
      const result = await axios({
        method: method,
        url: API_URL + url,
        data: body,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          ...header,
        },
      })
      return result
    } catch (err) {
      if (err.response) {
        console.log(err.response)
        if (err.response.status === 400) {
          return err.response.data
        } else if (err.response.status === 403) {
          navigate("/app/login")
          return false
        }
      }
    } finally {
      // 주석
    }
  }
}

const api = {
  post: apiFunction("POST"),
  get: apiFunction("GET"),
  patch: apiFunction("PATCH"),
  delete: apiFunction("DELETE"),
}

export default api
