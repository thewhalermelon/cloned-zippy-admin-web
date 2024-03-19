import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login';
import Membership from './pages/Membership';
import EventNotice from './pages/EventNotice';
import EventNoticeDetail from './pages/EventNoticeDetail';
import PushMessage from './pages/PushMessage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Membership />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route
            path='/membership'
            element={
              <ProtectedRoute>
                <Membership />
              </ProtectedRoute>
            }
          />
          <Route
            path='/notice-event'
            element={
              <ProtectedRoute>
                <EventNotice />
              </ProtectedRoute>
            }
          />
          <Route
            path='/notice-event-detail'
            element={
              <ProtectedRoute>
                <EventNoticeDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path='/push-message'
            element={
              <ProtectedRoute>
                <PushMessage />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
