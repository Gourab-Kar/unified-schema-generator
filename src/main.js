import _ from "lodash";
import {getUnifiedSchema} from "./files/input/unifiedSchema.js";
import {logNotify, logSpreaded, logWarning} from "./utils/consoleLogger.js";
import {config} from "../config.js";
import {transformToJSON} from "./generators/json/jsonTransformer.js";
import {transformToGql} from "./generators/gql/gqlTransformer.js";

export const postGenCleanups = ({schema = {}, cleanupIds = []}) => {
  const updatedSchema = _.cloneDeep(schema);

  cleanupIds.map(id => {
    delete updatedSchema[id];
  });

  return updatedSchema;
}

export const transformSchema = (unifiedSchema) => {
  const {outputSchemaType = 'json', cleanUpObjects = []} = config;

  switch (outputSchemaType) {
    case "json": {
      // logNotify(`going to transform into ${outputSchemaType} `);
      const transformedSchema = transformToJSON(unifiedSchema);
      const cleanedSchema = postGenCleanups({
        schema: transformedSchema,
        cleanupIds: cleanUpObjects
      });

      logSpreaded(cleanedSchema);
      break;
    }
    case 'gql': {
      const gqlTypeDef = transformToGql(unifiedSchema);

      logSpreaded(gqlTypeDef);
      break;
    }
    case 'mongoose': {
      break;
    }
    default: {
      logWarning(`Invalid output type`);
    }
  }
};

transformSchema(getUnifiedSchema());