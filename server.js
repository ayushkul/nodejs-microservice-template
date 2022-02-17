import APP from 'express'
import DBConnection from './config/dbConnection'
import Config from './config'
import routes from './routes'
import Logger from "./app/utils/logger";

const app = new APP()
require('./config/express')(app)
global.logger = Logger

class Server {
  static listen () {
    Promise.all([DBConnection.connect()]).then(() => {
      app.listen(Config.PORT)
      routes(app)
      logger.info('listen', `Server Started on port ${Config.PORT}`, {}, 'AyushK')
    }).catch(error => Logger.error('listen', 'failed to connect', { err: error }, 'AyushK'))
  }
}

Server.listen()
