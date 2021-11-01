import { useState, useEffect } from 'react';
import Card from './Card';
import './Card.css'

// Return a promise
const getRepos = (url) => {

  // return fetch(url, {
  //   headers: {
  //     'Accept': 'application/vnd.github.v3+json',
  //   },
  // })
  //   .then((res) => {
  //     res.json();
  //   })
  //   .then((data) => {
  //     return data
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

    return [
        {
          name: 'Repo 1',
          description: 'my description'
        },
        {
          name: 'Repo 2',
          description: 'my second description'
        }
    ]
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  // get repos
  useEffect(() => {
    // getRepos('https://api.github.com/users/yingliii/repos').then(data => {
    //   setRepos(data)
    // });
    setRepos(getRepos('https://api.github.com/users/yingliii/repos'))
  }, []); // [] means runs once

  return (
    <div className="card-list">
      {repos.map((repo, idx) => (
        <Card
          key={idx}
          name={repo.name} 
          description={repo.description}
        />
      ))}
    </div>
  )
};

export default Projects;
