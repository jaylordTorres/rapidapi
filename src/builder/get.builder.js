export const getBuilder = ({ router, key }) => {
  console.log('creating resources GET for: ', key)
  router.get('/', (req, res) => {
    res.json({
      get: key,
    })
  })
}
