import BlackThunder from './index'

BlackThunder({
  port: process.env.PORT || '3000',
}).resource({
  user: {
    model: 'modelName',
  },
})
