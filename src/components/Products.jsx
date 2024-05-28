import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Products() {
  const [products, setProducts] = useState([])
  const Store = useSelector(Store => Store.cart)
  console.log(Store);
  const dispatch = useDispatch()

  const addCart = (item) => {
    dispatch({type:"ADD_TO_CART",payload:item})
  }
  const fetchData = async () => {
    try {
      let res = await fetch('https://fakestoreapi.com/products')
      let data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg p-4 bg-white">
            <img src={item.image} alt={item.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <button className='px-6 py-2 bg-blue-500 text-white rounded-lg mt-4'
            onClick={() => addCart(item)}
            >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
