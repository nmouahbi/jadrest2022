let menu = [];

const Salad = function (name, image, ingredients, price) {
  this.name = name;
  this.image = image;
  this.ingredients = ingredients;
  this.price = price;
};

const addSaladToMenu = (name, image, ingredients, price) => {
  const newSalad = new Salad(name, image, ingredients, price);
  menu = [...menu, newSalad];
};

addSaladToMenu(
  'Pnini',
  'components/images/menu/item10.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

addSaladToMenu(
  'Pnini',
  'components/images/menu/item12.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

addSaladToMenu(
  'Pnini',
  'components/images/menu/item15.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

addSaladToMenu(
  'Pnini',
  'components/images/menu/item4.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

addSaladToMenu(
  'Pnini',
  'components/images/menu/item5.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

addSaladToMenu(
  'Pnini',
  'components/images/menu/item6.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);
addSaladToMenu(
  'Pnini',
  'components/images/menu/item7.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

addSaladToMenu(
  'Pnini',
  'components/images/menu/item8.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);
addSaladToMenu(
  'Pnini',
  'components/images/menu/item9.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

addSaladToMenu(
  'Pnini',
  'components/images/menu/item10.jpeg',
  'Spinach, strawberry, avocado, seed, almond',
  '8.90'

);

export const loadMenuPage = () => {
  const contentDiv = document.querySelector('#content');

  const menuContainer = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const saladGrid = document.createElement('div');

  menuContainer.classList.add('menu');
  saladGrid.classList.add('salad-grid');

  const initalAnimationDuration = 0.17;
  let animationDuration = initalAnimationDuration;

  for (const salad of menu) {
    const saladCard = document.createElement('div');

    const saladImage = document.createElement('img');
    const saladName = document.createElement('h2');
    const saladIngredients = document.createElement('p');
    const saladPrice = document.createElement('p');
    const addToCartButton = document.createElement('button');
    const plusIcon = document.createElement('img');

    menuHeading.classList.add('page-heading');
    saladCard.classList.add('salad-card');
    saladImage.classList.add('salad-card-image' );
    saladName.classList.add('salad-card-name');
    saladIngredients.classList.add('salad-card-ingredients');
    saladPrice.classList.add('salad-card-price');
    addToCartButton.classList.add('salad-card-add-to-cart');
    plusIcon.classList.add('salad-card-plus-icon');

    saladImage.src = salad.image;
    plusIcon.src = 'components/icons/plus.svg';

    menuHeading.textContent = 'Our Menu';
    saladName.textContent = salad.name;
    saladIngredients.textContent = salad.ingredients;
    saladPrice.textContent = `Dirham ${salad.price}`;

    saladCard.style.animationDuration = `${animationDuration}s`;
    animationDuration += initalAnimationDuration;

    addToCartButton.append(plusIcon);
    saladCard.append(
      saladImage,
      saladName,
      saladIngredients,
      saladPrice,
      addToCartButton
    );

    saladGrid.append(saladCard);
  }

  menuContainer.append(menuHeading, saladGrid);
  contentDiv.append(menuContainer);
};

export const updateCartOnClick = () => {
  const addToCartButtons = document.querySelectorAll('.salad-card-add-to-cart');
  const cartIcon = document.querySelector('.cart-icon');
  for (const button of addToCartButtons) {
    button.addEventListener('click', () => {
      cartIcon.classList.add('shake');
      cartIcon.addEventListener('animationend', () =>
        cartIcon.classList.remove('shake')
      );
      const currentItemCount = parseInt(cartIcon.dataset.count);
      if (currentItemCount >= 9) {
        cartIcon.dataset.count = '9+';
        return;
      }
      cartIcon.dataset.count = currentItemCount + 1;
      cartIcon.classList.add('cart-has-item');
    });
  }
};
