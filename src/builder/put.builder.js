export const putBuilder = async ({ db, key, router }) => {
  router.put('/:_id', async (req, res) => {
    try {
      await db[key].findOneAndReplace({ _id: req.params._id }, req.body)
      const rec = await db[key].find({ _id: req.params._id })

      return res.json({
        get: key,
        data: rec,
      })
    } catch (e) {
      console.log(e)
      return res.sendStatus(400)
    }
  })
}
