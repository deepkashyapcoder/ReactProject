import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // Fetching the category from the URL parameters (if any)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        console.log(json.products);
        setProducts(json.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // If id exists, filter products by category; otherwise, show all products
  const filteredProducts = id
    ? products.filter((item) => item.category === id)
    : products;

  return (
    <div className="flex flex-wrap justify-center">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <div
            className="relative w-1/3 border p-4 mb-3 bg-white m-2"
            key={item.id}
          >
            <div className="overflow-hidden my-5">
              <img
                src={item.images[0]}
                alt="product-img"
                className="object-contain h-40 w-40 mx-auto block"
              />
            </div>
            <h1 className="font-semibold">{item.title}</h1>
            <p className="font-bold text-green-600 my-2">₹ {item.price}</p>
            {item.availabilityStatus === "Low Stock" ? (
              <div className="text-red-500 p-2 font-medium absolute top-3 right-3 text-xs">
                {item.availabilityStatus}
              </div>
            ) : (
              <div className="text-green-500 p-2 font-medium absolute top-3 right-3 text-xs">
                {item.availabilityStatus}
              </div>
            )}
            <button className="hover:bg-green-600 hover:text-white text-green-500 border border-green-500 rounded-full text-sm p-1 px-3">
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <span className="text-center text-gray-500 block mt-5">
          {id ? "No products found for this category." : "No products available."}
        </span>
      )}
    </div>
  );
};

export default AllProducts;
