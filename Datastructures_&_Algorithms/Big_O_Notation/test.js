/* Create an application that will convert text-based configuration format into json.
The application should accept input as file or a stdin-stream and print result into stdout.

Sample input:
config = 3
config_b.items = item1
config_b.items = item2
config_b.items.named_item = 123
config_c.root.a.b.c = 13


Expected output for sample input:
{
   "config":3,
   "config_b":{
      "items":{
         "0":"item1",
         "1":"item2",
         "named_item":123
      }
   },
   "config_c":{
      "root":{
         "a":{
             "b": {
                "c":13
             }
         }
      }
   }
} */

const convertTextToJson = (str) => {
    const texts = str.split('\n');

    for (let text of texts) {
        const parts = text.split('=')
    }

    return texts
};

let input = `config = 3
config_b.items = item1
config_b.items = item2
config_b.items.named_item = 123
config_c.root.a.b.c = 13`;

console.log(convertTextToJson(input));

/* function convertText(file) {
    let output = {};

    for (let line of file) {
        if (line.includes('.')) {
            if (line.split('.').length > 3) {
                console.log(line);
            } else if (line.split('.').length > 2) {
                console.log(line);
            } else {
                console.log(line);
            }
        } else {
            const [key, value] = line.split('=');
            output[key] = value;
        }
    }

    return output;
}

const file = ['config = 3', 'config_b.items = item1', 'config_b.items = item2', 'config_b.items.named_item = 123', 'config_c.root.a.b.c = 13'];

console.log(convertText(file)); */

const strChallenge = (str) => {
    let count = 0;
    let first;

    for (let i = 1; i < str.length; i++) {
        first = str[0];
        let current = str[i];

        if (first === current) {
            count += 1;
        } else {
            first = current;
        }
    }
    console.log(count, first);
    if (count >= first) {
        return true;
    } else {
        return false;
    }
};

console.log(strChallenge('5788888888882339999'));
// console.log(strChallenge('56575555'));
// console.log(strChallenge('5556293383563665'));

// slashdev.io test
// test 1
/* const axios = require('axios');

const getData = async () => {
    const response = await axios.get('https://coderbyte.com/api/challenges/json/rest-get-simple');

    let data = await response.data;

    let hobbies = data.hobbies;

    const challengeToken = 'iym4xc5ls9d';

    for (let char of challengeToken) {
        hobbies = hobbies.map((item) => {
            if (item.length == 0 || item === 'EMPTY') {
                return 'EMPTY';
            }
            const output = item.replace(new RegExp(char, 'gi'), '');
            return output.length > 0 ? output : 'EMPTY';
        });
    }

    console.log(hobbies.join());
    return hobbies;
};

getData(); */

// Test 2
/* const fetchData = async () => {
    const response = await axios.get('https://coderbyte.com/api/challenges/json/json-cleaning');

    let data = await response.data;

    const newObj = {};

    // parse json data here...
    for (let key in data) {
        if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
            const firstObj = data[key];
            newObj[key] = {};
            for (let key2 in firstObj) {
                const isValidString = filterString(firstObj[key2]);
                isValidString ? (newObj[key][key2] = firstObj[key2]) : '';
            }
        } else if (typeof data[key] === 'object' && Array.isArray(data[key])) {
            newObj[key] = filterArray(data[key]);
        } else if (typeof data[key] === 'string') {
            const isValidString = filterString(data[key]);
            isValidString ? (newObj[key] = data[key]) : '';
        } else {
            newObj[key] = data[key];
        }
    }
    function filterArray(arr) {
        return arr.filter((item) => filterString(item));
    }
    function filterString(str) {
        return str == 'N/A' || str == '-' || str == '' ? false : true;
    }
    console.log(JSON.stringify(newObj));
};

fetchData(); */

// ===================UCRAFT TEST ==============

/* class Sum {
    constructor() {
        this.value = 0;
    }
    sum(value) {
        this.value = this.value + value;
        return this;
    }
}

const sum = new Sum()

console.log(sum.sum(1).sum(2).sum(3)); */

// sum(1).sum(2).sum(3) //result 6

/* import React, { useRef, useState, useEffect } from 'react';
import _ from 'lodash';
import './style.css';

export default function App() {

  const handleClick = () => {
    const username = `Username_${_.random(1000, 9999)}`;

    localStorage.setItem('username', username);

    alert(`Changed to ${username}`);
  };

  return (
    <>
      <h1>{localStorage.getItem('username') || '[Empty]'}</h1>
      <button onClick={handleClick}>Change Username</button>
    </>
  );
}
 */

/* import React, { useRef, useState, useEffect } from 'react';
import _ from 'lodash';
import './style.css';

export default function App() {
  const [user, setUser] = useState(null);

  const handleClick = () => {
    const username = `Username_${_.random(1000, 9999)}`;

    localStorage.setItem('username', username);
    
    setUser(localStorage.getItem('username'));
    alert(`Changed to ${username}`);
  };

  return (
    <>
      <h1>{user || '[Empty]'}</h1>
      <button onClick={handleClick}>Change Username</button>
    </>
  );
} */
