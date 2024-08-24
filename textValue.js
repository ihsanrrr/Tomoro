const chalk = require('chalk');

const textBanner = () => {
    const valueText = `
▀█▀ █▀█ █▀▄▀█ █▀█ █▀█ █▀█   █▀▀ █▀█ █▀▀ █▀▀ █▀▀ █▀▀
░█░ █▄█ █░▀░█ █▄█ █▀▄ █▄█   █▄▄ █▄█ █▀░ █▀░ ██▄ ██▄
                                 ${chalk.green(`Create By ITwoCode`)}
`
    return valueText
}

const mainFeature = () => {
    const value = `[!] ${chalk.yellow(`Silahkan Pilih Feature Dibawah!`)}
  [1] Create Dan Login Account Tomoro Coffe [ ${chalk.yellow(`Manual`)} ]
    `
    return value;
}

const textVoucher = (index, voucherName, descVoucher, typeVoucher, startTimeVoucher, endTimeVoucher) => {
    const value = `[!] ${chalk.yellow(`List Voucher Ke-${index + 1}`)}
    Nama Voucher      : ${chalk.green(voucherName)}
    Deskripsi Voucher : ${chalk.green(descVoucher)}
    Type Voucher      : ${chalk.green(typeVoucher)}
    Start Voucher     : ${chalk.green(startTimeVoucher)}
    End Voucher       : ${chalk.green(endTimeVoucher)}
    `
    return value
}

module.exports = {
    textVoucher,
    textBanner,
    mainFeature
}