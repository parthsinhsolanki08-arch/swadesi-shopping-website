import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Categories from '../../components/Categories'
import ProductCard from '../../components/ProductCard'
import { fetchProducts } from '../../api'

const Products = () => {
  const [products, setProducts] = useState([])
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    const getProducts = async () => {
      setProducts([]); // Clear existing products while loading new ones
      const data = await fetchProducts(searchTerm)
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [searchTerm])


  return (
    <div>
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
      </div>
      {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div className="flex justify-center items-center h-40 my-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 shadow-xl"></div>
        </div>
      }
    </div>
  )
}

export default Products