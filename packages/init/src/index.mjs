import UA from './ua/ua.index.mjs'
import Mocha from './mocha/mocha.min.js'
import css from './mocha/mocha.min.css.mjs'
import eruda from './eruda/eruda.js'
import test from './tests/index.mjs'

let mochaHtml =`<div id="tests"><ul id="mocha"></ul></div><style>${css}</style>`

let userAgent = new UA['default']['user-agent']
let type = userAgent.getResult().device.type
if(!type)
  type = 'desktop'

let addTest = (path, target = document.body) => {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = path
        script.type = 'module'
        target.appendChild(script)
        script.onload = (out) =>{
            resolve({loading:true})
        }
    })
}

export default async ( path = false, devTool = true ) => {
    try {
        (type !== 'desktop' && devTool)
            ? (eruda.init())
            : (path)
                ? (
                    Mocha.setup('bdd'),
                    // await addTest(path),
                    await test(),
                    document.body.insertAdjacentHTML('afterbegin', mochaHtml),
                    Mocha.run((events) => {
                    })
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
            "private": true,
            "success": false,
            "status": "false",
            "message": ""
        }
    } catch (e) {
        return {
            success: false,
            status: "false",
            message: e
        }
    }
}
