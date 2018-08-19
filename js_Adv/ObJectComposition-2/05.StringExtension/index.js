(function solve() {
    
    String.prototype.ensureStart = function (str) {
        let pattern = new RegExp(`${[str]}+`);
        if (pattern.test(this)) {
            return str;
        } else {
            return str + this;
        }
    }

    String.prototype.ensureEnd = function (str) {
        let pattern = new RegExp(`${[str]}+`);
        if (pattern.test(this)) {
            return str;
        } else {
            return this + str;
        }
    }
    
    String.prototype.empty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
})();

console.log('asd'.ensureEnd('asd'));