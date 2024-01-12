import _ from 'lodash';
import {config} from "./config.js";
import unifiedSchema from "./input/unifiedSchema.json" assert { type: "json" };
import {unifiedSchemaToJson} from "./generators/json/jsonGenerator.js";
import {logInfo} from "./utils/consoleLogger.js";

export const transformSchema = () => {

    let outputSchema;
    const outputSchemaType = _.get(config, "outputSchemaType", "");

    logInfo(`outputSchemaType: ${outputSchemaType}`);

    switch (outputSchemaType) {
        case "json": {
            outputSchema = unifiedSchemaToJson(unifiedSchema);
            break;
        }
        case "graphql": {
            break;
        }
        case "mongoose": {
            break;
        }
    }

};

const resultantSchema = transformSchema();

