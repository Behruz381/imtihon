import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <>
      <div className="cursor-pointer w-[350px] bg-white min-h-[407px] rounded-[30px] shadow-lg">
        <div className="card-icon ">
          <i className="bx bx-heart text-2xl cursor-pointer text-[#838383] pt-[15px] pl-[22px]"></i>
        </div>

        <div className="card-img py-[25px] px-[65px]">
          <img src={item.image} alt="img" className="w-[200px] h-[230px]" />
        </div>
        <div className="card-body flex justify-between px-[20px] gap-[30px] pb-[12px]">
          <div className="card-info">
            <h1 className="font-semibold text-[15px]">{item.title}</h1>
            <p className="text-[#838383] pt-[26px]">{item.category}</p>
          </div>
          <div className="card-price">
            <p className="text-[#FFA542] font-semibold">{item.price}$</p>
          </div>
        </div>
        <Link to={`/single/${item.id}`}>
          <button className="pb-[15px] pl-[22px]">more</button>{" "}
        </Link>
      </div>
    </>
  );
}

export default Card;
