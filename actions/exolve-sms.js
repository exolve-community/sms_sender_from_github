const core = require('@actions/core');

// {required: true} выкинет ошибку, если input не передан
const FLAG = core.getInput('flag')

console.log('Hello, I am an action!'+FLAG)
