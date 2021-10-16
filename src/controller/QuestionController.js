module.exports = {

    index(req, res){
        const roomId = req.params.room
        const questionid = req.params.question
        const action = req.params.action
        const password = req.body.password
        
        // console.log(`room = ${roomId}, question = ${questionid}, password = ${password}, action = ${action}`);
    }
}