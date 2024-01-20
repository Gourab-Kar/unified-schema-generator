import _ from 'lodash';

const unifiedSchema = {
  "user": {
    "schemaName": "User",
    "schemaDetails": {
      "userId": {
        "fieldType": "Number",
        "fieldId": "userId",
        "fieldLabel": "User Id"
      },
      "name": {
        "fieldType": "String",
        "fieldId": "name",
        "fieldLabel": "Name"
      },
      "address": {
        "fieldType": "refSchema",
        "ref": "address",
        "fieldId": "address",
        "fieldLabel": "Address"
      }
    }
  },
  "address": {
    "schemaName": "Address",
    "schemaDetails": {
      "flat": {
        "fieldType": "String",
        "fieldId": "flat",
        "fieldLabel": "Flat"
      },
      "street": {
        "fieldType": "String",
        "fieldId": "street",
        "fieldLabel": "Street"
      },
      "locality": {
        "fieldType": "String",
        "fieldId": "locality",
        "fieldLabel": "Locality"
      },
      "city": {
        "fieldType": "String",
        "fieldId": "city",
        "fieldLabel": "City"
      },
      "state": {
        "fieldType": "String",
        "fieldId": "state",
        "fieldLabel": "State"
      },
      "pinCode": {
        "fieldType": "Number",
        "fieldId": "pincode",
        "fieldLabel": "Pincode"
      }
    }
  }
};

export const getUnifiedSchema = () => _.cloneDeep(unifiedSchema);