const ages = [10,12,14];
const ages2 = [11,13,15];

const allAges = ages.concat(ages2);
console.log(allAges);

const allAges2 = [...ages,...ages2];
console.log(allAges2);