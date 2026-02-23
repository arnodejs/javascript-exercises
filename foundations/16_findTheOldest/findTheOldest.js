const findTheOldest = function (people) {
  return people
    .map((person) => {
      const age = person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth;
      return {
        ...person,
        age,
      };
    })
    .sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
