import { Router } from 'express'
import mongoose from 'mongoose'
import {
  deleteBuilder,
  getBuilder,
  patchBuilder,
  postBuilder,
  putBuilder,
  schemaBuilder,
} from '../builder'
import * as helpers from '../helper'

const MONGODB_URI = 'mongodb://ds117773.mlab.com:17773/heroku_ct4wmvhs'
const MONGODB_USER = 'jaylordtorres2'
const MONGODB_PASS = 'yvpHUh5xthBTwd'

const authData = {
  user: MONGODB_USER,
  pass: MONGODB_PASS,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}
//
//
//
const db = {}

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

  await Object.keys(resources).map(key => {
    const router = Router()
    const { modelBuilder } = resources[key]
    const resourceParams = { db, key, router, helpers, modelBuilder, mongoose }
    const genList = [
      // mut order base on needs
      schemaBuilder,
      getBuilder,
      deleteBuilder,
      patchBuilder,
      postBuilder,
      putBuilder,
    ]

    genList.forEach(fn => fn(resourceParams))
    // config
    app.use(`/${key}`, router)
  })
  // route not found
  app.use((req, res) => res.sendStatus(404))
}

export default fnResource
