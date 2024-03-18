import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './routes/ProtectedRoute';
import Counter from './components/Counter';
import Login from './pages/Login';
import Membership from './pages/Membership';
import EventNotice from './pages/EventNotice';
import EventNoticeDetail from './pages/EventNoticeDetail';
import PushMessage from './pages/PushMessage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute isAuthenticated={false} authenticationPath='/login'>
                <></>
              </ProtectedRoute>
            }
          />
          <Route path='/counter' element={<Counter />} />
          <Route path='/login' element={<Login />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/notice-event' element={<EventNotice />} />
          <Route path='/notice-event-detail' element={<EventNoticeDetail />} />
          <Route path='/push-message' element={<PushMessage />} />
          <Route
            path='*'
            element={
              <ProtectedRoute isAuthenticated={false} authenticationPath='/login'>
                <></>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
