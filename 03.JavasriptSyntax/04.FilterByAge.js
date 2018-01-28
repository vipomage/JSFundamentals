function filterAge(minAge,firstPName,firstPAge,secondPName,secondPAge){

    let firstPerson = {
        name:firstPName,
        age:firstPAge
    };
    let secondPerson = {
        name:secondPName,
        age:secondPAge
    };

    if (firstPerson.age >= minAge) {
        console.log( firstPerson );
    }if(secondPerson.age >= minAge){
        console.log( secondPerson );
    }
}



//console.log(filterAge(12,'Ivan',15,'Asen',9));
console.log(filterAge(19,'Pesho',119,'Gosho',20));
//console.log(filterAge(16,'Hristofor',99,'Asen',16));
//console.log(filterAge(20,'Niki',19,'Rosen',1));