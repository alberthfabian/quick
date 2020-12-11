const images = {
  logo: require('../../assets/Logo.png').default,
  search: require('../../assets/Search.png').default,
  filters: require('../../assets/Filters.png').default,
  default: require('../../assets/Logo.png').default, 
}

export const getImg = (image) => {
  let img = images[image];
  if (img === undefined) {
      img = images.default
  }
  return img;
}

export default images;