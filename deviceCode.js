//!Function Random Angka
const randstr = length => {
    let text = "";
    const possible = "1234567890";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

const generateDeviceCode = async () => {
    const part1 = randstr(4);
    const part2 = randstr(7);
    return `c${part1}eae${part2}a`;
};


module.exports = generateDeviceCode;