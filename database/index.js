const mongoose = require('mongoose');

// const data = require('../data.json')

mongoose.connect('mongodb://localhost/fetcher', (err)=>{
  if(err) {
    console.log(err)
  } else {
    console.log('connected')
  }
})

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: String,
  private: Boolean,
  forks_count: {
    type: Number,
    required: true,
  },
  githubLoginId: {
    type: Number,
    required: true,
  },
  githubLogin: {
    type: String,
    required: true,
  },
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {
  //data is a whole array
  // for (let i=0;i<data.length;i++) {

  // }
  console.log(data.data)
  var allDocuments = data.data.map((eachRepo)=>{
    let data = eachRepo
    var repo = new Repo ({
      id: data.id,
      name: data.name,
      url: data.url,
      private: data.private,
      forks_count: data.forks_count,
      githubLoginId: data.owner.id,
      githubLogin: data.owner.login
    })
    return repo;
  })
  console.log('allDocuments', allDocuments)
  Repo.insertMany(allDocuments)
    .then((response)=> {
      console.log('resonse', response)
      callback(response)
    })
    .catch((err)=>{
      console.log('err from database response', err)
    })


  // var repo = new Repo ({
  //   id: data.id,
  //   name: data.name,
  //   url: data.url,
  //   private: data.private,
  //   forks_count: data.forks_count,
  //   githubLoginId: data.owner.id,
  //   githubLogin: data.owner.login
  // })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}
let get25 = (callback)=>{
  Repo.find().sort({forks_count: -1}).limit(25)
    .then((response)=>{
      callback(response)
    })
    .catch((err)=>{
      console.log('err from database response for get', err)
    })
}

//havnt used this! think about using it when you need to see how many repos you've saved in database!
let getAll =(callback)=>{

  Repo.find().sort({forks_count: -1})
    .then((response)=>{
      console.log(response.length)
      callback(response)
    })
    .catch((err)=>{
      console.log('err from database response for getall', err)
    })
}
// save(data, (res)=>{console.log(res)})
module.exports.get25 = get25;
module.exports.save = save;
module.exports.getAll = getAll;