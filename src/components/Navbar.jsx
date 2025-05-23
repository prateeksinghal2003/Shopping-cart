import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"


const Navbar =() =>
{

  //this is object destructuring
  
  const {cart} = useSelector((state) => state);

  // can also write like this 
  // const cart= useSelector((state)=> state.cart);


    return(
        <div>
       
       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

           <NavLink to="/">
           <div className="ml-5">
           <img src="../logo.png" className="h-14"/>
           </div>
          </NavLink>

  <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

  {/* when click on this image go to / */}
    <NavLink to="/">
      <p>Home</p>
    </NavLink>

    <NavLink to="/cart">
      <div className="relative">

      {/* text-2xl sets the font size of the icon to 1.5rem */}
      {/* increases the size of FaShoppingCart. */}
          <FaShoppingCart className="text-2xl"/>
          {
            cart.length > 0 &&
            <span
            className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
            justify-center items-center animate-bounce rounded-full text-white" 
            >{cart.length}</span>
          }
          
      </div>
    </NavLink>
    
  </div>
</nav>

        </div>
    )
}

export default Navbar