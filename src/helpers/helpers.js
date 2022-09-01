export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isMobileScreen = () => {
  if (window.screen.width > 600) {
    return false;
  } else {
    return true;
  }
};
