

// MAP metodi - yangi massiv qaytaradi eski massivni qiymatinio'zgartirib

// const car = ['MErc', 'BmW', 'RolCE RoyCE']
// const arr = car.map((item) => item.toLowerCase())
// console.log(arr)

// FILTER metodi - yangi massiv qaytaradi filter qilib

// const car = ['mercedes benz', 'bmw', 'audi', 'rollce royce']
// const arr = car.filter(item => item.length < 5)
// console.log(arr)

// SOME/EVERY metodi - boolean qiymat qaytaradi

// const arr = [1, 'samar', true]
// console.log(arr.some(item => typeof(item) === 'number'))

// const arr = [1, 'samar', true]
// console.log(arr.every(item => typeof(item) === 'number'))

// REDUCE metodi - barcha massivlarimizani bitta ko'rinishga keltirib beradi ya'ni bitta qiymat qaytaradi

const arr = [4, 32, 1, 3]
const res = arr.reduce((sum, current) => sum + current)
console.log(res)

