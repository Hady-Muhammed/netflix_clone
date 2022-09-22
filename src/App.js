import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Account from './pages/Account';
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WatchLater from "./pages/WatchLater";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/netflix_clone/' element={<Home />}/>
        <Route path='/netflix_clone/signin' element={<SignIn />}/>
        <Route path='/netflix_clone/signup' element={<SignUp />}/>
        <Route path='/netflix_clone/account' element={<Account />}/>
        <Route path='/netflix_clone/watchLater' element={<WatchLater />}/>
        <Route path='/netflix_clone/:id' element={<MovieDetails />}/>
      </Routes>
    </div>
    <ToastContainer
    position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </>
  );
}

export default App;
