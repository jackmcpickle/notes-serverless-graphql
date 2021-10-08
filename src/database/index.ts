import mongoose from "mongoose";

const uri: string = process.env.DB_PATH;

let connection: mongoose.Connection = null;

export const getConnection = async (): Promise<mongoose.Connection> => {
  if (connection == null) {
    connection = await mongoose.createConnection(uri, {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  return connection;
};
