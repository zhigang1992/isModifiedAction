const process = require('process');
const fs = require('fs');


console.log(process.argv[0])

const events = fs.readFileSync(process.env.GITHUB_EVENT_PATH, {
    encoding: 'utf-8'
})

console.log(events)