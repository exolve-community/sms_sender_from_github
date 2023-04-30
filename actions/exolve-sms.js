const core = require('@actions/core');

// {required: true} выкинет ошибку, если input не передан
const FLAG = core.getInput('flag')
const EXOLVE_TOKEN = core.getInput('exolve-token')


console.log('Hello, I am an action!'+FLAG+ 'ET = ' + EXOLVE_TOKEN)
