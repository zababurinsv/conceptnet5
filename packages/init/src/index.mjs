import UA from './ua/ua.index.mjs'
import Mocha from './mocha/mocha.min.js'
import css from './mocha/mocha.min.css.mjs'
import eruda from './eruda/eruda.js'

let mochaHtml =`
<div id="tests">
    <ul id="mocha"></ul>
</div>
<style>${css}</style>
`
let userAgent = new UA['default']['user-agent']
let type = userAgent.getResult().device.type
if(!type)
  type = 'desktop'

let addTest = async () => {
 let response = await fetch('/public/test.index.mjs')
  response = await response.text();
  return response
}

export default async ( path = false, devTool = true ) => {
    // let js = await get()
    // Mocha.addFile(js);
    // console.log('sssssss');

  (type !== 'desktop' && devTool)
      ? (eruda.init())
      : (path)
        ? (
            document.body.insertAdjacentHTML('afterbegin', mochaHtml),
            Mocha.setup('bdd').run()
          )
        : ('')

  return {
    "name": "@orbit/init",
    "version": "1.0.0",
    "manifest_version": "1.0.0",
    "device": type,
    "description": "init module",
    "main": document.body,
    "author": "Zababurin Sergey",
    "license": "GPL-3.0-only",
    "private": true
  }
}
