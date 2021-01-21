// Function to convert KM to Meter

function kilometerToMeter (km){
    var meter =0;
    if (km < 0){
        meter = "Please make sure you do not insert negative number for kilometer. Thank you.";
    } else {
        meter = km*1000;
    }
    return meter;
}
// console used for testing
// console.log(kilometerToMeter(-5));


// Function to estimate total budget to buy different numbers of watches, phones and laptops

function budgetCalculator (numWatch, numPhone, numLaptop){
    var totalBudget = 0;

    if (numWatch <0 | numPhone <0 | numLaptop <0){
        totalBudget = "Please make sure you do not insert negative numbers. Thank you.";
    } else{
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        totalBudget = numWatch*watchPrice + numPhone*phonePrice + numLaptop*laptopPrice;
    }
    
    return totalBudget;
}
// console used for testing
// console.log(budgetCalculator(1, 1, 1));


// Function to estimate total hotel cost  
function hotelCost (numDays){
    var totalHotelCost = 0;
   if (numDays < 0){
    totalHotelCost = "Number of days cannot be negative, please try again. Thank you. :)";
    return totalHotelCost;
    } else if (numDays <= 10 && numDays >= 0){
        totalHotelCost = numDays * 100;
    } else {
        numDays = numDays - 10;
        totalHotelCost = (numDays*80)+ (10*100);
    }
    return totalHotelCost;
}
// console used for testing
console.log(hotelCost(11));


// Function to find the friend who has the longest name from an array of friends' names

function megaFriend (friends){
    var maxName = '';
    for (var i = 0; i<friends.length; i++){
        if(friends[i].length > maxName.length){
            maxName = friends[i];
        }
    }
    return maxName;
}
// console used for testing
console.log(megaFriend(['rahim-111', 'kareem', 'hashmal0']));

