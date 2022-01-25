/**
 * LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an **alert** if any worker uses the key-card **three or more times** in a one-hour period.

You are given a list of strings keyName and keyTime where `[keyName[i]`, `keyTime[i]]` corresponds to a person's name and the time when their key-card was used **in a single day**.

Access times are given in the **24-hour time format "HH:MM"**, such as `"23:51"` and `"09:49"`.

Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in **ascending order alphabetically**.

Notice that `"10:00"` - `"11:00"` is considered to be within a one-hour period, while `"22:51"` - `"23:52"` is not considered to be within a one-hour period.
 * 
 * 
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */

const alertNames = (keyName, keyTime) => {
    const pings = {},
        output = [];

    for (let i = 0; i < keyName.length; i += 1) {
        const name = keyName[i];
        const time = getTime(keyTime[i]);

        pings[name] = pings[name] || [];
        pings[name].push(time);
    }

    for (let name in pings) {
        let pingTimes = pings[name];
        pingTimes.sort((a, b) => a - b);
        let start = 0;

        for (let end = 0; end < pingTimes.length; end++) {
            if (pingTimes[start] < pingTimes[end] - 60) start++;
            if (end - start + 1 >= 3) {
                output.push(name);
                break;
            }
        }
    }

    return output.sort();
};

const getTime = (timeStr) => {
    const [hour, min] = timeStr.split(':');

    return +hour * 60 + +min;
};

const keyName = ['john', 'john', 'john'],
    keyTime = ['23:58', '23:59', '00:51'];
console.log(alertNames(keyName, keyTime)); // []

const keyName1 = ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'],
    keyTime1 = ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00'];
console.log(alertNames(keyName1, keyTime1)); // ["daniel"]

const keyName2 = ["alice","alice","alice","bob","bob","bob","bob"], keyTime2 = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"];
console.log(alertNames(keyName2, keyTime2)); // ['bob']


