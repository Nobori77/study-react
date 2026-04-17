import { createBrowserRouter } from 'react-router-dom';
import MemberList from '../members/MemberList';
import MemberInfo from '../members/MemberInfo';
import MemberJoin from '../members/MemberJoin';
import MemberLogin from '../members/MemberLogin';
import PostList from '../posts/PostList';
import PostRead from '../posts/PostRead';

const router = createBrowserRouter ([
  {
    path: "/members/member-list",
    element: <MemberList />
  },
  {
    path:"/members/member-info/:id",
    element: <MemberInfo />
  },
  {
    path:"/members/member-join",
    element: <MemberJoin />
  },
  {
    path:"/members/member-login",
    element: <MemberLogin />
  },
  {
    path:"/posts/post-list",
    element: <PostList />
  },
  {
    path:"/posts/post-read/:id",
    element: <PostRead />
  }
])

export default router;