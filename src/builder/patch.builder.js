export const patchBuilder = async ({ db, key, router, helpers }) => {
  router.patch('/:_id', async (req, res) => {
    try {
      const id = req.params._id
      await db[key].findByIdAndUpdate(id, req.body)
      const rec = await db[key].find({ _id: id })

      return helpers.success(res, rec)
    } catch (e) {
      console.log(e)
      return res.sendStatus(400)
    }
  })
}
