function solve(num, testCases) {
    // TODO solve problem
}

function parseInput(line, testCases = []) {
    // TODO change how input data is processed
    const [a, b] = line.split(' ')
    const aNum = Number(a)
    const bNum = Number(b)
    testCases.push([aNum, bNum]);
    return testCases;
}

function print(num, output) {
    console.log(`Case #${num}: ${output}`);
}

(function readInput() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    let T = 0;
    let testCases = [];

    rl.on('line', function (line) {
        if (T === 0) {
            T = parseInt(line)
        } else {
            testCases = parseInput(line, testCases);
        }
    })

    rl.on('close', () => {
        // Finished processing input, now solve question
        let num = 1;
        for (testCase of testCases) {
            solve(num, testCase);
            num++;
        }
        process.exit();
    })
})();