import Navbar from "./Navbar";
import Products from "./products";
import Sidebar from "./Sidebar";

const ProductList = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
};

export default ProductList;
