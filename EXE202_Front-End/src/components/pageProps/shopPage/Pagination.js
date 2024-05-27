import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from '../../../services/ProductService'

const items = paginationItems;

function Items({ currentItems, selectedBrands, selectedCategories }) {

  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct();
    console.log('res', res);
    return res;
  }

  const { isPending, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
  });

  console.log('data', products);
  // Filter items based on selected brands and categories
  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);

    return isBrandSelected && isCategorySelected;
  });

  return (
    <>
      {products?.data?.map((product) => {
        return (
          <Product 
          key={product._id} 
          countInStock={product.countInStock} 
          description={product.description} 
          image={product.image} 
          name={product.name}
          price={product.price}
          rating={product.rating}
          type={product.type}
          discount={product.discount}
          selled={product.selled}
          />
        )
      })}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const selectedBrands = useSelector(
    (state) => state.orebiReducer.checkedBrands
  );
  const selectedCategories = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    const newStart = newOffset + 1; // Adjust the start index

    setItemOffset(newOffset);
    setItemStart(newStart);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
        />{" "}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart} to {Math.min(endOffset, items.length)} of{" "}
          {items.length}
        </p>
        <button onClick={() => console.log(selectedBrands)}> test</button>
      </div>
    </div>
  );
};

export default Pagination;
