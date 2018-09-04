var simpleChain = require("./simpleChain.js");

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to simple blockchain restful API");
    });
    app.get("/block", function (req, res) {
        let blockchain = new simpleChain.Blockchain((blockchain)=>{
           //console.log('Adding block height: ',blockchain.blockCount);
           if (blockchain.blockCount>=1){
             let newBlock = blockchain.addBlock(new simpleChain.Block("new test block"));
             newBlock.then(function(result){
              res.status(200).send(result);
              console.log(result);
             });
            }
          });
      });
    
     app.get("/block/:num", function (req, res) {
       var num = req.params.num;
       if (isFinite(num)) {
         let blockchain = new simpleChain.Blockchain((blockchain)=>{
           var block = blockchain.getBlock(num);
           block.then(function(result){
             var obj = {"hash": result}
             res.status(200).send(obj);
           })
         });
       } else {
         res.status(400).send({ message: 'invalid number supplied' });
       }
    });
  }
  
  module.exports = appRouter;