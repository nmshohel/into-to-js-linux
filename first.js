
//---------------------problem-1--------------------
function seerToMon(seer){ //Function Declaration
//----------------check input type------------
if(typeof seer != 'number')
{
return "Please enter a number";
}
//----------------check positive number-----------
if(seer<0)
{
return "Please enter a positive number";
}
const mon=seer/40;
return mon;
}
const getMon =seerToMon(80); //Function calling
console.log(getMon);
//----------------------------problem-2---------------------------------
function totalSales(shirtQuantity, pantsquantity, shoeQuantity){ // Function Declaration
// ----------------check input type-------------------------
if((typeof shirtQuantity != 'number') || (typeof pantsquantity != 'number') || (typeof shoeQuantity != 'number'))
{
return "Please enter a number";
}
//-------------Check positive number---------
if(shirtQuantity<0 || pantsquantity<0 || shoeQuantity<0)
{
return "Please enter a positive number";
}
//----------------calculation---------------------
const TotalShirtSales=shirtQuantity*100;
const TotalPantSales=pantsquantity*200;
const TotalShoeSales=shoeQuantity*500;
const TotalOfAllSales=TotalShirtSales+TotalPantSales+TotalShoeSales;
return TotalOfAllSales;
}
const sales=totalSales(1,1,1); // Function calling
console.log(sales);
//-----------------------problem-3---------------------------------
function deliveryCost(noOfItem){ // Function Declaration
// ----------------check input type-------------------------
if(typeof noOfItem != "number")
{
return "Please enter a number";
}
//-------------Check positive number---------
if(noOfItem<0)
{
return "Please enter a positive number";
}
if(noOfItem<=100)
{
const TotalDeleveryCost=noOfItem*100;
return TotalDeleveryCost;
}
else if(noOfItem<=200)
{
const CostOfFirstHundreed=100*100;
const CostOfRestItem=(noOfItem-100)*80;
const TotalDeleveryCost=CostOfFirstHundreed+CostOfRestItem;
return TotalDeleveryCost;
}
else
{
const costOfFirstHundred=100*100;
const costOfSecondHundred=100*80;
const costOfRestItem=(noOfItem-200)*50;
const TotalDeleveryCost=costOfFirstHundred+costOfSecondHundred+costOfRestItem;
return TotalDeleveryCost;
}
}
totalCost=deliveryCost(250); //Function Calling
console.log(totalCost);
//---------------------------problem-4---------------------
function perfectFriend(friendNames){ //Function Declaration
// ----------------check input type-------------------------
if(typeof friendNames != "object")
{
return "Please enter array of object type data";
}
for (friend of friendNames){
if(friend.length == 5){
break;
}
}
if(friend.length == 5){
return friend;
}
else
{
return "There is no friend with the number five letter";
}
}
const myFriend=['robin', 'shohel', 'nur', 'mohammad'];
const myPerfectFriend=perfectFriend(myFriend); //Function Calling
console.log(myPerfectFriend);