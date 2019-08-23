export const postBuilder = async ({ router, key }) => {
  console.log('creating resources POST for: ', key)
  router.post('/', (req, res) => {
    res.json({
      post: key,
    })
  })
}
