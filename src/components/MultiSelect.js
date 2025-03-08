import React, { useState } from "react";

const MultiSelect = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [editindex, setEditIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (editindex !== null) {
      const updatedProducts = products.map((p, i) =>
        i === editindex ? { product, price, category } : p
      );
      setProducts(updatedProducts);
      setEditIndex(null);
      setProduct("");
      setPrice("");
      setCategory("");
    } else {
      setProducts([...products, { product, price, category }]);
      setProduct("");
      setPrice("");
      setCategory("");
    }
  };

  const editHandler = (index) => {
    const editedProduct = products.filter((_, i) => i === index);
    console.log(editedProduct[0].category);
    setProduct(editedProduct[0].product);
    setPrice(editedProduct[0].price);
    setCategory(editedProduct[0].category);
    setEditIndex(index);
  };

  const deleteHandler = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <h1>MultiSelect</h1>
        <label>Product Name </label>
        <input
          type="text"
          value={product}
          required
          onChange={(e) => setProduct(e.target.value)}
        />
        <br />
        <label>Price </label>
        <input
          type="number"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option default value="">
            Select Category
          </option>
          <option value="food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="furniture">furniture</option>
        </select>

        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.product}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>
                <button onClick={() => editHandler(i)}>Edit</button>
                <button onClick={() => deleteHandler(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultiSelect;
