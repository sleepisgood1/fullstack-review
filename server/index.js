const express = require('express');
const db = require('../database')
let app = express();
const githubHelper = require('../helpers/github.js')

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json())

app.post('/repos', function (req, res) {
  //request info from github api
  //prob need req.body.blah
  // console.log('>>>>>>>>>>>>>>>>',req)
  githubHelper.getReposByUsername(req.body.username, (response) =>{
    db.save(response, (dbResponse)=>{
      // res.json(dbResponse)
      getAllFunction(req, res)
    })
  })
    // .then((response) => {
    //   //make response = response.body?? or w.e the synta is
    //   db.save(response, (err, dbResponse)=>{
    //     if(err) {
    //       console.log(err)
    //       //can also throw 404 and send err response back
    //     } else {
    //       console.log(dbResponse)
    //       // getFunction()
    //     }
    //   })
    // })
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});
var get25Function = (req, res) =>{
  // TODO - your code here!
   db.get25((dbResponse)=>{
     res.json(dbResponse)
   })
   // This route should send back the top 25 repos
 }

app.get('/repos', get25Function);
//change this to just getFUnction
var getAllFunction = (req, res) =>{
  db.getAll((dbResponse)=>{
    // console.log(dbResponse.length)
    res.json(dbResponse)
  })
}
app.get('/repos/all', getAllFunction)
// var getFunction = (req, res) =>{
//  // TODO - your code here!
//   db.get25((dbResponse)=>{
//     res.json(dbResponse)
//   })
//   // This route should send back the top 25 repos
// }

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

