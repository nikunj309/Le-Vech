
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar1 from './components/Navbar1';
import HomePageScreen from './screens/HomePageScreen';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from './img/logo.png'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from './components/Navbar';
import SaveScreen from './screens/SaveScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';
import SellerScreen from './screens/SellerScreen';
import UserListScreen from './screens/UserlistScreen';
import ProductListScreen from './screens/ProductListScreen';
import UserProductList from './screens/UserProductList';
import Footer from './components/Footer/Footer';
import Featured from './components/Featured/Featured';


function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        


        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/about" element={<AboutScreen />} />

        </Routes>
        <main>
          <Container style={{maxWidth:"100%"}}>
            <Routes>

              <Route path="/seller" element={<SellerScreen />} />
              {/* <Route path="/featured" element={<Featured />} /> */}
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/save" element={<SaveScreen />} />
              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route path="/admin/products" element={<ProductListScreen />} />
              <Route path="/user/products" element={<UserProductList />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          {/* <div className="text-center">All rights reserved</div> */}
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
