import HashMap from "./classes/HashMap.js";
import HashSet from "./classes/HashSet.js";

const test = new HashMap();
const testSet = new HashSet();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test);

test.set("apple", "green");
test.set("banana", "green");
test.set("carrot", "green");
console.log(test);

test.set("moon", "silver");
console.log(test);

test.set("dog", "black");
test.set("elephant", "pink");
test.set("frog", "red");
console.log(test);

console.log(test.get("apple")); // "green"
console.log(test.has("banana")); // true
console.log(test.remove("carrot")); // true
console.log(test.keys()); // ["apple", "banana", "dog", "elephant", "frog", "grape", "hat", "ice cream", "jacket", "kite", "lion", "moon"]
console.log(test.values()); // ["green", "yellow", "black", "pink", "red", "purple", "black", "white", "blue", "pink", "golden", "silver"]
console.log(test.entries()); // [["apple", "green"], ["banana", "yellow"], ["dog", "black"], ["elephant", "pink"], ["frog", "red"], ["grape", "purple"], ["hat", "black"], ["ice cream", "white"], ["jacket", "blue"], ["kite", "pink"], ["lion", "golden"], ["moon", "silver"]]
console.log(test.clear()); // true
console.log(test.length()); // 0

testSet.set("apple");
testSet.set("banana");
testSet.set("carrot");
testSet.set("dog");
testSet.set("elephant");
testSet.set("frog");
testSet.set("grape");
testSet.set("hat");
testSet.set("ice cream");
testSet.set("jacket");
testSet.set("kite");
testSet.set("lion");
console.log(testSet);

console.log(testSet.get("apple")); // true
console.log(testSet.has("banana")); // true
console.log(testSet.remove("carrot")); // true
console.log(testSet.keys()); // ["apple", "banana", "dog", "elephant", "frog", "grape", "hat", "ice cream", "jacket", "kite", "lion"]
console.log(testSet.entries()); // [["apple", "apple"], ["banana", "banana"], ["dog", "dog"], ["elephant", "elephant"], ["frog", "frog"], ["grape", "grape"], ["hat", "hat"], ["ice cream", "ice cream"], ["jacket", "jacket"], ["kite", "kite"], ["lion", "lion"]]
console.log(testSet.values()); // ["apple", "banana", "dog", "elephant", "frog", "grape", "hat", "
// ice cream", "jacket", "kite", "lion"]
console.log(testSet.clear()); // true
console.log(testSet.length()); // 0
