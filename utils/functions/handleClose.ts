export const handleClose = (setFunction: (boolean: boolean) => void) => () => {
  setFunction(false);
};
