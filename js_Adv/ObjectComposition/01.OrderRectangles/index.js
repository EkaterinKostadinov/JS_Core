function solution(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr[i] = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function () {
                return this.width * this.height;
            },
            compareTo(otherRect) {
                let diff = otherRect.area() - this.area();
                if (diff === 0) {
                    return otherRect.width - this.width;
                } else {
                    return diff;
                }
            }
        }
    }
    return arr.sort((a, b) => a.compareTo(b));
}

console.log(solution([[10,5], [3,20], [5,12]]));