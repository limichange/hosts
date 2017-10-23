#!/usr/bin/env node

const fs = require('fs')

fs.readdir('/private/etc/', (err, items) => {
  const hostsFiles = items.filter(item => {
    return item.includes('hosts')
  })

  console.log(hostsFiles)
})
