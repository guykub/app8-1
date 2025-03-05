const express = require('express')
const app = express()
const port = 8000

app.get('/',(request,response)=> {
    response.send(`
        <!document html>
        <html>
            <head>
                <title>Express.js</title>
            </head>
            <body>
                <h3>Welcome to Express.js</h3>
                <b>Express Fast, unopinionated, minimalist <br>
                web framework for Node.js
                </b>
            </body>
        </html>
        `
    )
})
app.listen(port,()=> console.log('Server listening on port' + port))