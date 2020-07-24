export const throttle = (callback, milliseconds) => {
  let throttleCheck;

  return function () {
    if (!throttleCheck) {
      throttleCheck = setTimeout(() => {
        callback(...arguments);
        throttleCheck = false;
      }, milliseconds);
    }
  };
};
