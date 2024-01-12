import {logSpreaded} from "../../utils/consoleLogger.js";

const parseField = ({unifiedSchema, fieldId, field}) => {
    // console.log("field: ", field);
    const {fieldType, fieldLabel} = field;
    const parsedField = {};

    switch (fieldType) {
        case 'Number': {
            // console.log(`found a number for: ${fieldLabel}`);
            // parsedField[fieldId] = 0;
            // break
            return 0;
        }
        case 'String': {
            // console.log(`found a string for: ${fieldLabel}`);
            // parsedField[fieldId] = '';
            // break;
            return '';
        }
        case 'refSchema': {
            const schema = unifiedSchema[fieldId];
            return parseSchema({
                unifiedSchema,
                schemaId: fieldId,
                schema
            })
        }
    }
}

const parseSchema = ({unifiedSchema, schemaId = '', schema = {}}) => {
    const {schemaDetails = {}} = schema;
    let fieldsObj = {};

    Object.keys(schemaDetails).map(field => {
        // console.log(field);

        fieldsObj[field] = parseField({
            unifiedSchema,
            fieldId: field,
            field: schemaDetails[field]
        });

    });

    return fieldsObj;
}

export const unifiedSchemaToJson = (unifiedSchema) => {
    // logSpreaded(unifiedSchema);

    Object.keys(unifiedSchema).map(key => {
        // console.log(key);

        const schemaObj = parseSchema({
            unifiedSchema,
            schemaId: key,
            schema: unifiedSchema[key]
        });

        console.log("SchemaObj: ", schemaObj);
    })
}