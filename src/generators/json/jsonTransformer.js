
export const getDefaultJsonValues = (value="String") => {
  switch (value) {
    case "String": {
      return '';
    }
    case "Int": {
      return 0;
    }
  }
}