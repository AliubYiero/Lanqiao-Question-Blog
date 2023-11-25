
/**
 * @param {number[]} numberList 需要统计数字数组
 * @return {{[num: string]: string}} 返回数字数组中每个数字出现的占比(百分比)
 */
const calc = (numberList) => {
    const result = {}

    numberList.forEach((item) => {
        result[item] = result[item] ? result[item] + 1 : 1;
    });

    const values = Object.values(result);
    const sum = values.reduce((total, current) => total += current, 0);
    for (let resultKey in result) {
        result[resultKey] = Math.round(result[resultKey] / sum * 100) + '%'
    }

    return result;
}

function generate(min, max, getIntMethod) {
    let getInt = Math.floor;
    switch (getIntMethod) {
        case 'floor':
            getInt = Math.floor;
            break;
        case 'ceil':
            getInt = Math.ceil;
            break;
        case 'round':
            getInt = Math.round;
            break;
    }

    const floorList = [];
    for (let i = 0; i < 100000; i++) {
        floorList.push(getInt((max - min) * Math.random()) + min)
    }
    return floorList;
}

console.log('floor: ',calc(generate(1, 5, 'floor')));
console.log('round: ',calc(generate(1, 5, 'round')));
console.log('ceil: ',calc(generate(1, 5, 'ceil')));

const randomInt = (min, max) => {
    return Math.floor((max - min + 1) * Math.random()) + min;
}
const floorList = [];

for (let i = 0; i < 100000; i++) {
    floorList.push(randomInt(1, 9))
}

console.log(calc(floorList));