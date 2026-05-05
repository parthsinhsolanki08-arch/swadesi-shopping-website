import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            products.map((product) => {
              const { id, title, price, description, category, image } = product;
              return (
                <Link to={`/products/${id}`} key={id} className="lg:w-[23%] md:w-1/2 p-4 w-full mb-6 cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ml-4">
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img alt={title} className="object-contain object-center w-full h-full block group-hover:scale-105 transition-transform duration-300" src={image} />
                  </div>
                  <div className="mt-4 flex flex-col justify-between h-32">
                    <div>
                      <h3 className="text-indigo-500 text-xs tracking-widest title-font mb-1 uppercase font-semibold">{category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">{title}</h2>
                    </div>
                    <p className="mt-1 text-xl font-bold text-gray-900">${price}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ProductCard