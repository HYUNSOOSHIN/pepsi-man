const type = "dev"

const URL = {
  dev: {
    api: "https//naver.com",
  },
  prod: {
    api: "https//goole.com",
  },
}

module.exports = {
  API_URL: URL[type].api,
}
