const {
    Product,
    ProductHasCategory,
    Category,
    User
  } = require("../models/index")

class Controller {
    static async firstPage (req, res){
        try {
            let data =  await product
            res.send
        } catch (error) {
            res.send(error.message)
        }
    }
}

module.exports = Controller