import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import UserService from '../services/userService.js'
import passport from 'passport'

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors())
app.use(function(_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
app.post('/join', cors(corsOptions),(req,res)=>{
    UserService().join(req,res)
})
app.get('/list', cors(corsOptions),(req, res)=>{
    UserService().getUser(req,res)
})

app.post('/login', cors(corsOptions),(req, res)=>{
    UserService().login(req,res)
})

app.get(
    '/logout',
     passport.authenticate('jwt', {session: false}),
     function(req,res){
       UserService().logout(req,res)
       res.logout()
       res.json({msg: 'LOGOUT'})
     } )

export default app
/*const { signup, userlist, profile, login } = require('../controllers/user.controller')
module.exports = x => {x.app.post(`${x.url}/sign-up`, signup)
                       x.app.post(`${x.url}/login`, login)
                       x.app.get(`${x.url}/list`, userlist)
                       x.app.get(`${x.url}/profile/:id`, profile)}*/


/**
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

