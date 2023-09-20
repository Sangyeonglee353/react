import React from "react";

const Products = ({ name, imagePath, updateItemCount }) => {
  console.log(name, imagePath);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    updateItemCount(name, currentValue);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          defaultValue={0}
          min="0"
          name="quantity"
          onChnage={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
