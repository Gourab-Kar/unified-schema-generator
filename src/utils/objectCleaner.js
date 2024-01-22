import _ from 'lodash';

export const cleanObjects = ({schema, cleanUpObjects}) => {
  const shadowSchema = _.cloneDeep(schema);

  cleanUpObjects.map(value => {
    delete shadowSchema[value];
  });

  return shadowSchema;
};