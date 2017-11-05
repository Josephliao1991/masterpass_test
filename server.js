const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var request = require('request');
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(bodyParser.urlencoded(
    //   { extended: true,
    //     parameterLimit: 200, //Params Maxmin
    //     limit: 100*1024 //default 100k
    //   }))

/* ::JSON:: http://jsonapi.org */
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
    // app.use(bodyParser.json(
    // { type: 'application/vnd.api+json',
    //   parameterLimit: 200,  //Params Maxmin,
    //   limit:100*1024 //default 100k
    // }))

app.use('/', express.static(__dirname + "/public/html")) //serve static content
app.use('/js', express.static(__dirname + "/public/js")) //serve static content

app.post('/', (req, res, next) => {
    console.log(req.body);
                                       
    res.json({"body":req.body})
})

app.get('/', (req, res, next) => {
    
    res.json({"query":req.query})

})

app.get('/callback', (req, res, next) => {
    
    res.json({"query":req.query, "body":req.body})

})


app.listen(process.env.PORT || 8080)

function sendRequest(options, Callback) {
    
    request(options, function(error, response, result) {
        if (error) { // Check Error
            return Callback(error)
        }
    
        if (response.statusCode != 200) { // Check StatusCode
            return Callback(response.statusCode)
        }
    
        // 4. Parse Json
        try {
            Callback(null, result)
        } catch (Exception) {
            Callback(Exception)
        }
    
    })
    
}