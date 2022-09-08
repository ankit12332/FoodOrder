import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 110,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '../../../assets/food-1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 90,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '../../../assets/food-2.png',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 59,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '../../../assets/food-3.png',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 80,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '../../../assets/food-4.png',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 30,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '../../../assets/food-5.png',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 120,
        cookTime: '40-50',
        favorite: true,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '../../../assets/food-6.png',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 7,
        name: 'Chicken Biriyani',
        price: 170,
        cookTime: '50-60',
        favorite: false,
        origins: ['india'],
        stars: 5.0,
        imageUrl: '../../../assets/food-7.png',
        tags: ['Biriyani', 'Lunch']
      },
      {
        id: 8,
        name: 'Albredo Pasta',
        price: 180,
        cookTime: '15-20',
        favorite: true,
        origins: ['italy'],
        stars: 4.8,
        imageUrl: '../../../assets/food-8.png',
        tags: ['FastFood', 'Pasta', 'Lunch']
      },
    ];
  }
}
