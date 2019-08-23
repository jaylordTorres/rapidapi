export const postBuilder = async ({ db, key, router, helpers }) => {
  router.post('/', async (req, res) => {
    try {
      const rec = db[key](req.body)
      await rec.save()

      return helpers.success(res, rec)
    } catch (e) {
      console.log(e)
      return res.sendStatus(400)
    }
  })
}
