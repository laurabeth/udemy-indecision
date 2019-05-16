//arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,1));

//this keyword - no longer bound
const user = {
    name: "Laura",
    cities: ["Queens, NY", "Charlotte, NC", "Boulder, CO"],
    printPlacesLived () {
        const cityMessages = 
            this.cities.map(
                (city) => this.name + " has lived in " + city + "."
            );
        return cityMessages;
    }
};

user.printPlacesLived().forEach(message => {
    console.log(message);
});

const multiplier = {
    numbers: [5, 2, 19, 7, 77, 0],
    multiplyBy: 3,
    multiply () {
        const results = 
            this.numbers.map(
                (number) => this.multiplyBy * number
            );
        return results;
    }
}

multiplier.multiply().forEach(result => {
    console.log(result);
})