
export default function BoardModel(mongoose){
    const boardSchema = mongoose.Schema(
    {   userid: String,
        title: String,
        name: String,
        teamId: String,
        subject: String  
    }, {timestamps: true}
)
    return mongoose.model('Board', boardSchema)
}
