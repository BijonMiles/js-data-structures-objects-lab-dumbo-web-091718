// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  // let allDrivers = {};
  // allDrivers = drive

  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key) {

  // const copyOfDriver = driver.slice();
  let newdriver;
  newdriver = Object.assign({}, driver, key);

  delete newdriver[key];

  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  let newdriver = deleteFromDriverByKey(driver, key)
  delete driver[key];

  return newdriver;
}
