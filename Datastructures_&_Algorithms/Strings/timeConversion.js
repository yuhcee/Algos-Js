/**
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let [hh, mm, ssWithFormat] = s.split(':'),
        formatSuffice = ssWithFormat.substr(-2).toUpperCase(),
        seconds = ssWithFormat.substr(0, 2),
        result;

    if (hh == 12 && formatSuffice == 'AM') {
        let isTwelve = '00';
        result = `${isTwelve}:${mm}:${seconds}`;
    } else if (hh != 12 && formatSuffice == 'PM') {
        let isConvert = 12 + parseInt(hh);
        result = `${isConvert}:${mm}:${seconds}`;
    } else {
        result = `${hh}:${mm}:${seconds}`;
    }
    return result;
}
console.log(timeConversion('12:01:00AM'));
