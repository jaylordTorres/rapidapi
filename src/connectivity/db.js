export const connectDB = async ({ mongoose, options = {} }) => {
  try {
    const { dbUri, dbUsername, dbPassword } = options
    if (!dbUri || !dbUsername || !dbPassword) {
      throw new Error('required db connection: ', dbUri, dbUsername, dbPassword)
    }

    await mongoose.connect(dbUri, {
      user: dbUsername,
      pass: dbPassword,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    console.log('MongoDB connection succeeded. ', dbUsername)
  } catch (e) {
    console.log(e)
    throw new Error(e.message)
  }
}
