const process = require('process');
const fs = require('fs');


const inputs = process.argv[2].split(' ')

console.log(`input is: ${inputs}`)

const events = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, {
    encoding: 'utf-8'
}))

for (const commit of events.commits) {
    const modifications = commit.added
        .concat(commit.removed)
        .concat(commit.modified)
    for (const mod of modifications) {
        for (const input of inputs) {
            if (mod.startsWith(input)) {
                console.log(`Found modification: ${mod}`)
                process.exit(0);
            }
        }
    }
}

process.exit(78)