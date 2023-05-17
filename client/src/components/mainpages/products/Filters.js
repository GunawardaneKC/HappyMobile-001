// import React, { useContext } from 'react'
// import { GlobalState } from '../../../GlobalState'

// function Filters() {
//     const state = useContext(GlobalState)
//     const [categories] = state.categoriesAPI.categories

//     const [category, setCategory] = state.productsAPI.category
//     // const [sort, setSort] = state.productsAPI.sort
//     const [search, setSearch] = state.productsAPI.search

//     const handleCategory = e => {
//         setCategory(e.target.value)
//         setSearch('')
//     }

//     return (
//         <div className="mt-10 ml-4 mr-4 flex flex-wrap justify-between rounded-2xl p-4 bg-gray-200 text-slate-900">
//             <div className="flex flex-wrap items-center gap-4">
//                 <span className="font-medium">Filters: </span>
//                 <select name="category" value={category} onChange={handleCategory} className="border rounded-md w-40 px-2 py-1">
//                     <option value=''>All Products</option>
//                     {
//                         categories.map(category => (
//                             <option value={"category=" + category._id} key={category._id}>
//                                 {category.name}
//                             </option>
//                         ))
//                     }
//                 </select>
//             </div>

//             <div className="flex items-center gap-4">
//                 <input type="text" value={search} placeholder="Enter your search!" onChange={e => setSearch(e.target.value.toLowerCase())} className="border rounded-md px-2 py-1" />


//             {/* <div className="row sort">
//                 <span>Sort By: </span>
//                 <select value={sort} onChange={e => setSort(e.target.value)} >
// =======
//                 <span className="font-medium">Sort By: </span>
//                 <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded-md px-2 py-1">

//                     <option value=''>Newest</option>
//                     <option value='sort=oldest'>Oldest</option>
//                     <option value='sort=-sold'>Best sales</option>
//                     <option value='sort=-price'>Price: Hight-Low</option>
//                     <option value='sort=price'>Price: Low-Hight</option>
//                 </select>
//             </div> */}
//         </div>
//     )
// }

// export default Filters

// import React, { useContext } from 'react';
// import { GlobalState } from '../../../GlobalState';

// function Filters() {
//   const state = useContext(GlobalState);
//   const [categories] = state.categoriesAPI.categories;

//   const [category, setCategory] = state.productsAPI.category;
//   // const [sort, setSort] = state.productsAPI.sort
//   const [search, setSearch] = state.productsAPI.search;

//   const handleCategory = e => {
//     setCategory(e.target.value);
//     setSearch('');
//   };

//   return (
//     <div className="mt-10 ml-4 mr-4 flex flex-wrap justify-between rounded-2xl p-4 bg-gray-200 text-slate-900">
//       <div className="flex flex-wrap items-center gap-4">
//         <span className="font-medium">Filters: </span>
//         <select
//           name="category"
//           value={category}
//           onChange={handleCategory}
//           className="border rounded-md w-40 px-2 py-1"
//         >
//           <option value="">All Products</option>
//           {categories.map(category => (
//             <option value={"category=" + category._id} key={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="flex items-center gap-4">
//         <input
//           type="text"
//           value={search}
//           placeholder="Enter your search!"
//           onChange={e => setSearch(e.target.value.toLowerCase())}
//           className="border rounded-md px-2 py-1"
//         />
//       </div>
//     </div>
//   );

//             {/* <div className="row sort">
//                 <span>Sort By: </span>
//                 <select value={sort} onChange={e => setSort(e.target.value)} >

//                 <span className="font-medium">Sort By: </span>
//                 <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded-md px-2 py-1">

//                     <option value=''>Newest</option>
//                     <option value='sort=oldest'>Oldest</option>
//                     <option value='sort=-sold'>Best sales</option>
//                     <option value='sort=-price'>Price: Hight-Low</option>
//                     <option value='sort=price'>Price: Low-Hight</option>
//                 </select>
//             </div> */}
//         </div>
//     )
// }

// export default Filters;

import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = e => {
    setCategory(e.target.value);
    setSearch('');
  };

  return (
    <div className="mt-10 ml-4 mr-4 flex flex-wrap justify-between rounded-2xl p-4 bg-gray-200 text-slate-900">
      <div className="flex flex-wrap items-center gap-4">
        <span className="font-medium">Filters: </span>
        <select
          name="category"
          value={category}
          onChange={handleCategory}
          className="border rounded-md w-40 px-2 py-1"
        >
          <option value="">All Products</option>
          {categories.map(category => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={search}
          placeholder="Enter your search!"
          onChange={e => setSearch(e.target.value.toLowerCase())}
          className="border rounded-md px-2 py-1"
        />
      </div>
    </div>
  );
}

export default Filters;

