import emoji from './emoji/emoji.mjs';
import isEmpty from './isEmpty/isEmpty.mjs'
import task from './task/index.mjs'
import pushkin from './default/pushkin.index.mjs'
export default ( body = pushkin ) => {
  return new Promise(async (resolve, reject) =>{
   let test = new Function('task', 'emoji', 'isEmpty', body)
    resolve(test(task, emoji, isEmpty))
  })
}
