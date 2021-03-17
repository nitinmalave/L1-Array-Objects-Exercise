import "./styles.css";

export default function App() {
  const sumOfOddNums = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        sum += num;
      }
    });
    return sum;
  };

  console.log("Sum of odd numbers : ", sumOfOddNums([1, 2, 3, 4, 5]));

  const sumOfOddIndexNums = (arr) => {
    let sum = 0;
    arr.forEach((num, index) => {
      if (index % 2 !== 0) {
        sum += num;
      }
    });
    return sum;
  };

  console.log(
    "Sum of odd index numbers : ",
    sumOfOddIndexNums([1, 2, 3, 4, 5])
  );

  const getMaxNumber = (arr) => {
    let max = 0;
    arr.forEach((num) => {
      if (num > max) {
        max = num;
      }
    });
    return max;
  };

  console.log("Maximum number from array : ", getMaxNumber([1, 2, 3, 4, 5]));

  const getAllDivisibleBy10 = (arr) => {
    let divisibleBy10 = [];
    arr.forEach((num) => {
      if (num % 10 === 0) {
        divisibleBy10.push(num);
      }
    });
    return divisibleBy10;
  };

  console.log(
    "All numbers divisible by 10 : ",
    getAllDivisibleBy10([10, 50, 5, 4])
  );

  const oddEven = (arr) =>
    arr.map((num) => (num % 2 === 0 ? num - 1 : num + 1));

  console.log("Odd/Even manipulations : ", oddEven([10, 50, 5, 4]));

  const oddEvenSum = (arr) => {
    let oddSum = 0;
    let evenSum = 0;
    arr.forEach((num) => {
      if (num % 2 === 0) {
        evenSum += num;
      } else {
        oddSum += num;
      }
    });
    return { oddSum, evenSum };
  };

  console.log("Odd/Even Sum : ", oddEvenSum([10, 50, 5, 4]));

  ///Strings

  const countWords = (arr) => {
    let charCount = {};
    arr.forEach((item) => {
      let temp = item.length;
      if (temp in charCount) {
        charCount[temp] = charCount[temp] + 1;
      } else {
        charCount[temp] = 1;
      }
    });

    return charCount;
  };

  console.log(
    "Count words of string : ",
    countWords(["abc", "abcd", "abcde", "abc"])
  );

  const charLength = (arr) => {
    return arr.map((word) => ({ [word]: word.length }));
  };

  console.log(
    "Count words and return as object key : ",
    charLength(["Curiosity", "Perseverance"])
  );

  const findVowels = (str) => {
    // This regex will return array of all the vowels from given word
    let vowelArray = str.match(/[aeiou]/gi);
    // If vowelArray array is not empty means the word has vowel(s) and we will return true else will return false;
    // output of vowelArray is ['i', 'o' ...] if word has vowel else it will be null;
    if (vowelArray && vowelArray.length > 0) {
      return true;
    }
    return false;
  };

  const isVowel = (arr) => {
    let vowelWords = [];
    arr.forEach((word) => {
      //findVowel will check whether the word has vowel or not and based on that it will push in final vowelWords array
      if (findVowels(word)) {
        vowelWords = [...vowelWords, word];
      }
    });
    return vowelWords;
  };

  console.log(
    "Word containing vowel : ",
    isVowel(["Curiosity", "Perseverance", "bcd", "mtnl", "bsnl"])
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
