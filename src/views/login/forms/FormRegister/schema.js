//#region Imports

import addressSchema from 'validations/schemas/address';
import authenticationSchema from 'validations/schemas/authentication';
import clientSchema from 'validations/schemas/client';

//#endregion

const registerSchema = authenticationSchema.concat(addressSchema).concat(clientSchema);

export default registerSchema;
