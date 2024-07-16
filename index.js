const readlineSync = require(`readline-sync`);
const chalk = require('chalk');
const getDeviceCode = require('./function/deviceCode');
const regisManual = require('./src/regisManual');
const { textBanner, mainFeature } = require('./function/textValue');


(async () => {
    console.log(textBanner());

    console.log(mainFeature());

    const inputPilihan = readlineSync.questionInt(`[?] Masukkan Pilihan Kamu : `)

    if (inputPilihan === 1) {
        console.log(`[!] ${chalk.yellow(`Kamu Memilih Feature 1`)}`)

        const jumlahCreateAccount = readlineSync.questionInt(`[?] Mau Berapa Akun : `);

        for (let i = 1; i <= jumlahCreateAccount; i++) {

            console.log(`[!] ${chalk.yellow(`CREATE ACCOUNT KE - ${i}`)}`)

            const deviceCode = await getDeviceCode();

            const inputNumber = readlineSync.question(`[?] Masukkan Nomer HP : `)


            const resultRegisManual = await regisManual(inputNumber, deviceCode)

            console.log()
        }
    }


})();