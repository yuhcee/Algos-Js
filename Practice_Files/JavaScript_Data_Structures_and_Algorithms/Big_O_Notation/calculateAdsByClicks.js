const counts = [
    '900, google.com',
    '50, uk.google.com',
    '60, mail.yahoo.com',
    '10, mobile.sports.yahoo.com',
    '300, yahoo.com',
    '1, google.co.uk',
    '50, Wikipedia.org',
    '30, mobile.sports',
    '3,com.com',
];

// const calculateAdsByClicks = (counts) => {
//     const domainNames = counts.map((count) => count.split(',')[1]);

//     const graph = generateKeys(domainNames);

//     for (let key in graph) {
//         counts.forEach((count) => {
//             const [clicks, urlStrings] = count.split(',');
//             if (urlStrings.includes(key)) {
//                 graph[key] += parseInt(clicks);
//             }
//         });
//     }
//     return graph;
// };

// const generateKeys = (domains) => {
//     const graph = {};

//     for (let domain of domains) {
//         let url = domain.split('.');
//         ['google', 'com'];
//         let i = url.length;

//         while (i > 0) {
//             let key;
//             let chunk = url.slice(i - 1);
//             if (chunk.length > 1) {
//                 key = chunk.join('.').trim();
//             } else {
//                 key = chunk[0];
//             }

//             if (!(key in graph)) graph[key] = 0;
//             i -= 1;
//         }
//     }

//     return graph;
// };

// console.log(calculateAdsByClicks(counts));

const subDomainVisits = (cpdomains) => {
    const visitCounts = {};

    for (let info of cpdomains) {
        const [visits, domains] = info.split(' ');

        const subdomains = domains.split('.');

        while (subdomains.length > 0) {
            const domain = subdomains.join('.').trim();

            if (!visitCounts.hasOwnProperty(domain)) {
                visitCounts[domain] = visits;
            } else {
                visitCounts[domain] = Number(visitCounts[domain]) + Number(visits);
            }
            subdomains.shift();
        }
    }

    return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
};

// const cpdomains = [
//     '900, google.com',
//     '50, uk.google.com',
//     '60, mail.yahoo.com',
//     '10, mobile.sports.yahoo.com',
//     '300, yahoo.com',
//     '1, google.co.uk',
//     '50, Wikipedia.org',
//     '30, mobile.sports',
//     '3,com.com',
// ];

const cpdom = ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'];

// console.log(subDomainVisits(cpdomains));
// console.log(subDomainVisits(cpdom));
