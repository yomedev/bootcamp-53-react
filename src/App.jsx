import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, useEffect } from "react";

import { Layout } from "./components/Layout";
// import HomePage from "./pages/HomePage";
// import PostsListPage from "./pages/PostsListPage";
import ExercisesPage from "./pages/ExercisesPage";
// import TimerPage from "./pages/ExercisesPage/TimerPage";
// import CounterPage from "./pages/ExercisesPage/CounterPage";
import { RerenderPage } from "./pages/ExercisesPage/RerenderPage/RerenderPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { CommentsPage } from "./pages/SinglePostPage/CommentsPage/CommentsPage";
import { UsersPage } from "./pages/ExercisesPage/UsersPage/UsersPage";
import { NewPostPage } from "./pages/NewPostPage/NewPostPage";
import { JoinPage } from "./pages/JoinPage/JoinPage";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "./redux/profile/profileThunk";
import { selectAuthStatus } from "./redux/auth/authSelect";
import { fetchStatus } from "./constants/fetchStatus";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
// import { token } from "./http";

const HomePage = lazy(() => import("./pages/HomePage"));
const PostsListPage = lazy(() => import("./pages/PostsListPage"));

const TimerPage = lazy(() => import("./pages/ExercisesPage/TimerPage"));
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"));

export const App = () => {
  const dispatch = useDispatch();

  const authStatus = useSelector(selectAuthStatus);
  // const { access_token, token_type } = useSelector(selectAuth);

  // useEffect(() => {
  //   if (access_token && token_type) {
  //     token.set(`${token_type} ${access_token}`);
  //   }
  // }, [access_token, token_type]);

  useEffect(() => {
    if (authStatus === fetchStatus.Success) {
      dispatch(getProfileThunk());
    }
  }, [dispatch, authStatus]);

  return (
    // <BrowserRouter basename="/my-repository/">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to='/' />} /> */}
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsListPage />} />
          <Route path="posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="new-post" element={<NewPostPage />} />
            <Route path="exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="counter" />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="timer" element={<TimerPage />} />
              <Route path="re-render" element={<RerenderPage />} />
            </Route>
          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="join" element={<JoinPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
