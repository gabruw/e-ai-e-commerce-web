//#region Imports

import CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';
import LOCAL_STORAGE from 'utils/constants/types/local-storage';

//#endregion

const secureStorage = new SecureStorage(localStorage, {
    hash: (key) => {
        key = CryptoJS.SHA256(key, LOCAL_STORAGE.SECURITY_KEY);

        return key.toString();
    },
    encrypt: (data) => {
        data = CryptoJS.AES.encrypt(data, LOCAL_STORAGE.SECURITY_KEY);
        data = data.toString();

        return data;
    },
    decrypt: (data) => {
        data = CryptoJS.AES.decrypt(data, LOCAL_STORAGE.SECURITY_KEY);
        data = data.toString(CryptoJS.enc.Utf8);

        return data;
    }
});

export default secureStorage;
