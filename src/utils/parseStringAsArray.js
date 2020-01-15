module.exports = function parseStringAsArray(stringAsArray) {
    return stringAsArray.split(',').map(sa => sa.trim());
}