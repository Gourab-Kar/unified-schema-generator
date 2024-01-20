import _ from "lodash";
import {logSpreaded} from "../../utils/consoleLogger.js";

let unifiedSchemaCache;

export const parseRefType = (refSchema) => {
  const {refType='', fieldId= ''} = refSchema;
  let fields= {};

  switch (refType) {
    case "Array": {
      return [];
    }
    case "Object": {
      fields[fieldId] = schemaParser(unifiedSchemaCache[fieldId]);
      break;
    }
  };

  return fields;
}

export const objectFieldParser = (schemaDetails) => {
  let fields={};

  Object.keys(schemaDetails).map(key => {
    const {fieldType='', fieldId= '', fieldLabel=''} = schemaDetails[key];

    switch (fieldType) {
      case "String": {
        fields[fieldId] = '';
        break;
      }
      case "Number": {
        fields[fieldId] = 0;
        break;
      }
      case "refSchema": {
        fields[fieldId] = parseRefType(schemaDetails[fieldId]);
        break;
      }
    }
  });

  return fields;
}

export const schemaParser = (schema = {}) => {
  const {schemaId = '', schemaName= '', schemaType, schemaDetails= {}} = schema;

  console.log(`schemaId: ${schemaId}`);

  let generatedSchema={};

  switch (schemaType) {
    case 'Object': {
      return  objectFieldParser(schemaDetails);
    }
    case 'Array': {
      return [];
    }
  }

  return generatedSchema;
}

export const transformToJSON = (unifiedSchema) => {
  unifiedSchemaCache = _.cloneDeep(unifiedSchema);

  let result= {};

  Object.keys(unifiedSchema).map(key => {
    result[key] = schemaParser(unifiedSchema[key]);
  });

  return result;
}