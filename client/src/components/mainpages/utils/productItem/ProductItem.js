import React from 'react';
import BtnRender from './BtnRender';

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
    return (

        <div className="bg-white rounded-lg shadow-md ml-4 mr-4 p-6">
            {isAdmin && (
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-purple-600"
                    checked={product.checked}
                    onChange={() => handleCheck(product._id)}
                />
            )}
            <img src={product.images.url} alt="" className="mx-auto w-64 h-64 object-contain" />


            <div className="text-center mt-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2" title={product.title}>
                    {product.title}
                </h2>
                <span className="font-bold text-purple-600 text-xl mb-4">LKR {product.price}</span>
                <p className="text-gray-600">{product.description}</p>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} className="bg-purple-500 text-slate-950" />
        </div>
    );
}

export default ProductItem;