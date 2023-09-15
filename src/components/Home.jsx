import { useEffect } from "react";
import Cart from "./Cart/Cart";
import { useState } from "react";

const Home = () => {
    const [cart,setCart] =  useState([]);
  const [selectCart,setSelectCart] =  useState([]);
  const [remaining , setReamining] =  useState(0);
  const [totalCost ,setTotalCost ] =  useState(0);

  useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data=> setCart(data))
},[]);

  const handleCart = (course) =>{
    const isExist = selectCart.find(item=>item.id==course.id)
    let count =  course.credit;
    let price = course.price;
      if(isExist){
        return alert("All ready Selected")
      }else{
        selectCart.forEach(item=>{
            count =  count + item.credit;
            price =  price + price;
          });

          if(count > 20){
            return alert ("higher credit 20");
           }else{
            setTotalCost (count);
            setReamining(price);
        setSelectCart([...selectCart,course]);
    
      }

  }
};
  
    return (
        <>
         <h1 className="text-3xl text-center font-serif mb-10 font-bold mt-10">Course Registration</h1>


     <div className="flex">
         <div  className="grid lg:grid-cols-3 gap-10 ml-10 ">

          {
            cart.map(course=> ( 
                <div key={course.id} className=" card w-72 bg-base-100 shadow-xl">
         <figure className="px-10 pt-10">
          <img src={course.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title font-serif">{course.name}</h2>
        <p className="font-serif font-thin">{course.description}</p>
        <div className="flex gap-10 justify-evenly font-serif">
           <p className="font-serif">
            {course.price}
           </p>
            <p>
               {course.credit}hr
            </p>
        </div>
        <div className="card-actions">
          <button onClick={()=>{
            handleCart(course)
          }} className="btn btn-outline btn-info">Select</button>
        </div>
      </div>
          </div>

            ))
          }

  </div>

      <Cart
      selectCart={selectCart}
      remaining={remaining}
      totalCost={totalCost}
      ></Cart>

      </div>
        </>
        
    );
};

export default Home;