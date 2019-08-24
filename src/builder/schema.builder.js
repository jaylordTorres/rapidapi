export const schemaBuilder = ({ key, db, modelBuilder, mongoose }) => {
  const shema = modelBuilder(mongoose)
  db[key] = mongoose.model(key, shema)
}
