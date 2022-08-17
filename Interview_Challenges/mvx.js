import React, { useState } from 'react';
import './styles.css';
// import * as data from 'utils/data.js';

export default function App() {
    const [category, setCategory] = useState(null);
    const [direction, setDirection] = useState(null);
    const data = [
        {
            name: 'Second Author',
            duration: 2000046,
        },
        {
            name: 'Auto',
            duration: 3200046,
        },
        {
            name: 'Ball',
            duration: 4500046,
        },
        {
            name: 'About to pump',
            duration: 1000046,
        },
        {
            name: 'Catcalling',
            duration: 7000046,
        },
        {
            name: 'DOM',
            duration: 1000046,
        },
        {
            name: 'Early rise',
            duration: 900046,
        },
        {
            name: 'Firm rise',
            duration: 300046,
        },
        {
            name: 'First Author',
            duration: 2500046,
        },
        {
            name: 'First Author',
            duration: 2200046,
        },
        {
            name: 'To the moon',
            duration: 1000046,
        },
    ];

    const handleSelect = (e) => {
        setCategory(e.target.value);
        setDirection('asc');
    };

    const handleDirection = (e) => {
        setDirection(e.target.value);
    };

    const sortTheThisThing = (cat, dir) => {
        data.sort((a, b) => {
            if (dir === 'asc') {
                if (a[cat] < b[cat]) {
                    return -1;
                }
                if (b[cat] > a[cat]) {
                    return 1;
                }
                return 0;
            }
            if (dir === 'desc') {
                if (a[cat] > b[cat]) {
                    return -1;
                }
                if (b[cat] < a[cat]) {
                    return 1;
                }
                return 0;
            }
        });
    };

    sortTheThisThing(category, direction);

    return (
        <div className="App">
            <h1>Audio Files</h1>
            <h2>Start editing to see some magic happen!</h2>

            <label htmlFor="tracks"> Sort Tracks </label>
            <br />
            <select htmlFor="tracks" id="" onChange={handleSelect}>
                <option>-Select Category-</option>
                <option value="name">name</option>
                <option value="duration">duration</option>
            </select>

            <select htmlFor={direction} name={direction} id="" onChange={handleDirection} value={direction}>
                <option>-Select Direction-</option>
                <option value="asc">ascending</option>
                <option value="desc">descending</option>
            </select>

            <h3> Audio Tracks</h3>
            <table>
                <th>
                    <tr>
                        <td>Name</td>
                        <td>Duration</td>
                    </tr>
                </th>
                {data.map(({ name, duration }, key) => (
                    <tbody>
                        <tr key={key}>
                            <td>{name}</td>
                            <td>{duration}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}
