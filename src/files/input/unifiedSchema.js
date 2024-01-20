import _ from 'lodash';

const unifiedSchema = {
  user: {
    schemaId: "user",
    schemaName: "User",
    schemaType: "Object",
    schemaDetails: {
      userId: {
        fieldType: "Number",
        fieldId: "userId",
        fieldLabel: "User Id"
      },
      name: {
        fieldType: "String",
        fieldId: "name",
        fieldLabel: "Name"
      },
      address: {
        fieldType: "refSchema",
        refType: "Object",
        ref: "address",
        fieldId: "address",
        fieldLabel: "Address"
      },
      tags: {
        fieldType: "refSchema",
        refType: "Array",
        ref: "tags",
        fieldId: "tags",
        fieldLabel: "Tags"
      }
    }
  },
  address: {
    schemaId: "address",
    schemaName: "Address",
    schemaType: "Object",
    schemaDetails: {
      flat: {
        fieldType: "String",
        fieldId: "flat",
        fieldLabel: "Flat"
      },
      street: {
        fieldType: "String",
        fieldId: "street",
        fieldLabel: "Street"
      },
      locality: {
        fieldType: "String",
        fieldId: "locality",
        fieldLabel: "Locality"
      },
      city: {
        fieldType: "String",
        fieldId: "city",
        fieldLabel: "City"
      },
      state: {
        fieldType: "String",
        fieldId: "state",
        fieldLabel: "State"
      },
      pinCode: {
        fieldType: "Number",
        fieldId: "pincode",
        fieldLabel: "Pincode"
      }
    }
  },
  tags: {
    schemaId: "tags",
    schemaName: "Tags",
    schemaType: "Array",
    fieldType: "String",
    schemaDetails: {
      fieldType: "String"
    }
  }
}

export const getUnifiedSchema = () => _.cloneDeep(unifiedSchema);