const mongoose = require('mongoose');
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
    unique: true,
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
  data.map((eachRepo)=>{
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
    return
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

module.exports.save = save;