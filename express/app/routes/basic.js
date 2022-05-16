import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import BasicService from '../services/basicService.js'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors())

app.post('/bmi', cors(corsOptions),(req, res)=> {
    const service = new BasicService()
    res.status(200).json(service.getBmi(req, res))
})

export default app