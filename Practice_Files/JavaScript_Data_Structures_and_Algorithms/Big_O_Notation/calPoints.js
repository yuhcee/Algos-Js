/** 
 * ** 682. Baseball Game**
 * 
 * You are keeping score for a baseball game with strange rules. The game consists of several rounds, where
 * the scores of past rounds may affect future rounds' scores.
 * 
 * At the beginning of the game, you start with an empty record. You are given a list of strings `ops`, where
 * `ops[i]` is the `ith` operation you must apply to the record and is one of the following:
 * 
 * An integer `x` - Record a new score of `x`.
 * 1. `"+"` - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
 * 2. `"D"` - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
 * 3. `"C"` - Invalidate the previous score, removing it from the record. It is guaranteed there will always
 * be a previous score.
 * 
 * *Return *the sum of all the scores on the record*.

 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
    // init scores array
    const scores = [];

    // iterate through ops
    for (let op of ops) {
        // apply record based on op
        switch (op) {
            case 'C':
                scores.pop();
                break;
            case '+':
                scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
                break;
            case 'D':
                scores.push(scores[scores.length - 1] * 2);
                break;

            default:
                scores.push(+op);
                break;
        }
    }
    // sum all the scores on the record
    const sum = scores.reduce((prev, curr) => prev + curr);
    return sum;
};
