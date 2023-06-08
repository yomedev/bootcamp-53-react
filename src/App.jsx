import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

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

const HomePage = lazy(() => import("./pages/HomePage"));
const PostsListPage = lazy(() => import("./pages/PostsListPage"));

const TimerPage = lazy(() => import("./pages/ExercisesPage/TimerPage"));
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"));

export const App = () => {
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
            <Route path="exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="timer" />} />
              <Route path="timer" element={<TimerPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="re-render" element={<RerenderPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};
