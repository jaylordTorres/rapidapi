import BlackThunder from './index'

const server = BlackThunder({
  port: process.env.PORT || '3000',
})

server.resource({
  user: {
    model: 'modelName',
  },
})

server.start()
