const dev = {
  app: {
    base_url: 'localhost:3001'
  }
}

const pro = {
  app: {
    base_url: 'XXXX' //TODO
  }
}

const config = { dev, pro }

const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]
