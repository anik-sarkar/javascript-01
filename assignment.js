function feetToMile(feet){
    if (feet>0) {
        var mile = feet / 5280;
        return mile;
    }
    else if(feet<0){
        console.log("distance cannt be negative");
    }
    
}
var convert= feetToMile(-3);
console.log(convert);




function woodCalculator(numChair, numTable, numBed) {
    if(numChair  >0 && numTable >0 && numBed >0 ) {
        var totalWoods = numChair * 1 + numTable  * 3 + numBed * 5;
        console.log(totalWoods);
        
    }
    else if(numChair < 0 || numTable <0 || numBed <0 ){
        var totalWoods = "input only positive value";
        console.log(totalWoods);
    }
    else if(numChair =="" || numTable =="" || numBed =="" ){
    var totalWoods = "input numbers only"
    console.log(totalWoods);
    }
}
woodCalculator("",10,10);







function brickCalculator(floorNum) {
    if (floorNum <= 10 && floorNum > 0 ) {
        var bricks = floorNum * 15 * 1000;
        return bricks;
    }
    else if (floorNum > 10 && floorNum <= 20){
        var bricks = (floorNum - 10) * 12 *1000 + 10 * 15 * 1000;
        return bricks;
    }
    else if (floorNum > 20){
        var bricks = 10 *15 * 1000 + 10 * 12 * 1000 + (floorNum - 20) * 10 * 1000;
        return bricks;
    }
    else if (floorNum <0){
        var bricks = "Floor no cannt be negative, pls insert a positive value";
        return bricks;
    }

}
var totalbricks = brickCalculator(-10);
console.log(totalbricks);




function tinyFriend(friends) {
    var smallFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if(friends[i].length < smallFriend.length){
            smallFriend = friends[i];
        }
    }
    return smallFriend;
}
var chottoBondhu = tinyFriend([ "Atikur", "Toma", "Rajon", "Shovon", "Tausif"])
console.log(chottoBondhu);