const readline = require('readline');

class Solution {
    longestCommonPrefix(strs) {
        if (strs.length === 0) return '';
        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, -1);
                if (prefix === '') return '';
            }
        }
        return prefix;
    }
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let inputLines = [];
    rl.on('line', (line) => {
        inputLines.push(line);
    });

    rl.on('close', () => {
        const t = parseInt(inputLines[0]);
        let index = 1;

        for (let t1 = 0; t1 < t; t1++) {
            const sol = new Solution();
            const testCase = inputLines[index++].trim();
            console.log(testCase);

            const n = parseInt(inputLines[index++].trim());
            const str = inputLines[index++].trim().split(/\s+/);
            const ans = sol.longestCommonPrefix(str);
            console.log(ans);
        }
    });
}

main();
