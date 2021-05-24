// given a natural number n you need to swap the first and last digits of the number n

function swapFirtsToLast(n) {
    n = n.toString()
    n = n.charAt(n.length - 1) + n.slice(1, n.length - 1) + n.charAt(0);
    return Number(n)
}

console.log(swapFirtsToLast(123456789));

// given a natural number n you need to add 1 to the start and to the end of the number n

function addOne(n) {
    n = n.toString()
    n = 1 + n + 1;
    return Number(n)
}

console.log(addOne(12345678));

// 332

function lagrange(n) {
    let x = 1
    let y = 1
    let z = 1
    let t = 1
    let temp
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let p = 1; p <= 9; p++) {
                    x = i
                    y = j
                    z = k
                    t = p
                    temp = Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2) + Math.pow(t, 2)
                    if (temp === n) {
                        return `result ${x}${y}${z}${t}`
                    }
                }
            }
        }
    }
    return false
}

console.log(lagrange(50));


function test(x, y, z, t) {
    return (x * x) + (y * y) + (z * z) + (t * t);
}

console.log(test(1, 2, 3, 6));
