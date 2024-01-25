
var object = { 'a' : { 'b' : 2}};
var object2 = { "a": 1, "b": 2, "c": 1 };

var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

var testArr = [1,2,3,4,5,6,7,8,9];

var compactArr = [0,1,NaN,2,undefined,'',,4,null,false,false];

  /*var predicate = function(person) { return person.hero === false; }
  var prericateTwo = function(element,index,array) { return array[index] < array[element] };*/


var _ = {
    clamp(number,lower,upper) {
        let lowerClampedValue = Math.max(number,lower);
        let clampedValue = Math.min(lowerClampedValue,upper);
        return clampedValue;
    },
    inRange(number,start,end) {
      let endVal = end === undefined ? start : end;
      let startVal = end === undefined ? 0 : start;
      if(endVal < startVal) {
        let temp = startVal;
        startVal = endVal;
        endVal = temp;
      }
      return (number >= endVal || number < startVal) ? false : true;
    },
    words(value) {
     return value.split(/[ ,]+/);
    },
    pad(string,length) {
    let word = [];
    for(chars of string) {
        word.push(chars);
    }
    if(length > word.length) {
        let difference = Math.floor((length - word.length) / 2);
        for(let i = 0; i < difference; i++) {
            word.unshift(' ');
            word.push(' ');
        }
        if(((length - word.length) % 2) != 0) {
            let extraSpaces = (length - word.length) % 2;
            for(let j = 0; j < extraSpaces; j++) {
                word.push(' ');
            }
        }
    }
    return word.join('');
},
    has(object,key) {
    if(key in object) {
        return true;
    }else {
        return false;
    }
},
    invert(object) {
    let newObj = {};
    for(keys in object) {
        newObj[object[keys]] = keys;
    }
    return newObj;
    },
    findKey(object,predicate) {
        for(key in object) {
            let value = object[key];
            let predicateValue = predicate(value);
            if(predicateValue === true) {
                return key;
            }
        }
        return undefined;
    },
    drop(array,number) {
        let newArr = array.slice();
        if(number < 1 || number === undefined) {
          newArr.shift(1);
        }else {
        for(let i = 0; i < number; i++) {
            newArr.shift(i);
        }
    }
    return newArr;
    },
    dropWhile(array,predicate) {
        newArray = array.slice();
        for(element of array) {
            if(predicate(array[element],element,array) === false) {
                return this.drop(newArray,element);
            }
        }
    },
    chunk(array,size) {
        size === undefined ? 1 : size;
        let finalArrays = [];
        let arrayFactory = () => {
            let oddOrEven = array.length % size === 0 ? array.length / size : (array.length - (Math.ceil(array.length % size))) / size;
            let counter = 0;
            let i = 0;
            while(i < oddOrEven) {
                finalArrays.push(new Array());
                i++;
            }
            for(let i = 0; i < finalArrays.length; i++) {
                for(let j = 0; j < size; j++) {
                    finalArrays[i].push(array[counter]);
                    counter++;
                }
            }
        }
        if(array.length % size === 0) {
            arrayFactory();
        }else {
            let extraElements = array.length % size;
            arrayFactory();
            finalArrays.push(new Array());
            let value = finalArrays.length;
            for(let i = 0; i < extraElements; i++) {
                finalArrays[value-1].push(array[array.length-1]);
                value--;
            }
        }
        return finalArrays;
        },
        compact(array) {
        return array.filter(element => { if(element) return element});
        },
        concat(array,values) {
        }
};

console.log(_.compact(compactArr));


module.exports = _;