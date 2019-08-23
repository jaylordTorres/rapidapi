import { Router } from 'express'
import { getBuilder, postBuilder } from '../builder'

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
})

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login,
  })

  if (!user) {
    user = await this.findOne({ email: login })
  }
  return user
}

const User = mongoose.model('User', userSchema)

const db_url =
  'mongodb://jaylordtorres:qTgn8s@BT6ZjDzj@ds117773.mlab.com:17773/heroku_ct4wmvhs'

const MONGODB_URI = 'mongodb://ds117773.mlab.com:17773/heroku_ct4wmvhs'
const MONGODB_USER = 'jaylordtorres2'
const MONGODB_PASS = 'yvpHUh5xthBTwd'

const authData = {
  user: MONGODB_USER,
  pass: MONGODB_PASS,
  useNewUrlParser: true,
  useCreateIndex: true,
}
//
//
//

const fnResource = ({ app, options }) => async resources => {
  try {
    await mongoose.connect(MONGODB_URI, authData, err => {
      if (!err) {
        console.log('MongoDB connection succeeded.')
      } else {
        console.log(
          'Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)
        )
      }
    })
  } catch (e) {
    console.log(e)
  }
  const db = { User }
  console.log('ain db', db)
  await Object.keys(resources).map(key => {
    console.log('creating resources for: ', key)
    const router = Router()
    // get
    getBuilder({ router, key, db })

    // post
    postBuilder({ router, key })

    // config
    app.use(`/${key}`, router)
  })
  // route not found
  app.use((req, res) => res.sendStatus(404))
}

export default fnResource
