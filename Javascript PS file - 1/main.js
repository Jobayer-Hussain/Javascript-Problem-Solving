/* Problem - 1 (Ludu)

    function ludu(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(ludu(1,6));
*/


/* Problem - 2 (Alphabetically name orientation)

    const students = ["Robin","Toha","Nirob","Asif","Zeshan","Jobayer","Sharif","Dipu"]
    console.log(students.sort());
*/


/*Problem - 3 (Classroll orientation by numbers)

    const students = [25, 3, 67, 51, 17, 34, 86, 8, 22]
    console.log(students.sort(function(a,b){
    return a - b
    }));

*/

/* Problem - 4 (Leap Year)

        function isLeapYear(year){
            if((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
                console.log(`${year} is a Leap Year!`)
            }else{
                console.log(`${year} is not a Leap Year!`)
            }
        }
            isLeapYear(1904);
*/

/*Problem - 5 (Find vowels from a sentence)

    const vowels = ["A","E","I","O","U","a","e","i","o","u"]
    function countVowels(sentence){
        let count = 0;
        const letters = Array.from(sentence);

        letters.forEach(function(value){
            if(vowels.includes(value)){
                count++
            }
        })
        return count;
    }
        console.log(countVowels("I was coding there and then it happened!"))
*/


/* Problem - 6 (Find out Duplicate numbers)

        const numbers = [1, 4, 6, 1, 5, 5, 7, 3];
        const Duplicates = numbers.filter(function(value, index, array){
            return array.indexOf(value) !== index
        })
        console.log(Duplicates);
*/
