export const getBuilder = ({ db, key, router }) => {
  router.get('/', async (req, res) => {
    try {
      return res.json({
        get: key,
        data: await db[key].find({}),
      })
    } catch (e) {
      console.log(e)
      return res.sendStatus(400)
    }
  })
}
