// Git repo: https://github.com/farukhrana14/JS-learning

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

// console.log(kilometerToMeter(0.5));


// Function to estimate total budget to buy different numbers of watches, phones and laptops

function budgetCalculator (numWatch, numPhone, numLaptop){
    var totalBudget = 0;
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    if (numWatch <0 | numPhone <0 | numLaptop <0 | numWatch %1 !==0 | numPhone %1 !==0 | numLaptop %1 !==0){
        totalBudget = "Please make sure you do not insert negative numbers or fractions. Thank you.";
    } else{
        
        totalBudget = numWatch*watchPrice + numPhone*phonePrice + numLaptop*laptopPrice;
    }
    
    return totalBudget;
}
// console.log(budgetCalculator(1, 0, 5));


// Function to estimate total hotel cost  
function hotelCost(numDays) {
    var rate1 = 100;
    var rate2 = 80;
    var rate3 = 50;

    var cost1 = 0;
    var cost2 = 0;
    var cost3 = 0;
    var totalHotelCost = 0;

    if (numDays >= 20 && numDays % 1 == 0) {
        cost3 = rate3 * (numDays - 20)
        cost2 = rate2 * (10);
        cost1 = rate1 * (10);
        totalHotelCost = cost1 + cost2 + cost3;
        return totalHotelCost;

    } else if (numDays >= 10 && numDays < 20 && numDays % 1 == 0) {
        cost2 = rate2 * (numDays - 10);
        cost1 = rate1 * (10);
        totalHotelCost = cost1 + cost2 + cost3;
        return totalHotelCost;

    } else if (numDays >= 1 && numDays < 10 && numDays % 1 == 0) {
        cost1 = rate1 * (numDays);
        totalHotelCost = cost1 + cost2 + cost3;
        return totalHotelCost;

    } else if (numDays <= 0 | numDays % 1 !== 0) {
        totalHotelCost = "Please check number of days should be more than zero and non fraction.";
        return totalHotelCost;
    }
}
// console.log(hotelCost(24));


// Function to find the friend who has the longest name from an array of friends' names

function megaFriend (friends){
    var maxName = '';
    for (var i = 0; i<friends.length; i++){
        if(friends[i].length > maxName.length){
            maxName = friends[i];
            
        }
    }
    // If maxName gets No name inside the array, warning 

    if (maxName == 0){
        maxName = "No name given. Please insert names inside the function.";
    }
    return maxName;
}

// console.log(megaFriend([]));