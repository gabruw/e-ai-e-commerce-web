//#region Imports

import sleep from 'utils/functions/sleep';

//#endregion

describe('sleep', () => {
    test('Verifica se a função está acertiva', async () => {
        const param = 100;
        let result = false;

        try {
            await sleep(param);
            result = true;
        } catch (error) {
            result = false;
        }

        expect(result).toEqual(true);
    });

    test('Verifica se a função está acertiva sem parametros', async () => {
        let result = false;

        try {
            await sleep();
            result = true;
        } catch (error) {
            result = false;
        }

        expect(result).toEqual(true);
    });

    test('Verifica se a função está acertiva com o parametro undefined', async () => {
        let result = false;

        try {
            await sleep(undefined);
            result = true;
        } catch (error) {
            result = false;
        }

        expect(result).toEqual(true);
    });
});
