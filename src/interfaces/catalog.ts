export interface Catalog {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  quantityAvl: number
  itemsInCart: number
}

interface Rating {
  rate: number
  count: number
}