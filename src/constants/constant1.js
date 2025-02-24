import phone from '../assets/smartphone.png'
import laptop from '../assets/laptop.png'
import smartwatch from '../assets/smartwatch.png'
import tablet from '../assets/tablet.png'
import headphone from '../assets/headphone.png'
import tshirt from '../assets/tshirt.png'
import jeans from '../assets/jeans.png'
import jacket from '../assets/jacket.png'
import shoes from '../assets/shoes.png'
import conditioner from '../assets/conditioner.png'
import microwave from '../assets/microwave.png'
import vaccum from '../assets/vaccum.png'
import great from '../assets/great.png'
import book1984 from '../assets/1984.png'
import killbird from '../assets/killbird.png'
import hobbit from '../assets/hobbit.png'
export const categories = [
    {
      category: "Electronics",
      products: [
        { name: "Smartphone", brand: "Samsung", price: 999, stock: 25, imgSrc:phone },
        { name: "Laptop", brand: "Dell", price: 1299, stock: 15, imgSrc:laptop },
        { name: "Smartwatch", brand: "Apple", price: 399, stock: 40, imgSrc:smartwatch },
        { name: "Tablet", brand: "Lenovo", price: 499, stock: 30, imgSrc:tablet },
        { name: "Headphones", brand: "Sony", price: 199, stock: 50, imgSrc:headphone },
      ],
    },
    {
      category: "Clothing",
      products: [
        { name: "T-Shirt", brand: "Nike", price: 29, stock: 100, imgSrc:tshirt },
        { name: "Jeans", brand: "Levi's", price: 59, stock: 50, imgSrc:jeans },
        { name: "Jacket", brand: "Adidas", price: 79, stock: 30, imgSrc:jacket },
        { name: "Shoes", brand: "Puma", price: 89, stock: 40, imgSrc:shoes },
      ],
    },
    {
      category: "Home Appliances",
      products: [
        { name: "Air Conditioner", brand: "LG", price: 499, stock: 10, imgSrc:conditioner },
        { name: "Microwave", brand: "Samsung", price: 199, stock: 20, imgSrc:microwave },
        { name: "Vacuum Cleaner", brand: "Dyson", price: 299, stock: 15, imgSrc:vaccum },
      ],
    },
    {
      category: "Books",
      products: [
        { name: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15, stock: 200, imgSrc:great },
        { name: "1984", author: "George Orwell", price: 12, stock: 150, imgSrc:book1984 },
        { name: "To Kill a Mockingbird", author: "Harper Lee", price: 18, stock: 180, imgSrc:killbird },
        { name: "The Hobbit", author: "J.R.R. Tolkien", price: 22, stock: 100, imgSrc:hobbit },
      ],
    },
  ];