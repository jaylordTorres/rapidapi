export const fnSample = mongoose => {
  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
    },
  })

  return userSchema
}
