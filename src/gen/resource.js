import { Router } from 'express'
import { getBuilder, postBuilder } from '../builder'
//
//
//

const fnResource = ({ app }) => async resources => {
  await Object.keys(resources).map(key => {
    console.log('creating resources for: ', key)
    const router = Router()
    // get
    getBuilder({ router, key })

    // post
    postBuilder({ router, key })

    // config
    app.use(`/${key}`, router)
  })
  // route not found
  app.use((req, res) => res.sendStatus(404))
}

export default fnResource
