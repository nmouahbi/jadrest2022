export const loadHomePage = () => {
  const contentDiv = document.querySelector('#content');

  const homeContainer = document.createElement('div');
  const homeTextContainer = document.createElement('div');
  const homeImage = document.createElement('img');
  const headline = document.createElement('h1');
  const homeParagraph = document.createElement('p');
  const ctaButton = document.createElement('button');
  const arrowRightIcon = document.createElement('img');

  homeContainer.classList.add('home');
  homeTextContainer.classList.add('home-text');
  homeImage.classList.add('main');
  headline.classList.add('headline');
  ctaButton.classList.add('cta-button', 'home-cta-button');

  headline.textContent = 'Try Our Best dish of the day';
  homeParagraph.textContent =
    "Hungry and craving some tasty and nutritious salads? We've got you!";
  ctaButton.textContent = 'discover menu';

  arrowRightIcon.setAttribute('src', 'components/icons/arrow-right.svg');
  homeImage.setAttribute('src', '/components/images/menu/item 2.jpeg');
  ctaButton.setAttribute('data-tab-link', 'menu');

  ctaButton.append(arrowRightIcon);
  homeTextContainer.append(headline, homeParagraph, ctaButton);
  homeContainer.append(homeTextContainer, homeImage);
  contentDiv.append(homeContainer);
};
