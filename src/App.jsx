import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CardLayout from "./Component/Template/Card.Layout";
import CartPage from "./Component/Template/Cart/CartPage";
import Modal from "./Component/Atoms/Modal/Modal";
import AlertDialogDemo from "./Component/Atoms/Modal/Modal";
import ProductCategory from "./Component/Molecule/ProductCAtegory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CardLayout />,
    },
    {
      path: "cart",
      element: (
        <div className="bg-[#e9e9e9]">
          <CartPage />
        </div>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
