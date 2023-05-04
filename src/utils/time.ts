export const delay = (time = 1) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
