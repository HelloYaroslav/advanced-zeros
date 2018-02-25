module.exports = function getZerosCount(number, base) {
    // your implementation
    var NumOfzero = number;
    var cloneofBase = base;
    var pow = 0;
    var lol = 0;
    var k = 0;




    for (var i = 2; i <= base; i++) {
        if (cloneofBase % i === 0) {
            pow = 0;
            while (cloneofBase % i === 0) {
                pow++
                cloneofBase = ~~(cloneofBase / i)
            }
            lol = 0
            k = number
            while (k / i > 0) {
                lol = lol + ~~(k / i)
                k = ~~(k / i)
            }
            NumOfzero = Math.min(NumOfzero, (lol / pow))
        }
    }
    console.log(NumOfzero);
    return NumOfzero
}