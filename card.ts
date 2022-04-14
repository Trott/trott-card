#!/usr/bin/env node

import fs from 'node:fs'
const output = fs.readFileSync(new URL('output', import.meta.url), 'utf8')
console.log(output)
