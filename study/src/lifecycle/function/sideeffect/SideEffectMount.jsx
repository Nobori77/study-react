import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {


  console.log("리랜더링🤷‍♀️")
  const [users, setUsers] = useState([])

  // 참조 불투명 함수(비동기)
  useEffect(() => {
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return users
  }

    getUsers()
      .then(setUsers)
      .catch(console.error)
  }, [])

  return (
    <div>
      <ul>
        {users.map((user, i) => (<li key={i}>{user.name}</li>))}
      </ul>
    </div>
  );
};

export default SideEffectMount;