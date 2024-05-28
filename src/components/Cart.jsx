import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const Store = useSelector(Store => Store.cart)
    console.log(Store);
  return (
    <div className="container mx-auto mt-10 px-20">
    <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
    <div className="bg-white p-6">
      {Store.map((item) => (
        <div key={item.id} className="flex items-center mb-6 shadow-lg px-8 py-4 rounded-lg">
          <img src={item.image} alt={item.name} className="w-20 h-20 rounded mr-4" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <span className="text-gray-900 font-bold">{item.price}</span>
          </div>
        </div>
      ))}
      <div className="mt-6 text-right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  </div>
  )
}

export default Cart