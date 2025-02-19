import React, { useEffect, useState } from "react";
import "./ProductsDisplayer.css";

const ProductsDisplayer = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
      const fetchProducts=async()=>{
        try{
            const response= await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products || []);
        } catch (e){
            console.error(e);
        }
      }
      fetchProducts();
    },[])
    return(
        <div>
          <h1>Products List</h1>
          <div className="grid-containers">
            {Array.isArray(products) && products.map((product)=>(
                <div key={product.id} className="products-card">
                    <img src={product.images[0]} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <p>Rs {product.price}</p>
                </div>
            ))}
          </div>
        </div>

    );
};

export default ProductsDisplayer;