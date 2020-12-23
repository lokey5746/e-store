import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://img.thesouledstore.com/public/theSoul/uploads/users/artists/20200713112249-cp-1.jpg"
        alt=""
      />
      {/* Product */}
      <div className="home__row">
        <Product
          id="1"
          title="Iron Man: Arc Reactor"
          rating={3}
          image="https://img.thesouledstore.com/public/theSoul/uploads/catalog/product/1603713841_1728028.jpg"
          price={16}
        />
        <Product
          id="2"
          title="Captain America: Logo"
          rating={5}
          image="https://img.thesouledstore.com/public/theSoul/uploads/catalog/product/1607712024_4435920.jpg"
          price={40}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Wolverine: Made With Adamantium"
          rating={4}
          image="https://img.thesouledstore.com/public/theSoul/uploads/catalog/product/1598031861_8414971.jpg"
          price={12}
        />
        <Product
          id="4"
          title="Punisher: The Vigilante"
          rating={4}
          image="https://img.thesouledstore.com/public/theSoul/uploads/catalog/product/1607015196_6113440.jpg"
          price={10}
        />
        <Product
          id="5"
          title="Captain America: Guardian of Freedom"
          rating={5}
          image="https://img.thesouledstore.com/public/theSoul/uploads/catalog/product/1606935987_9038650.jpg"
          price={30}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Captain America: Sweat Activated"
          rating={5}
          image="https://img.thesouledstore.com/public/theSoul/uploads/catalog/product/20200221185252-1.gif"
          price={20}
        />
      </div>
    </div>
  );
}

export default Home;
