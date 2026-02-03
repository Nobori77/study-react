import React, { useEffect, useState } from 'react';

const SideEffectWithMap = () => {

  // https://jsonplaceholder.typicode.com/users
  // useEffect()
  // username만 화면에 p태그로 출력하기 -> 컴포넌트로 분리

  const [users, setUsers] = useState([])

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
      {users.map((user, i) => (<p key={user.id}>{user.username}</p>))}
    </div>
  );
};

export default SideEffectWithMap;