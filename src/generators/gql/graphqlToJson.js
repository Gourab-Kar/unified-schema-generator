import _ from 'lodash';

export const registerSchemas = (schemas) => {
  let schemaRegister = {};

  schemas.map((value, idx) => {
    if (!_.isEmpty(value)) {
      const schemaDelimiter_1 = value.indexOf("{");
      const schemaDelimiter_2 = value.indexOf("}");
      const schemaName = value.substring(0, schemaDelimiter_1).trim();
      const schemaDetails = value.substring(schemaDelimiter_1 + 1, schemaDelimiter_2).trim();

      schemaRegister[schemaName] = schemaDetails;
    }
  });

  return schemaRegister;
};

export const getUnifiedSchemaFromGraphQl = (graphQlContent="") => {
  const schemas = graphQlContent.split('type');
  return registerSchemas(schemas);
}