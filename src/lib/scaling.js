function getDimensions() {
  let width = 0;
  let height = 0;
  let pixelRatio = 0;
  if (process.browser) {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = window.devicePixelRatio;
  }
  return {
    width,
    height,
    pixelRatio,
  };
}
const { width, height, pixelRatio } = getDimensions();
const guidelineBaseWith = 375;
const guidelineBaseHeight = 667;

const scale = (size) => (width / guidelineBaseWith) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const normalizeSize = (size) => {
  switch (true) {
    case pixelRatio < 1.4:
      return size * 0.8;
    case pixelRatio < 2.4:
      return size * 1.15;
    case pixelRatio < 3.4:
      return size * 1.35;
    default:
      return size * 1.5;
  }
};

export { scale, width, height, verticalScale, moderateScale, normalizeSize };
