import * as fs from "fs";
import path, {dirname} from "path";
import {logSpreaded} from "./utils/consoleLogger.js";
import {config} from "../config.js";
import {getUnifiedSchemaFromGraphQl} from "./generators/gql/graphqlToJson.js";
import {getTransformedSchema} from "./generators/transformer.js";

export const transformSchema = () => {
  const {outputSchemaType = 'json', cleanUpObjects = []} = config;
  const graphqlPath = "/src/files/input/unifiedSchema.graphql";
  const pwd = dirname("./");

  const filePath = path.resolve(pwd + graphqlPath);
  // console.log(filePath);

  const graphqlContent = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});

  const schemaValueMap = getUnifiedSchemaFromGraphQl(graphqlContent);
  const jsonSchema = getTransformedSchema({
    schemaMap: schemaValueMap,
    outputSchemaType
  });
  logSpreaded(jsonSchema);
};

transformSchema();