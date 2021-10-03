import heap from './task/task.mjs'
import emoji from './emoji/emoji.mjs'
export let set = (view,property,color,substrate,relation)=>{
  return new Promise(function (resolve, reject) {
    console.log(`${emoji('moon')[1][0]}`, relation + ' init')
    if(view) {
      heap(view, property,color,substrate ,relation, (event)=>{
        console.log(`    ${emoji('moon')[2][0]}`,relation)
        resolve(event)
      })
    } else {
      console.log(`    ${emoji('moon')[0][2]}`,`${relation} stop`)
      resolve({
        status:true,
        message: 'stop'
      })
    }

  })
}

export let get = (view,property,color,substrate,relation, callback)=>{
  console.log(`${emoji('moon')[0][0]}`, relation)
  return heap(view, 'await',color,{property, substrate} ,relation, callback)
}

export let list = (view,property,color,substrate,relation, callback) => {
  let list = heap(view, 'list')
  list.then((item)=>{
    console.log(`${emoji('moon')[0][1]}`, item)
  })
  return list
}

export let close = (view,property,color,substrate,relation, callback)=> {
  let close = heap(view,'close',color,substrate,relation)
  close.then((item)=>{
    console.log(`${emoji('moon')[0][3]}`, item)
  })
  return close
}

export default {
  "name": "@orbit/task",
  "version": "1.0.0",
  "description": "task manager for async events",
  "main": "index.js",
  "author": "Zababurin Sergey",
  "license": "GPL-3.0-only",
  "private": true,
  "scripts": {
    "build": "parcel build ./src/index.mjs"
  },
  "devDependencies": {
    "@parcel/resolver-default": "latest",
    "parcel": "latest"
  }
}
