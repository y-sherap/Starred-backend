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


module.exports = {
    GetUser
}