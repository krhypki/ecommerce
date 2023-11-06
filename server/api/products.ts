import { products } from '~/data/prodcuts'
import { type Product } from '~/types/api/ProductCategories'

export default defineEventHandler((event) => {
  const { category, featured } = getQuery(event)
  let filteredProducts: Product[] = []

  if (typeof category === 'undefined' && typeof featured === 'undefined') {
    return products
  }

  filteredProducts = products.filter((product: Product) => {
    const hasCorrectCategory = product.category === category
    const isFeatured = product.featured

    if (typeof category === 'undefined') {
      return isFeatured
    }

    if (typeof featured === 'undefined') {
      return hasCorrectCategory
    }

    return hasCorrectCategory && isFeatured
  })

  return filteredProducts
})
