import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CardLayout from "./Component/Template/Card.Layout";
import CartPage from "./Component/Template/Cart/CartPage";
import Modal from "./Component/Atoms/Modal/Modal";
import AlertDialogDemo from "./Component/Atoms/Modal/Modal";
import ProductCategory from "./Component/Molecule/ProductCAtegory";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<CardLayout/>
    },{
      path:"cat",
      element:<ProductCategory/>
    }
    ,{
      path:"modal",
      element:<div><AlertDialogDemo/></div>
    },{
      path:"cart",
      element:<div><CartPage/></div>
    }
  ])
  return (
    <>
      
        <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
