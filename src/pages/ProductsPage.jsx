import React from "react";

const Products = () => {
  return (
    <section className="w-full">
      <div className="bg-heroproductmob h-[120px] bg-cover flex items-center justify-center pl-10 sm:bg-heroproductdesk lg:h-[200px] ">
        <div className="relative w-[110px] h-[30px] border-2 border-yellow-500  sm:w-[125px] sm:h-[40px] lg:w-[170px] lg:h-[50px]">
          <h1 className="text-white font-bold text-xl  absolute right-8 sm:text-2xl lg:text-4xl ">
            PRO<span className="text-yellow-500">DUTOS</span>
          </h1>
        </div>
      </div>
      <div className="h-[500px]"></div>
    </section>
  );
};

export default Products;
