import { useState } from "react";
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { listBooks, wishListBooks } from "../src/utilities/utilities";
import './App.css';
import LandingPage from "./pages/landingPage/landingPage";
import MainPage from "./pages/mainPage/mainPage";
import SignupPage from "./pages/signupPage/signupPage";
import UserprofilePage from "./pages/userprofilePage/userprofilePage";
import Navbar from './components/navigation/Navbar';
import WishlistPage from "./pages/wishlistPage/wishlistPage";
import Footer from './components/footer/Footer';


function App() {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [user, setUser] = useState([]); // fix: add setUser
  const [bookList, setBookList] = useState(listBooks());
  const [wishList, setWishList] = useState(wishListBooks());

  return (
    <BrowserRouter>
      <Navbar setUser={setUser}/>
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage setter={setUser}/>} />
            <Route exact path="/mainpage" element={
                  <MainPage 
                    setBooks={setBooks}
                    setBookList={setBookList}
                    bookList={bookList}
                    fetchError={fetchError}
                    setFetchError={setFetchError}
                    books={books}
                    user={user}
                  />
               }/>
            <Route exact path="/userprofilepage" element={<UserprofilePage/>} />
            <Route exact path="/signuppage" element={<SignupPage />} />
            <Route exact path="/wishlistpage" element={
                  <WishlistPage
                  setWishList={setWishList}
                  WishList={wishList}
                   />
              } />
          </Routes>
        </div>
        <Footer setUser={setUser}/> {/* fix: pass setUser as a prop */}
    </BrowserRouter>
  );
}

function Footer ({ setUser }) {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// npm install --save styled-components 
export default App;
