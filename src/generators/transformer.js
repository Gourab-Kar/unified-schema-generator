import _ from 'lodash';
import {getDefaultJsonValues} from "./json/jsonTransformer.js";

let outputType='';

export const getDefaultValueByOutput = (dataType) => {
  switch (outputType) {
    case "json": {
      return getDefaultJsonValues(dataType);
    }
    case "mongoose": {

    }
  }
}

export const getDefaultValue = ({schemaMap, value = "String"}) => {
  if (_.startsWith(value, "[")) {
    return []; //return blank array for composite array ref
  };

  switch (value) {
    case "String": return getDefaultValueByOutput("String");
    case "ID": return getDefaultValueByOutput("ID");
    case "Int": return getDefaultValueByOutput("Int")
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

export const getTransformedSchema = ({schemaMap={}, outputSchemaType}) => {
  let jsonSchema = {};
  outputType = outputSchemaType;

  Object.keys(schemaMap).map(schemaName => {
    const fieldsArr = schemaMap[schemaName].split("\n");
    const schema = parseSchema({
      schemaMap,
      fieldsArr
    });

    jsonSchema[schemaName] = schema;
  });

  return jsonSchema;
}