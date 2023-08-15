import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.js'
import { Auth } from './pages/auth-b.js'
import { MakeNote } from './pages/make-note.js'
import { NoteList } from './pages/note-list.js'
import { Navbar } from './components/navbar.jsx'

function App() {
  return (
    <div className='font-mono flex'>
      <Router>
        <Navbar />
        <div className='bg-primary w-screen text-white px-5 py-5'>
          <Routes>

            <Route path="/" element={<Home />}></Route>

            <Route path="/auth" element={<Auth />}> </Route>

            <Route path="/make-note" element={<MakeNote />}></Route>

            <Route path="/note-list" element={<NoteList />}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
