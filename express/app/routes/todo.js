import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors())
app.post('/todo', cors(corsOptions),(req,res)=>{
    const service = new TodoService()
    res.status(200).json(service.addTodo(req,res))
})
app.get('/list', cors(corsOptions), (req, res)=>{
    const service = TodoService()
    res.status(200).json(service.getTodo(req,res))
})

export default app
