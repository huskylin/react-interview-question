/** 
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', 
profession: xxx}
lastName, note can be empty, customerID can only be a set of digital 
numbers.
profession can only have student, freelancer, productOwner, 
engineer or systemAnalytics.
**/
/** 
Q1. Please follow the principle (firstName + lastName + customerID) 
to sort this array and print it out.
**/
const user = [
  {
    firstName: 'xxx',
    lastName: 'xxx',
    customerID: 'xxx',
    note: 'xxx',
    profession: 'student',
  },
  {
    firstName: 'ooo',
    lastName: 'ooo',
    customerID: 'ooo',
    note: 'ooo',
    profession: 'freelancer',
  },
  {
    firstName: 'aaa',
    lastName: 'aaa',
    customerID: 'aaa',
    note: 'aaa',
    profession: 'engineer',
  },
  {
    firstName: 'ccc',
    lastName: 'ccc',
    customerID: 'ccc',
    note: 'ccc',
    profession: 'systemAnalytics',
  },
];
function sortUserName(user) {
  return user.sort((a, b) => {
    const keyA = `${a.firstName}${a.lastName}${a.customerID}`;
    const keyB = `${b.firstName}${b.lastName}${b.customerID}`;
    return keyA.localeCompare(keyB);
  });
}
console.log('Q1', sortUserName(user));

/** 
Q2. Please sort by profession to follow the principle. 
(systemAnalytics > engineer > productOwner > freelancer > 
student)
**/
function sortByType(user) {
  const principle = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };
  return user.sort((a, b) => {
    return principle[a.profession] - principle[b.profession];
  });
}

console.log('Q2', sortByType(user));
