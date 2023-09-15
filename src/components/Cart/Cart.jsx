

const Cart = ({selectCart, remaining,totalCost}) => {
     console.log(selectCart)
    return (
    
        <div className=" font-serif ml-5 mr-5 font-bold">
            <h3 className=" text-cyan-400  font-serif text-xl">Credit Hour Remaining 7 hr</h3>
            <hr />
            <br />
            <h2 className="font-serif text-xl font-bold">Course Name</h2>
            <br />
        
            {
                selectCart.map(cart=>(

                    <ol start={1} key={cart.id}>
                        <li>
                            {cart.name}
                        </li>
                    </ol>
                ))
            }
            <hr />
            <br />

            <h2>

     Total Credit Hour:{totalCost}hr
     </h2>

     <hr />
            <br />
            <h2>
            Total Price:{remaining}USD
            </h2>
        </div>
    );
};

export default Cart;