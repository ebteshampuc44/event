import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Booking from './pages/Booking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="event/:id" element={<EventDetail />} />
        <Route path="booking/:id" element={<Booking />} />
      </Route>
    </Routes>
  );
}

export default App;