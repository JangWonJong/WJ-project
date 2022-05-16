exports.gamelist = (req, res) =>{
    console.log(` ### gameController acess ### `)
    UserSchema.find()
    .exec((err, users)=>{
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, games})
    })
    
}