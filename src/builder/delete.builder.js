export const deleteBuilder = async ({ db, key, router, helpers }) => {
  router.delete('/:_id', async (req, res) => {
    try {
      const id = req.params._id
      const rec = await db[key].findByIdAndDelete(id)
      return helpers.success(res, rec)
    } catch (e) {
      console.log(e)
      return res.sendStatus(400)
    }
  })
}
