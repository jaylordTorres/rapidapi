import { Router } from 'express'
import mongoose from 'mongoose'
import * as helpers from '../helper'
import {
  getBuilder,
  postBuilder,
  schemaBuilder,
  putBuilder,
  patchBuilder,
} from '../builder'

const MONGODB_URI = 'mongodb://ds117773.mlab.com:17773/heroku_ct4wmvhs'
const MONGODB_USER = 'jaylordtorres2'
const MONGODB_PASS = 'yvpHUh5xthBTwd'

const authData = {
  user: MONGODB_USER,
  pass: MONGODB_PASS,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
}
//
//
//
let db = {}

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

  console.log('ain db', db)
  await Object.keys(resources).map(key => {
    console.log('creating resources for: ', key)
    const { modelBuilder } = resources[key]
    // db builder
    schemaBuilder({ key, db, modelBuilder, mongoose })

    const router = Router()
    const resourceParams = { db, key, router, helpers }
    // get
    getBuilder(resourceParams)

    // patch
    patchBuilder(resourceParams)

    // post
    postBuilder(resourceParams)

    // put
    putBuilder(resourceParams)

    // config
    app.use(`/${key}`, router)
  })
  // route not found
  app.use((req, res) => res.sendStatus(404))
}

export default fnResource
