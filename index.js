const server = require('app')
require('dotenv').config()
server.listen(process.env.PORT,() => console.log(`server is running on port ${process.env.PORT}`))