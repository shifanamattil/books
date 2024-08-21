// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import LOgin from './components/navbar/pages/LOgin';
import Footer from './components/navbar/pages/Footer';
import Booklist from './components/navbar/pages/Booklist';
import BookDetails from './components/navbar/pages/BookDetails';
import Aboutus from './components/navbar/pages/Aboutus';
import Awards from './components/navbar/pages/Awards';
import Subscribe from './components/navbar/pages/Subscribe';
import Comments from './components/navbar/pages/Comments';
import Privacypolicy from './components/navbar/pages/Privacypolicy';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Booklist />} />
        <Route path='/books' element={<Booklist />} />
        <Route path='/login' element={<LOgin />} />
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/allbooks' element={<Booklist />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/privacypolicy' element={<Privacypolicy />} />




      </Routes>
      <Footer />
    </div>
  );
}

export default App;
