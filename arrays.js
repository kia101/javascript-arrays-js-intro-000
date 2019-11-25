var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array,element){

var newarray = [element, ...array]

return newarray;

}

addElementToBeginningOfArray()


function destructivelyAddElementToBeginningOfArray(array, element){

var newarray = array
newarray.unshift(element)
return newarray;

}

function addElementToEndOfArray (array,element){

var newarray = [...array, element]

return newarray;

}

function accessElementInArray ( array, index){

var newarray = array[index]

return newarray

}
function destructivelyRemoveElementFromBeginningOfArray(array){

var newarray = array.shift();

return newarray;

}
function removeElementFromBeginningOfArray(array){

var array = array.slice(1)
return array;


}

function destructivelyAddElementToBeginningOfArray (array, element){

  var newarray= array.



}
