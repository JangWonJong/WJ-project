import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import BoardService from '../services/boardService.js'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors())

app.post('/board', cors(corsOptions),(req, res)=> {
    const service = new BoardService()
    res.status(200).json(service.addArticle(req, res))
})
app.get('/list', cors(corsOptions),(req,res)=>{
    const service = new BoardService()
    res.status(200).json(service.getArticles(req,res))
})

export default app




/*const express = require('express')
const { write } = require('../controllers/board.controller')
const boardRouter = express.Router()

boardRouter.use((req, res, next) => {
    console.log(' ### 게시판 서버 ###')
    next()
})

boardRouter.post('/write', write)

module.exports = boardRouter;*/