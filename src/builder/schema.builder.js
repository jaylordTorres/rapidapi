export const fnSample = mongoose => {
  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
    },
  })

  userSchema.statics.findByLogin = async function(login) {
    let user = await this.findOne({
      username: login,
    })

    if (!user) {
      user = await this.findOne({ email: login })
    }
    return user
  }

  return userSchema
}

export const schemaBuilder = ({ key, db, modelBuilder, mongoose }) => {
  console.log('creating resources DB for: ', key)
  const shema = modelBuilder(mongoose)

  db[key] = mongoose.model(key, shema)
}
