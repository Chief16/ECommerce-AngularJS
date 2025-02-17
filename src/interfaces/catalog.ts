export interface ICatalog {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
  quantityAvl: number
  itemsInCart: number
}

interface IRating {
  rate: number
  count: number
}