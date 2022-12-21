import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { asyncPreloaderProcess } from '@/store/isPreload/action';

import Layout from './components/Layout';
import { Spinner } from './components/UI';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ThreadsPage = React.lazy(() => import('./pages/ThreadsPage'));
const CommentsPage = React.lazy(() => import('./pages/CommentsPage'));
const LeaderboardPage = React.lazy(() => import('./pages/LeaderboardPage'));
const DetailThreadPage = React.lazy(() => import('./pages/DetailThread'));
const CommentsListPage = React.lazy(() => import('./pages/CommentsListPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));

function App() {
  const dispatch = useAppDispatch();
  const { ui, auth } = useAppSelector((state) => state);

  useEffect(() => {
    if (ui.isDarkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [ui.isDarkMode]);

  useEffect(() => {
    dispatch(asyncPreloaderProcess());
  }, [dispatch]);

  if (!auth.isLoggedIn) {
    return (
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index path="/threads" element={<HomePage />} />
          <Route path="/detail/:threadId" element={<DetailThreadPage />}>
            <Route index path="comments" element={<CommentsListPage />} />
          </Route>
          <Route path="/my-threads" element={<ThreadsPage />} />
          <Route path="/my-comments" element={<CommentsPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="*" element={<Navigate to="/threads" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
