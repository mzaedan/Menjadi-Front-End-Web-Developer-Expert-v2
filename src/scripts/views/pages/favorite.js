import FavoriteRestaurantDB from '../../data/favorite-restaurant';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../../components/resto-favorite';

const Favorite = {
  async render() {
    return `
      <resto-favorite></resto-favorite>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
