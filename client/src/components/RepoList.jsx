import React from 'react';
import Repos from './Repos.jsx'

const RepoList = (props) => {
  if(props.repos.length>24){
    var top25 = props.repos.slice(0, 25)
    // console.log(top25)
  } else {
    var top25 = props.repos
  }
  return(
  <div>
    <h4> Repo List Component (Top 25 Repos) </h4>
    There are {props.repos.length} repos saved in Database.
    {top25.map((repo)=>(
      <Repos key={props.repos.indexOf(repo)}repo={repo} count={props.repos.indexOf(repo)}/>
    ))}
  </div>
  )
}

export default RepoList;