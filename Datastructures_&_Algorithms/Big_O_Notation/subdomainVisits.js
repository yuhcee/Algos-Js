/**
 * A website domain `"discuss.leetcode.com"` consists of various subdomains. At the top level, we have
 * `"com"`, at the next level, we have `"leetcode.com"` and at the lowest level, `"discuss.leetcode
 * com"`. When we visit a domain like `"discuss.leetcode.com"`, we will also visit the parent domains
 * `"leetcode.com"` and `"com"` implicitly.
 *
 * A **count-paired domain** is a domain that has one of the two formats `"rep d1.d2.d3"` or `"rep d1.d2"`
 * where rep is the number of visits to the domain and `d1.d2.d3` is the domain itself.
 *
 * For example, `"9001 discuss.leetcode.com"` is a **count-paired domain** that indicates that `discuss
 * leetcode.com` was visited `9001` times.
 *
 * Given an array of **count-paired domains** `cpdomains`, return an array of the **count-paired domains** of each subdomain in the input. You may return the answer in **any order**.
 * @param {string[]} cpdomains
 * @return {string[]}
 * returns visitCounts
 */

const subDomainVisits = (cpdomains) => {
    const visitCounts = {};

    for (let info of cpdomains) {
        const [visits, domains] = info.split(' ');

        const subdomains = domains.split('.');

        while (subdomains.length > 0) {
            const domain = subdomains.join('.').trim();
            visitCounts[domain] = Number(visitCounts[domain]) + Number(visits) || Number(visits);
            subdomains.shift();
        }
    }

    return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
};

const cpdomains = ['900 google.com', '50 uk.google.com', '60 mail.yahoo.com', '10 mobile.sports.yahoo.com', '300 yahoo.com', '1 google.co.uk', '50 Wikipedia.org', '30 mobile.sports', '3 com.com'];

const cpdom = ['900 google.mail.com'];

console.log(subDomainVisits(cpdomains));
// console.log(subDomainVisits(cpdom));
