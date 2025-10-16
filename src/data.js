export const API_KEY = 'AIzaSyCu8Fp7s8pAWWTXckb3o8owliSYZlG8iHc';

export const value_converter = (value) => {
if(value >= 1000000) {
  return Math.floor(value / 1000000) + "M";
} else if(value >= 1000) {
  return Math.floor(value/1000) + "K";
} else {
  return value;
}
}