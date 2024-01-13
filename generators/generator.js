import {getJSONDefaultFieldVals} from "./json/jsonFieldSpecifications.js";

export const parseEachField = ({
    unifiedSchema,
    outputSchemaType,
    schemaId,
    schema,
    fieldId,
    fieldDetails
}) => {
    // console.log("fieldDetails: ", fieldDetails);

    switch (outputSchemaType){
        case 'json': {
            return getJSONDefaultFieldVals({
                unifiedSchema,
                outputSchemaType,
                fieldId,
                fieldDetails,
                parseEachSchema
            });
        }
    }
}

export const parseEachSchema = ({
    unifiedSchema,
    outputSchemaType,
    schemaId,
    schema
}) => {
    const {schemaDetails} = schema;
    let eachSchema = {};

    // console.log("schemaDetails: ", schemaDetails);

    Object.keys(schemaDetails).map(fieldId => {
        // console.log("field: ", fieldId);
        const fieldValue = parseEachField({
            unifiedSchema,
            outputSchemaType,
            schemaId,
            schema,
            fieldId,
            fieldDetails: schemaDetails[fieldId]
        });

        eachSchema[fieldId] = fieldValue;
    });

    console.log("eachSchema: ", eachSchema);

    return eachSchema;
};

export const parseUnifiedSchema = ({
    unifiedSchema,
    outputSchemaType
}) => {
    let resultSchema = {};
    Object.keys(unifiedSchema).map(schemaId => {
        //console.log("schemaId: ", schemaId);
        const schemaDetails = parseEachSchema({
            unifiedSchema,
            outputSchemaType,
            schemaId,
            schema: unifiedSchema[schemaId]
        });

        resultSchema[schemaId] = schemaDetails;
    });

    return resultSchema;
}