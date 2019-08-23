export const getBuilder = ({ router, key, db }) => {
  console.log('db')
  console.log('creating resources GET for: ', key)
  //
  router.get('/', async (req, res) => {
    try {
      const user = await db.User.findByLogin('jaylord')
      return res.json({
        get: key,
        user: user,
      })
    } catch (e) {
      console.log(e)
      return res.sendStatus(400)
    }
  })
}
