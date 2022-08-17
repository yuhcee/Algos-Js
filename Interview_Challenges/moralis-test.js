import React, { useState, useEffect } from 'react';

function Solution({ menuConfig }) {
    const [allListState, setAllListState] = useState({});

    const menuConfig = [
        {
            title: 'Home',
        },
        {
            title: 'Services',
            subItems: ['Cooking', 'Cleaning'],
        },
        {
            title: 'Contact',
            subItems: ['Phone', 'Mail'],
        },
    ];

    // set intial state
    useEffect(() => {
        const initState = {};
        menuConfig.map((data, id) => {
            initState[data.title] = false;
        });

        setAllListState(initState);
    }, []);

    const handleClick = (title) => {
        const temp = { ...allListState };
        for (let x in temp) {
            if (x === title) {
                temp[x] = !temp[x];
            } else {
                temp[x] = false;
            }
        }
        setAllListState(temp);
    };

    const listItems = menuConfig.map(({ title, subItems }, id) => {
        const newTitle = title.toLowerCase();
        return (
            <div key={`${id}-${newTitle}`} data-test-id={`first-level-${newTitle}`}>
                {title}
                {subItems && (
                    <button onClick={() => handleClick(title)} data-test-id={`button-${newTitle}`}>
                        {allListState[title] ? 'Expand' : 'Hide'}
                    </button>
                )}
                {subItems && allListState[title] && (
                    <ul data-test-id={`ul-${newTitle}`}>
                        {subItems.map((subtitle) => (
                            <li key={`${id}-${newTitle}-${subtitle}`} data-test-id={`li-${newTitle}-${subtitle.toLowerCase()}`}>
                                {subtitle}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    });

    return <div className="menu-wrapper">{listItems}</div>;
}

export default Solution;
