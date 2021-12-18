import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this)
  }

  search (term) {
    console.log(`${term} was searched`);
    var username = {username: term}

    axios.post('/repos/all', username)
      .then((response)=>{
        // console.log(response)
        this.setState({
          repos:response.data
        })
      })
    // TODO
  }
  componentDidMount(){
    axios.get('/repos/all')
      .then((response)=>{
        console.log(response)
        this.setState({
          repos:response.data
        })
      })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));