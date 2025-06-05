// utils/scaling.js
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (e.g., the design was made for iPhone 12/13/14)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scale based on width (adjust this logic if needed)
const scale = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;

// Optional: Scale vertically if height is a concern
const verticalScale = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

// Moderate scale (sometimes you might want to clamp values)
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };