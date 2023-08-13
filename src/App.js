import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.js'
import { Auth } from './pages/auth.js'
import { MakeNote } from './pages/make-note.js'
import { NoteList } from './pages/note-list.js'
import { Navbar } from './components/navbar.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />}></Route>

          <Route path="/auth" element={<Auth />}> </Route>

          <Route path="/make-note" element={<MakeNote />}></Route>

          <Route path="/note-list" element={<NoteList />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
