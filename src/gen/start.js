import { serverMaker } from '../bin/www'

const fnStart = ({ app, options }) => () => serverMaker(app, options.port)

export default fnStart
