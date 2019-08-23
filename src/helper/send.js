export const success = (res, data = {}) => {
  return res.json({
    data,
  })
}
