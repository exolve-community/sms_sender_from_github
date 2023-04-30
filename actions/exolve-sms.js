import * as core from '@actions/core';
// {required: true} выкинет ошибку, если input не передан
const FLAG = core.getInput('flag', {required: false})

console.log('Hello, I am an action!'+FLAG)
