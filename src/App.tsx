import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen from './components/Screen';
import Home from './components/pages/Home';
import Exercises from './components/pages/Exercises';
import Diet from './components/pages/Diet';
import Profile from './components/pages/Profile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Screen />}>
                    <Route index element={<Home />} />
                    <Route path="exercises" element={<Exercises />} />
                    <Route path="diet" element={<Diet />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
