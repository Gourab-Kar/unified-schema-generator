import _ from 'lodash';
import {config} from "./config.js";
import unifiedSchema from "./input/unifiedSchema.json" assert { type: "json" };
import {logNotify, logSpreaded} from "./utils/consoleLogger.js";
import {parseUnifiedSchema} from "./generators/generator.js";

export const transformSchema = () => {

    const outputSchemaType = _.get(config, "outputSchemaType", "");

    logNotify(`outputSchemaType: ${outputSchemaType}`);

    const outputSchema = parseUnifiedSchema({unifiedSchema, outputSchemaType});

    logSpreaded(outputSchema);
};

const resultantSchema = transformSchema();

