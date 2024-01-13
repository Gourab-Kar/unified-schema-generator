
export const getJSONDefaultFieldVals = ({
    unifiedSchema,
    outputSchemaType,
    fieldId,
    fieldDetails,
    parseEachSchema
}) => {
    const {fieldType, fieldLabel} = fieldDetails;

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
            return parseEachSchema({
                unifiedSchema,
                outputSchemaType,
                schemaId: fieldId,
                schema
            })
        }
    }
}