const reverse = (string) => {
    return string
    .split('')
    .reverse()
    .join('')
}

const average = (array) => {
    const reducer = (sum, item) => {
        return sum + item
    }
    // return array.reduce(reducer, 0) / array.length
    // 修复空数组情况
    return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length
}

module.exports = {
    reverse,
    average,
}