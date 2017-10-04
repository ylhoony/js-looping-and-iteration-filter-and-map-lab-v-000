// Code your solution here:

function driversWithRevenueOver(collection, num) {
  return collection.filter(function(driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(collection, num) {
  const newCollection = collection.filter(function(driver) {
    return driver.revenue > num;
  });
  return newCollection.map(function(list) {
    return list.name;
  });
}

function exactMatch(collection, obj) {
  return collection.filter(function(driver) {
    return driver[Object.keys(obj)] === obj[Object.keys(obj)];
  });
}
