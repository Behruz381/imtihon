import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../ui/Card";

function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data), console.log(data));
  }, []);

  return (
    <>
      {data?.map((item) => {
        return <h1>{item.title}</h1>;
      })}
    </>
  );
}

export default SingleProduct;
