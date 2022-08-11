const {User} = require('../models')


const GetUser = async (req,res) => {
    try{
        const userId = parseInt(req.params.user_id)
        const user = await User.findByPk(userId)
        res.send(user)
    }catch(e){
        console.error(e)
    }
}

const CreateUser = async (req,res) => {
    try{
        const user = await User.create({
            ...req.body
        })
        res.send(user)
    }catch(e){
        console.error(e)
    }
}


module.exports = {
    GetUser,
    CreateUser
}