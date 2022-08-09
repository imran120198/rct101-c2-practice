import React from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import { useState } from "react";
import { useEffect } from "react";

function ProductPage() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("asc");
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(5)

  const handlegetProducts = () => {
    return getProducts({sort,page,limit}).then((res) => {
      setData(res.data);
      console.log(res);
    });
  };

  useEffect(() => {
    handlegetProducts({sort,page,limit});
  }, [sort,page,limit]);

  const handleChange = (e) => {
    if(e.target.value == "5"){
      setLimit(limit)
    }
    else if(e.target.value == "10"){
      setLimit(limit+5)
    }
    else if(e.target.value == "15"){
      setLimit(limit+10)
    }
    
  }

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button
        data-testid="low-to-high"
        disabled={sort === "asc"}
        onClick={() => setSort("asc")}
      >
        Sort low to high
      </button>
      <button data-testid="high-to-low" onClick={() => setSort("desc")}>
        Sort high to low
      </button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select" onChange={handleChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <Pagination page={page} setPage={setPage}/>
      {/* map products */}
      <ProductList data={data} />
    </div>
  );
}

export default ProductPage;
