//@ TO CREATE A NEW CMP USE THIS CODE IN THE COMMEND LINE:
// node create-component.js --dir "folder-name" --name "cmp-name"
// fun cmp write:  node create-component.js --dir "folder-name" --name "cmp-name" --cmp-type "func"
const fs = require('fs');
const _ = require('lodash')
const path = require('path');

const validOptions = {
    name: 'name', 
    n: 'name', 
    dir: 'dir', 
    d: 'dir',
    style: 'style',
    s: 'style',
    cmpType: 'cmpType',
    'cmp-type': 'cmpType',
    ct: 'cmpType'
}

const defaultOptions = {
    dir: 'cmps',
    style: 'scss',
    cmpType: 'func'
}

const cleanOption = (op) => {
    if (op.includes('--')) {
        op = op.substr(2, op.length)
        return validOptions[op]
    }

    if (op.includes('-')) {
        op = op.substr(1, op.length)
        return validOptions[op]
    }

    throw "option name must start with '--' or '-"
}

const validateOption = (op) => {
    if (!validOptions[op])  throw `'${op}' is not a valid option!`
}

const validateValue = (val) => {
    if (val === null || val === undefined || val === '') {
        throw 'each option must have value!'
    }
}

const parseOptions = (args) => {
    const options = Object.assign({}, defaultOptions)

    for (let i=0; i < args.length; i=i+2) {
        const op = cleanOption(args[i])
        const val = args[i +1]
        
        validateOption(op)
        validateValue(val)
    
        options[op] = val
    }
    
    if (!options.name) throw 'name is required!'
    
    return options
}

const componentClassTemplate = (cmpName, style) => `
import React, { Component } from 'react'

import './${cmpName}.${style}'

class ${cmpName} extends Component {

    render() {

    }
}

export default ${cmpName}
`

const componentFunctionTemplate = (cmpName, style) => `
import React from 'react'

import './${cmpName}.${style}'

const ${cmpName} = (props) => {

    return (
        <section className="${_.kebabCase(cmpName)}">
        ${cmpName} is running!
        </section>
    )

   
}

export default ${cmpName}
`

const styleTemplate = (styleName) => {
    let name = styleName.charAt(0).toLowerCase() + styleName.slice(1)
    name =  _.kebabCase(name);
    return (
        `
        @import "./src/styles/setup";
        .${name} {}`   
    )
}

const showHelp = () => {
    console.log('create-component usage:')
    console.log('node create-component --name <cmp-name> [--dir <name>] [--cmp-type <class|func>] [--style <type>]')
    console.log('')
    console.log('   --name      required')
    console.log('   --dir       optional, default: components')
    console.log('   --cmpType   optional, default: class')
    console.log('   --style     optional, default: css')
}

try {
    const args = process.argv.splice(2)
    if (args[0] === '--help' || args[0] === '--') {
        showHelp()
        return
    }

    const options = parseOptions(args)
    const {name, dir, style, cmpType} = options
    const rootDir = path.join(__dirname, `/src/${dir}/${name}`)

    fs.mkdirSync(rootDir);

    fs.writeFileSync(`${rootDir}/${name}.${style}`,styleTemplate(name))
    console.log("css file created successfully");

    const template = cmpType === 'class' ? componentClassTemplate : componentFunctionTemplate
    fs.writeFileSync(`${rootDir}/${name}.jsx`, template(name, style))
    console.log("component file created successfully");

    // fs.writeFileSync(`${rootDir}/index.js`, `export { default } from './${name}'`);
    // console.log("index file created successfully");
} catch(e) {
    console.log('ERROR:', e.message ? e.message : e)
}
