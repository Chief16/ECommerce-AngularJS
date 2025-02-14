export interface Catalog {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  quantityAvl: number;
  inCart: number;
}

interface CatalogInCart {
  name: string;
  quantity: number;
  price: number;
}

export class CatalogService {
  catalogs: Catalog[] = [
    {
      id: 1,
      name: "Gaming Laptop",
      category: "Laptops",
      price: 1299,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "High-performance gaming laptop with RGB keyboard.",
      quantityAvl: 10,
	  inCart: 0
    },
    {
      id: 2,
      name: "Ultrabook",
      category: "Laptops",
      price: 999,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "Sleek and lightweight ultrabook for professionals.",
      quantityAvl: 15,
	  inCart: 0
    },
    {
      id: 3,
      name: "Business Laptop",
      category: "Laptops",
      price: 1099,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "Reliable business laptop with long battery life.",
      quantityAvl: 8,
	  inCart: 0
    },
    {
      id: 4,
      name: "2-in-1 Convertible Laptop",
      category: "Laptops",
      price: 899,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "Versatile 2-in-1 laptop with a touchscreen display.",
      quantityAvl: 12,
	  inCart: 0
    },
    {
      id: 5,
      name: "MacBook Pro",
      category: "Laptops",
      price: 1999,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
      description: "Powerful MacBook Pro with M-series chip.",
      quantityAvl: 5,
	  inCart: 0
    },
    {
      id: 6,
      name: "Chromebook",
      category: "Laptops",
      price: 499,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "Affordable and fast Chromebook for students.",
      quantityAvl: 20,
	  inCart: 0
    },
    {
      id: 7,
      name: "Workstation Laptop",
      category: "Laptops",
      price: 2499,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "High-end workstation laptop for professionals.",
      quantityAvl: 6,
	  inCart: 0
    },
    {
      id: 8,
      name: "Budget Laptop",
      category: "Laptops",
      price: 599,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "Affordable laptop with decent performance.",
      quantityAvl: 18,
	  inCart: 0
    },
    {
      id: 9,
      name: "Student Laptop",
      category: "Laptops",
      price: 750,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
      description: "Perfect laptop for students and daily use.",
      quantityAvl: 25,
	  inCart: 0
    },
  ];

  catalogsInCart: CatalogInCart[] = [];

  constructor() {}

  getCatalogs() {
    return this.catalogs;
  }

  addToCart(catalog: any) {
    let cat: any =
      this.catalogsInCart.filter((c: any) => c.name === catalog.name)[0] ||
      null;
    if (cat) {
      cat.quantity++;
    } else {
      this.catalogsInCart.push({
        name: catalog.name,
        quantity: 1,
        price: 100,
      });
    }
    sessionStorage.setItem(
      "catalogsInCart",
      JSON.parse(JSON.stringify(this.catalogsInCart))
    );
  }

  getItemsFromCart() {
    return this.catalogsInCart;
  }

  getItemsCountFromCart() {
    return this.catalogsInCart.length;
  }
}
