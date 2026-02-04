import React from 'react';
import { Link } from 'react-router-dom';

const Job = () => {
  return (
    <div>
      <Link style={{display: "block"}} to={"/intro?job=developer"}>개발자 소개페이지</Link><br />
      <Link style={{display: "block"}} to={"/intro?job=police"}>경찰 소개페이지</Link><br />
      <Link style={{display: "block"}} to={"/intro?job=firefighter"}>소방관 소개페이지</Link><br />
    </div>
  );
};

export default Job;