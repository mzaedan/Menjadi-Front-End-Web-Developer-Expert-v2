import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-btn-intiator';

import '../../components/resto-detail';
// import '../../component/resto-review';

const Explore = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const detail = restaurantById.restaurant;
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    // restoContainer.innerHTML += `
    //   <resto-review></resto-review>
    // `;

    // const restoReview = document.querySelector('#resto-review');
    // detail.customerReviews.forEach((review) => {
    //   restoReview.innerHTML += createRestoReviewTemplate(review);
    // });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Explore;
