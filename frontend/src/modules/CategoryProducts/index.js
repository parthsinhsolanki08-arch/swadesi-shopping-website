import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import { fetchProductsByCategory } from '../../api'

const CategoryProducts = () => {
  const { name } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProductsByCategory(name)
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [name])

  if (products.length === 0) return (
    <div className="flex justify-center items-center h-40 mt-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 shadow-xl"></div>
    </div>
  )

  return (
    <ProductCard products={products} />
  )
}

export default CategoryProducts