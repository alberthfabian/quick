const images = {
  logo: require('../../assets/Logo.png').default,
  search: require('../../assets/Search.png').default,
  filters: require('../../assets/Filters.png').default,
  black: require('../../assets/Black.png').default,
  blue: require('../../assets/Blue.png').default,
  brown: require('../../assets/Brown.png').default,
  gray: require('../../assets/Gray.png').default,
  green: require('../../assets/Green.png').default,
  pink: require('../../assets/Pink.png').default,
  purple: require('../../assets/Purple.png').default,
  red: require('../../assets/Red.png').default,
  white: require('../../assets/White.png').default,
  yellow: require('../../assets/Yellow.png').default,
  close: require('../../assets/Close.png').default,
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