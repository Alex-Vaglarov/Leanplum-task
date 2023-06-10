// outer imports
import { Route, Routes } from 'react-router-dom';

// styles and assets imports
import './App.css';

// inner imports
import Audience from './pages/audience/Audience';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <div className='App'>
            {/* optional - add header here */}
            <Routes>
                <Route path='/' element={<Audience />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {/* optional - add footer here */}
        </div>
    );
}

export default App;
