import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";

function BtnRender({ product, deleteProduct }) {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;

  return (
    <div className="flex justify-center">
      {isAdmin ? (
        <>
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-lg mr-4"
            onClick={() =>
              deleteProduct(product._id, product.images.public_id)
            }
          >
            Delete
          </button>
          <Link
            className="bg-green-600 text-white py-2 px-4 rounded-lg"
            to={`/edit_product/${product._id}`}
          >
            Edit
          </Link>
        </>
      ) : (
        <>
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-lg mr-4"
            onClick={() => addCart(product)}
          >
            Buy
          </button>
          <Link
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            to={`/detail/${product._id}`}
          >
            View
          </Link>
        </>
      )}
    </div>
  );
}

export default BtnRender;
