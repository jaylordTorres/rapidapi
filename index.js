//  BlackThunder
import app from './src/app'
import { fnResource, fnStart } from './src/gen'
const BlackThunder = options => {
  console.log('creating server using options:', options)
  const instance = {
    resource: fnResource({ app, options }),
    start: fnStart({ app, options }),
  }

  return instance
}

export default BlackThunder
