//  BlackThunder
import app from './src/app'
import { fnResource, fnStart } from './src/gen'

const BlackThunder = options => {
  console.log('options:', options)

  const instance = {
    resource: fnResource(app),
    start: fnStart(app, options),
  }

  return instance
}

export default BlackThunder
