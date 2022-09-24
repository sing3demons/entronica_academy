// //Array
const listManga = ['Onepiece', 'Naruto', 'HxH', 'Yaiba']
console.log(listManga)
console.log(listManga.length)
console.log(listManga[listManga.length - 1])

const listAnime = ['DragonBall', 'overLord', 2800 - 1388, listManga]
console.log(listAnime)

// //Object
const luffy = {
  firstName: 'Monkey D. Luffy',
  age: 19,
  bounty: '30,000,000',
  origin: 'East Blue',
  job: 'Captain Of Straw Hat Pirates',
  crew: [
    'Roronoa Zoro',
    'Nami',
    'Usopp',
    'Sanji',
    'Tony Tony Chopper',
    'Nico Robin',
    'Franky',
    'Brook',
    'Jinbe',
  ],
}
// console.log(luffy)

//Dot vs Bracket Notation ex1
// console.log(luffy.firstName)
// luffy.crew.map((e, i) => console.log(e))

// console.log(luffy['firstName'])
// console.log(luffy['crew'])
const nameKey = 'Name'
// console.log(luffy['first' + nameKey])

// //Dot vs Bracket Notation ex add property
// luffy.like = 'meat'
// luffy['power'] = 'gomu'
// luffy.name = 'sing'
// console.log(luffy)

//Dot vs Bracket Notation ex2
// console.log(luffy['first'] + nameKey)
// const inputKey = prompt('Choose firstName,age,bounty,job')
// if (luffy[inputKey]) {
//   console.log(luffy[inputKey])
// } else {
//   console.log('Wrong request! Choose firstName,age,bounty,job')
// }

// console.log('ก่อนเปลี่ยนข้อมูล')
// const zoro = luffy;
// console.log(zoro);
// zoro.firstName = 'Zoro';
// zoro.job = 'Swordsman';
// console.log('หลังเปลี่ยนข้อมูล')
// console.log(zoro);
// console.log(luffy);

//Spread Operator
// console.log('ก่อนเปลี่ยนข้อมูล')
// const zoro = { ...luffy }
// console.log(zoro)
// zoro.firstName = 'Zoro'
// zoro.job = 'Swordsman'
// console.log('หลังเปลี่ยนข้อมูล')
// console.log(zoro)
// console.log(luffy)

//Challenge
//"luffy has 9 crew, and his first crew is called zoro"
// console.log('luffy has 9 crew, and his first crew is called zoro')
console.log(
  `luffy has ${
    luffy.crew.length
  } crew, and his first crew is called ${luffy.crew[0]
    .split(' ')[1]
    .toLowerCase()}`
)
