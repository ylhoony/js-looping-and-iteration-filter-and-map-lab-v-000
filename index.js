// Code your solution here:
 
function driversWithRevenueOver(collection, num) {
  return collection.filter(function(driver) {
    return driver.revenue > num;
  });
}