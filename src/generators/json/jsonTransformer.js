import _ from 'lodash';

export const getDefaultValue = ({schemaMap, value = "String"}) => {
  if (_.startsWith(value, "[")) {
    return []; //return blank array for composite array ref
  };

  switch (value) {
    case "String": {
      // console.log("Found a string");
      return '';
    }
    case "Int": {
      // console.log("Found a number");
      return 0;
    }
    default: {
      //this is for obj ref
      if (!_.isEmpty(value)) {
        const fieldsStr = schemaMap[value];
        const fieldsArr = fieldsStr.split("\n");

        return parseSchema({schemaMap, fieldsArr});
      }
    }
  }
}

export const parseField = ({schemaMap, field}) => {
  const fieldArr = field.split(":");
  let fieldObj={};
  const value = fieldArr[1].trim()

  fieldObj[fieldArr[0].trim()] = getDefaultValue({schemaMap, value});

  // console.log(fieldObj);

  return fieldObj;
}

export const parseSchema = ({schemaMap = {}, fieldsArr}) => {
  let fields = {};

  fieldsArr.map(field => {
    const fieldObj = parseField({schemaMap, field})

    fields = {...fields, ...fieldObj};
  });

  return fields;
}

export const convertToJsonSchema = (schemaMap) => {
  let jsonSchema = {};

  Object.keys(schemaMap).map(schemaName => {
    // console.log(schemaMap[schemaName]);
    const fieldsArr = schemaMap[schemaName].split("\n");
    const schema = parseSchema({
      schemaMap,
      fieldsArr
    });

    jsonSchema[schemaName] = schema;
  });

  return jsonSchema;
}