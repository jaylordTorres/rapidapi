//  BlackThunder
import { Router } from 'express'
import app from './src/app'
import { serverMaker } from './src/bin/www'

const BlackThunder = options => {
  console.log('options:', options)

  const instance = {
    resource: async resources => {
      await Object.keys(resources).map(key => {
        console.log('creating resources for: ', key)
        const router = Router()
        router.get('/', (req, res) => {
          res.json({
            get: key,
          })
        })
        router.post('/', (req, res) => {
          res.json({
            post: key,
          })
        })
        app.use(`/${key}`, router)
      })
      serverMaker(app, options.port)
    },
  }

  return instance
}

export default BlackThunder
