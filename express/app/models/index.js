import dotenv from 'dotenv'
const{ MONGO_URI } = process.env
import mongoose from 'mongoose'
import UserModel from './user.js'
import BoardModel from './boardmodel.js'
import TodoModel from './todomodel.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.user = UserModel(mongoose)
db.board = BoardModel(mongoose)
db.todo = TodoModel(mongoose)

export default db