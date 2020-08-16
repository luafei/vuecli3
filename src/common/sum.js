function sum(a, b) {
    return a + b;
}
module.exports = sum;

function p1() {
    return new Promise((resolve, reject)=>{
        resolve({data: 1})
    })
}

function p2() {
    return new Promise((resolve, reject)=>{
        resolve({data: 2})
    })
}


async function test() {
    console.log('t1');
    const t1 = await p1();
    console.log('t2')
    const t2 = await p2();
    console.log('p1 + p2', t1, t2)
}
setTimeout(()=>{
    console.log('timeout 0')
},0)
test()
console.log('ok1')
console.log('ok2')


// t1 ok1 t2 p1+p2

