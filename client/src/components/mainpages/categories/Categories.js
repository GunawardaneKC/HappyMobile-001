import React, {useState, useContext} from 'react';
import {GlobalState} from '../../../GlobalState';
import axios from 'axios';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';

function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCategory = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                const res = await axios.put(`/api/category/${id}`, {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('/api/category', {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name) =>{
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCategory = async id =>{
        try {
            const res = await axios.delete(`/api/category/${id}`, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}}className='mt-8 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className="bg-violet-500 px-4 py-6 max-w-sm border rounded-lg border-purple-700">
    <form onSubmit={createCategory}>
      <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
      <div className="flex items-center">
        <input type="text" name="category" value={category} required
          onChange={e => setCategory(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline text-slate-900"
        />
        <button type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {onEdit ? "Update" : "Create"}
        </button>
      </div>
    </form>

    <div className="mt-6">
      {categories.map(category => (
        <div className="bg-violet-600 rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
          key={category._id}>
          <p className="text-gray-200">{category.name}</p>
          <div>
            <button onClick={() => editCategory(category._id, category.name)}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">
              Edit
            </button>
            <button onClick={() => deleteCategory(category._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.div>

    )
}

export default Categories
