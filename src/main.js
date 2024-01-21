import _ from "lodash";
import * as fs from "fs";
import path, {dirname} from "path";
import {logSpreaded, logWarning} from "./utils/consoleLogger.js";
import {config} from "../config.js";
import {getUnifiedSchemaFromGraphQl} from "./generators/gql/graphqlToJson.js";
import {convertToJsonSchema} from "./generators/json/jsonTransformer.js";

export const transformSchema = () => {
  const {outputSchemaType = 'json', cleanUpObjects = []} = config;
  const graphqlPath = "/src/files/input/unifiedSchema.graphql";
  const pwd = dirname("./");

  const filePath = path.resolve(pwd + graphqlPath);
  // console.log(filePath);

  const graphqlContent = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});

  const schemaValueMap = getUnifiedSchemaFromGraphQl(graphqlContent);

  // console.log(schemaValueMap);

  switch (outputSchemaType) {
    case "json": {
      const jsonSchema = convertToJsonSchema(schemaValueMap);
      logSpreaded(jsonSchema);
      break;
    }
    case 'gql': {
      // const gqlTypeDef = transformToGql(unifiedSchema);

      // logSpreaded(gqlTypeDef);
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

transformSchema();