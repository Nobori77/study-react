import { createBrowserRouter } from 'react-router-dom';
import MemberList from '../members/MemberList';
import MemberInfo from '../members/MemberInfo';

const router = createBrowserRouter ([
  {
    path: "/members/member-list",
    element: <MemberList />
  },
  {
    path:"/members/memberinfo",
    element: <MemberInfo />
  }
])

export default router;