import React, { useState, useEffect } from "react";
import './WishlistContainer.css';
import WishlistCard from '../wishlistCard/WishlistCard';
import { wishListBooks } from "../../utilities/utilities";

const WishlistContainer = () => {
  const [wishList, setWishList] = useState({books: []});

  useEffect(() => {
    const fetchData = async () => {
      const data = await wishListBooks();
      console.log("data from wishListBooks:", data);
      setWishList(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("wishList: ", wishList);
  }, [wishList]);

  return (
    <div className="wishListContainer">
        {wishList.books.map((book, index) => (
        <WishlistCard key={index} bookItem={book} />
      ))}
    </div>
  );
};

export default WishlistContainer;