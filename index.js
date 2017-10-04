// Code your solution here:

function driversWithRevenueOver(collection, num) {
  return collection.filter(function(driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(collection, num) {
  const newCollection = [];
  newCollection.push(collection.filter(function(driver) {
    return driver.revenue > num;
  }));
  return newCollection.map(function(list) {
    return list.name;
  })
}
