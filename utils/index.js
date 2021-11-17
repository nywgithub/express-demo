//异步函数promise化
function promisify(fn) {
    return function () {
        console.log(fn)
        var args = Array.prototype.slice.call(arguments);
        return new Promise(function (resolve) {
            args.push(function (result) {
                console.log(result)
                resolve(result);
            });
            fn.apply(null, args);

        })
    }
}
module.exports = promisify