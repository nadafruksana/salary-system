const User  = require('../models/user')

const authenticateUser = function (req, res, next) {
    const token = req.header('Authorization')
    User.findByToken(token)
        .then(function (user) {
            if (user) {
                req.user = user
                req.token = token
                next()
            } else {
                res.status('401').send({ notice: 'token not available' })
            }
        })
        .catch(function (err) {
            res.status('401').send(err)
        })
}


module.exports = {
    authenticateUser
}






// const jwt = require('jsonwebtoken')
// const User = require('../models/user')
// const authenticateUser = (req,res, next)=> {
//     if(req.header('Authorization')){
//     const token = req.header('Authorization').split(' ')[1]
//     let tokenData
//     try{
//         tokenData = jwt.verify(token, 'dct123')
//         User.findById(tokenData._id)
//             .then((user)=>{
//                 req.user=user
//                 next()
//             })
//             .catch((err)=>{
//                 res.json(err)
//             })
//     }
//     catch(e){
//         res.json(e.message)
//     }
// }else {
//     res.json({
//         errors: 'token not provided'
//     })
// }
// }

// module.exports = {
//     authenticateUser
// }