import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const highlightStyle = {
    color: "#d0121a",
    fontWeight: "bold",
  };

  const renderDescription = () => {
    if (!productInfo.description) {
      return null;
    }

    const description = productInfo.description.split(/:(.*?)-/).map((part, index) => {
      return (
        <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
          {part}
        </span>
      );
    });

    return <>{description}</>;
  };

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
      <p className="text-2xl font-semibold">
        {productInfo.price} Dt
        {productInfo.discount && (
          <>
            <span className="text-xl font-semibold line-through ml-2">{productInfo.originalPrice}</span>
            <span className="text-xs ml-2 inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white">
              Save {productInfo.discount}
            </span>
          </>
        )}
      </p>
      <hr />
      <p className="text-base text-gray-600">{renderDescription()}</p>

      <div className="flex items-center">
        <p className="text-sm mr-2"> leave a review </p>

        {/* Rating Stars */}
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${index < productInfo.rating ? "text-yellow-300" : "text-gray-300"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
      </div>

      <p className="text-base text-green-600 font-medium">En Stock</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              title: productInfo.name,
              image: productInfo.image,
              price: productInfo.price,
              quantity: 1,
            })
          )
        }
        className="bg-black text-white py-3 px-6 active:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;