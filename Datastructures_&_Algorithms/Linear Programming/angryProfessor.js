function angryProfessor(k, a) {
    // Write your code here
    let onTime = 0,
        arrivedLate = 0;

    for (let number of a) {
        if (number <= 0) {
            onTime += 1;
        } else {
            arrivedLate += 1;
        }
    }
    const result = onTime < k ? 'YES' : 'NO';

    return result;
}

console.log(angryProfessor(4, [-1, -2, 3, 2]));
