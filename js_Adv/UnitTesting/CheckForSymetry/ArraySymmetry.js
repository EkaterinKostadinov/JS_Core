function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    var reversed = arr.slice(0).reverse(); // Clone and reverse
    var equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

module.exports = isSymmetric;