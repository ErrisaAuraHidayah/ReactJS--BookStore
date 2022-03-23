import './App.css';
import {Link, Route, Routes} from "react-router-dom"


import Home from './pages/Home';
import Gallery from './pages/Gallery';
import History from './pages/History';
import Cart from './pages/Cart';


function App() {
  return (
    
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <Link to="" className="navbar-brand p-2" >BookStore</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link" >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Gallery" className="nav-link" >
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Cart" className="nav-link" >
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/History" className="nav-link" >
                History Pembelian
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About" className="nav-link" >
                About Us
              </Link>
            </li>
          </ul>
          
        </div>

        

      </nav>
      
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/History" component={<History />}></Route>
      </Routes>
    </>

        
  );
}

export default App;

// <div className="Navbar">
//     <Link
//       className="home"
//       to="/"
//     >
//       Home
//     </Link> | 
//     <Link
//       className="galery"
//       to="/Gallery"
//     >
//       Gallery
//     </Link> | 
      
//   <div className="untuk-link">
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/Gallery" element={<Gallery />}></Route>
//     </Routes>
//   </div>
// </div>
