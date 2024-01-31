function solve(number) {
    'using string';
    const convertToString = number.toString();
    let totalSum = 0;

    for(const char of convertToString) {

        const charAsNumber = parseInt(char, 10);
        totalSum += charAsNumber;
    }
   
console.log(totalSum)


}

solve(605)