import db from '../models/index.js'
import dotenv from 'dotenv'

export default function UserService() {
    const User = db.user
        dotenv.config()

    return {
        join(req, res) {
            console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
            new User(req.body).save(function(err){
                if(err) {
                    res.status(500).send({message: err})
                    console.log('회원가입 실패')
                    return
                    
                }else{
                    res.status(200).json({ok: 'ok'})
                }
            })
        },
        getUser(_req, res) {
            console.log(` ### userController acess ### `)
            User
                .find()
                .exec((err, users) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    res
                        .status(200)
                        .json({success: true, users})
                })
        },        
        login(req, res) {
            User.findOne({
                userid: req.body.userid
            }, function (err, user) {
                if (err) 
                    throw err
                if (!user) {
                    res
                        .status(401)
                        .send({success: false, msg: 'Authentication failed. User not found.'});
                } else {
                    console.log(' ### 로그인 정보 : ' + JSON.stringify(user))
                    user.comparePassword(req.body.password, function (_err, isMatch) {
                        console.log(' ### JWT 발급 전 : ')
                        if (!isMatch) {
                            console.log(' ### 비밀번호가 틀렸 : ')
                            res
                                .status(401)
                                .send({msg: '비밀번호가 틀렸습니다.'});
                        } else {
                            console.log(' ### JWT 발급 직전 : ')
                            /**const token = jwt.sign(user.toJSON(), 'jwt-secret', {
                                expiresIn: 604800 // 1 week
                            })
                            console.log(' ### JWT 발급 : '+ token)
                            res.json({success: true, token: 'JWT ' + token});*/
                            user.generateToken((err, user) => {
                                if (err) 
                                    res
                                        .status(400)
                                        .send(err)

                                    // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
                                res
                                    .status(200)
                                    .json(user)
                            })

                        }
                    })
                }
            })
        },
        logout(){
            req.logout()
            res.json({success: true, msg: '로그아웃'})
        }

    }
}
