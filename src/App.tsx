import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useAppSelector } from '@/lib/hooks/useRedux';

import Layout from './components/Layout';
import { Spinner } from './components/UI';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ThreadsPage = React.lazy(() => import('./pages/ThreadsPage'));
const CommentsPage = React.lazy(() => import('./pages/CommentsPage'));
const LeaderboardPage = React.lazy(() => import('./pages/LeaderboardPage'));
const DetailThreadPage = React.lazy(() => import('./pages/DetailThread'));
const ListComments = React.lazy(() => import('./components/ListComments'));

function App() {
  const { isDarkMode } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index path="/threads" element={<HomePage />} />
          <Route path="/threads/:threadId" element={<DetailThreadPage />}>
            <Route index path="comments" element={<ListComments />} />
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
