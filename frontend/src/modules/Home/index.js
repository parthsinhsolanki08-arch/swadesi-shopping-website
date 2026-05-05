import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import FeatureCard from '../../components/FeatureCard'
import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
import Stats from '../../components/StatCard'
import { fetchProducts } from '../../api'

const Home = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts()
      // Limit to 12 products on the frontend for now
      setProducts(data.slice(0, 12))
    }
    getProducts()
  }, [])

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0 ? 
        <ProductCard products={products} /> 
        :
        <div className="flex justify-center items-center h-40 my-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 shadow-xl"></div>
        </div>
      }
      <Stats/>
    </>
  )
}

export default Home