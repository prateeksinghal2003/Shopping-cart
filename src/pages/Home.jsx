import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = ()=>
{
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
    
        try{

          //sends a GET request to the given URL

          const res = await fetch(API_URL);

          //converting response into javascript object
          const data = await res.json();
          //data is in the form of array
    
          setPosts(data);
          //posts is fed with data
      }
        catch(error) 
        {
          console.log("Error aagya ji");
          setPosts([]);
        }
        setLoading(false);
    }
    

//  -------------------------   useEffect is a React Hook that allows you to run side effects in function components. Side effects include:

// Fetching data from an API
// Updating the DOM

// First argument: A function that runs the side effect.
// Second argument: Dependency array:
// [] → Runs once when the component mounts.-->effect runs once when the component is 
// first added to the UI (DOM) and does not run again on re-renders.
// [someState] → Runs whenever someState changes.
// No dependency array → Runs on every render.



      useEffect( () => {
        fetchProductData();
      },[])

      return(
        <div>
        {
          loading ? <Spinner />  :

          posts.length > 0 ? 
          (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
              posts.map( (post) => (
               <Product key = {post.id} post={post}/>
            ) )
            }
          </div> )   :
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div> 
        }
      </div>
      )
    
}

export default Home