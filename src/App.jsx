// App.jsx
import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Booking from './pages/Booking';
import UpcomingEventDetail from './pages/UpcomingEventDetail';
import About from './pages/About';
import OrganizerBooking from './pages/OrganizerBooking';
import OrganizerDashboard from './pages/OrganizerDashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="event/:id" element={<EventDetail />} />
        <Route path="booking/:id" element={<Booking />} />
        <Route path="upcoming-event/:id" element={<UpcomingEventDetail />} />
        <Route path="about" element={<About />} />
        <Route path="organizer" element={<OrganizerBooking />} />
        <Route path="organizer-dashboard" element={<OrganizerDashboard />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;