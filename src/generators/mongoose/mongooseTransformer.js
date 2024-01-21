
export const getDefaultMongooseTypes = (value="String") => {
  switch (value) {
    case "String": {
      return String;
    }
    case "ID": {
      return String;
    }
    case "Int": {
      return Number;
    }
  }
}