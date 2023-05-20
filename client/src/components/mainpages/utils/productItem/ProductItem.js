import React from 'react';
import BtnRender from './BtnRender';

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
    return (

        <div className="p-6 ml-4 mr-4 bg-white rounded-lg shadow-md">
            {isAdmin && (
                <input
                    type="checkbox"
                    className="w-5 h-5 text-purple-600 form-checkbox"
                    checked={product.checked}
                    onChange={() => handleCheck(product._id)}
                />
            )}
            <img src={product.images.url} alt="" className="object-contain w-64 h-64 mx-auto" />


            <div className="mt-6 text-center">
                <h2 className="mb-2 text-lg font-medium text-gray-900 uppercase" title={product.title}>
                    {product.title}
                </h2>
                <span className="mb-4 text-xl font-bold text-purple-600">LKR {product.price}</span>
                <p className="text-gray-600">{product.description}</p>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} className="bg-purple-500 text-slate-950" />
        </div>
    );
}

export default ProductItem;