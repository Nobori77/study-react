import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MemberList = () => {
 const [memberList, setMemberList] = useState([])

  useEffect(() => {
    const getMemberList = async () => {
      const response = await fetch("http://localhost:10000/api/members")
      const memberList = await response.json()
      const {message, data} = memberList
      setMemberList(data)
    }

    getMemberList()
  }, [])

  const memberNames = memberList.map(({id, memberName}, i) => 
    <li key={i}><Link to={`/members/member-info/${id}`}>{memberName}</Link></li>
  )

  return (
    <div>
      회원 목록
      <ul>
          {memberNames}
      </ul>
    </div>
  );
};

export default MemberList;