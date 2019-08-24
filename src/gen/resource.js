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
import { connectDB } from '../connectivity/db'

//
//
//
const db = {}

const fnResource = ({ app, options }) => async resources => {
  // db
  connectDB({ mongoose, options })

  await Object.keys(resources).map(key => {
    const router = Router()
    const { modelBuilder } = resources[key]
    const resourceParams = { db, key, router, helpers, modelBuilder, mongoose }
    const genList = [
      // must order base on needs
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
