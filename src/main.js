import {getUnifiedSchema} from "./files/input/unifiedSchema.js";
import {logInfo, logNotify, logSpreaded, logWarning} from "./utils/consoleLogger.js";
import {config} from "../config.js";

export const transformSchema = (unifiedSchema) => {
  const {outputSchemaType = 'json'} = config;

  switch (outputSchemaType) {
    case "json": {
      logNotify(`going to transform into ${outputSchemaType} `);
      break;
    }
    case 'gql': {
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