import mongoose from 'mongoose';

// const config = mongoose
// .connect(
//   `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.MONGO_PORT}/${process.env.DATABASE}`,
// );

const config = mongoose
.connect(
  `mongodb://${process.env.HOST}:${process.env.MONGO_PORT}/${process.env.DATABASE}`,
).then(() => {
  console.log('MongoDB connection success');
});

export default config;