import React from "react";
import house1 from "../assets/house11.jpg";
import house2 from "../assets/house22.jpg";
import house3 from "../assets/house33.jpg";
import house4 from "../assets/house44.jpg";
import house5 from "../assets/house55.jpg";
import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    { title: "Texas, USA", image: house1, price: "1,541" },
    { title: "Masukiye, SAKARYA", image: house2, price: "1,541" },
    { title: "Camlihemsin, RİZE", image: house3, price: "1,541" },
    { title: "Quebec, CANADA", image: house4, price: "1,541" },
    { title: "Tulbagh, Africa", image: house5, price: "1,541" },
    { title: "Texas, USA", image: house1, price: "1,541" },
    { title: "Masukiye, SAKARYA", image: house2, price: "1,541" },
    { title: "Camlihemsin, RİZE", image: house3, price: "1,541" },
    { title: "Quebec, CANADA", image: house4, price: "1,541" },
    { title: "Tulbagh, Africa", image: house5, price: "1,541" },
    { title: "Texas, USA", image: house1, price: "1,541" },
    { title: "Masukiye, SAKARYA", image: house2, price: "1,541" },
    { title: "Camlihemsin, RİZE", image: house3, price: "1,541" },
    { title: "Quebec, CANADA", image: house4, price: "1,541" },
    { title: "Tulbagh, Africa", image: house5, price: "1,541" },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;