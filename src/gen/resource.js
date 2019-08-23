import { Router } from 'express'
//
//
//

const fnResource = app => async resources => {
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
  // route not found
  app.use((req, res) => res.sendStatus(404))
}

export default fnResource
