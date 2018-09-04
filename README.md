# ExpressAPIblockchain
1. app.js create a listener on 8000 port.
   a. http://localhost:8000/  - "Welcome to simple blockchain restful API"
   b. http://localhost:8000/block - Create a new block and save in levelDB.
   c. http://localhost:8000/block/0 - Retrieve the first block hash value from levelDB.
2. routes/routes.js - two RESTful APIs: create simple blockchain and get blockchain hash value based on block number.
3. routes/simpleChain.js - build simple blockchian, create block, retrieve block and validate block.
