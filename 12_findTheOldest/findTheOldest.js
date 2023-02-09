const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        let age;

        // if still alive, use current year to find age
        if (!currentPerson.yearOfDeath){
            age = (new Date()).getFullYear() - currentPerson.yearOfBirth;
        } else {
            age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }
        
        let oldestAge; 
        if (!oldestPerson.yearOfDeath){
            oldestAge = (new Date()).getFullYear() - oldestPerson.yearOfBirth;
        } else {
            oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        }
        
        if(age > oldestAge){
            oldestPerson = currentPerson;
        }

        return oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
