routes = {
    '/special-message': (req,res)=>{
    res.end("you're SPECIAL")
    },
    '/non-special-message':(req,res)=>{
    res.end("you're boring!")
    }
}

module.exports = routes