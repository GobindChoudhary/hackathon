import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";
import { ProductContext } from "../context/ProductContext";
import { ExtraFilterContext } from "../context/ExtraFilterContext";

const Cards = () => {
  const { products } = useContext(ProductContext);
  const { filters } = useContext(FilterContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [extraFilters] = useContext(ExtraFilterContext);
  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...products];

      // 1. Type filter (existing logic)
      if (filters.type !== "all") {
        filtered = filtered.filter(
          (item) => item.type?.toLowerCase() === filters.type.toLowerCase()
        );
      }

      // 2. Extra filters (new logic with lowercase match)
      filtered = filtered.filter((product) => {
        for (const key in extraFilters) {
          const selectedValues = extraFilters[key];
          if (selectedValues.length === 0) continue;

          const productValue = product[key];

          // skip if no value in product
          if (!productValue) return false;

          if (Array.isArray(productValue)) {
            // if product[key] is an array
            const match = selectedValues.some((val) =>
              productValue.some((pv) => pv.toLowerCase() === val.toLowerCase())
            );
            if (!match) return false;
          } else {
            // if product[key] is a string
            const match = selectedValues.some(
              (val) => productValue.toLowerCase() === val.toLowerCase()
            );
            if (!match) return false;
          }
        }
        return true;
      });

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters.type, products, extraFilters]);
  return (
    <div className="flex-1 overflow-y-auto  pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col">
            <Link
              to={`/productdetail/${product.id}`}
              className="w-full overflow-hidden border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </Link>
            <h3 className="text-sm mt-4 font-light uppercase">
              {product.name}
            </h3>
            <p className="mt-1 text-base font-bold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
