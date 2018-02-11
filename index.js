var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  object['key'] = 'value';
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var object = new Object();
  object.prop = '1';
  object.prop2 = '2';
  return object;
}

function deleteFromObjectByKey(object, key){
  var object = new Object();
  object.key = '1';
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  var object = new Object();
  object.key = '1';
  delete object.key;
  return object;
}
