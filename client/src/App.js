import React, {useEffect, useState} from 'react';

function App(){
  const [userData, setUserData] = useState({})
  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(
      data => {
        setUserData(data)
      }
    )
  }, {})

  return(
    <div>
      {(typeof userData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        userData.users.map((user, i)=>(
          <li key={i}>{user}</li>
        ))
      )}      
    </div>
  )
}
export default App;
