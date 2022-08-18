const {followingPlaylist,User,Playlist} = require ('../models')

const newFollower = async (req,res) => {
    try{
        const {userId, playlistId} = req.body
        const newFollower = await followingPlaylist.create({userId,playlistId})
        res.send(newFollower)
    }catch(e){
        console.error(e)
    }
}
const getFollowingPlaylists = async(req,res) =>{
    try{
       const  {userId} = req.body
        const playlists = await User.findAll({
            where : {id:userId},
            include :[
                {
                    model: Playlist,
                    as: 'follower',
                    through: { attributes: []}
                }
            ]
        })
        res.send(playlists)
    }catch(e){
        console.error(e)
    }
}

module.exports = {
    newFollower,
    getFollowingPlaylists
}