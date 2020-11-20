const firstRecurringCharacter = string => {
	let array = Array.from(string); 
	let recurringCharacter = array.find((character, index) => {
  	return array.indexOf(character) < index;
  });
   return recurringCharacter ? recurringCharacter : "No recurring character";
}

console.log(firstRecurringCharacter('ABCAD'));
console.log(firstRecurringCharacter('BCABAAB'));
console.log(firstRecurringCharacter('ABC'));

// A
// B
// No recurring character