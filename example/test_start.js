import BlackThunder from '../index'
import { fnSample } from './models/user'

const server = BlackThunder({
  port: process.env.PORT || '3000',
  dbUri: 'mongodb://ds117773.mlab.com:17773/heroku_ct4wmvhs',
  dbUsername: 'jaylordtorres2',
  dbPassword: 'yvpHUh5xthBTwd',
})

server.resource({
  user: {
    modelBuilder: fnSample,
  },
})

server.start()
