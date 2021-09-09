import mongoose from 'mongoose';

export default async function connectDb() {

  await mongoose.connect('mongodb://localhost:27017/wishy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB CONNECTION ERROR: '));

db.once('open', console.log.bind(console, 'DB CONNECTED'));
