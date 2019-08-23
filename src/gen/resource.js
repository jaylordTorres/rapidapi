import { Router } from 'express'
import { getBuilder } from '../builder/getBuilder'
import { postBuilder } from '../builder/postBuilder'
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
