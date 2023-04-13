import React, { useEffect, useState } from "react";
import Banner from "../../../images/Banner.png";
import Card from "../../ui/Card";
import { Link, useParams } from "react-router-dom";
import Loader from "../../ui/Loader";

function Home() {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <main>
        <div className="container">
          <div className="main__img">
            <img src={Banner} alt="Banner" className=" w-full" />
          </div>
          <div className="cards-title  mt-[88px] mb-[20px] text-[20px]">
            <h1 className="text-[#838383] font-semibold">Products</h1>
          </div>
          <div className="cards grid grid-cols-3 justify-items-center gap-y-[70px] gap-x-[30px]">
            {

             data?.length > 0 ?(
              data?.map((item) => {
                return (
                    <Card item={item} key={item.id} />
                );
              })
             ): <Loader/>

            }
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
