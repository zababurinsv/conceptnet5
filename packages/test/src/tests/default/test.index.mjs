import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import task from '/static/html/components/component_modules/heap/index.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style

describe('task manager', async function () {
  this.timeout(10000);
  before(async function () {
    console.log('i18n',)
    // console.log('emoji', emoji('moon'))
  });
  describe('case №1', async function () {
    it('set await', function () {
      return new Promise(async (resolve, reject) => {
        await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
          object.callback({status:true})
        })
        await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
          object.callback({status:true})
        })
        resolve(true)
      })
    })
    it('set task', function () {
      return new Promise(async (resolve, reject) => {
        let request = [];
        [0,1,2,3].forEach((element, index, array)=>{
          request.push(task.set(true, `get test ${index}`, '5', {
            test:element
          },'/test-heap'));
        });
        await task.close(true,`close`,'5',{},'/test-heap');
        let response = await Promise.all(request);
        (!isEmpty(response))
          ? resolve()
          : reject()
      })
    })
  })
  describe('case №2', async function () {
    it('set task', function () {
      return new Promise(async (resolve, reject) => {
        let request = [];
        [2, 5, 3, 9].forEach((element, index, array)=>{
          request.push(task.set(true, `get test ${index}`, '5', {
            test:element
          },'/test-heap'));
        });
        resolve(true)
      })
    })
    it('set await', function () {
      return new Promise(async (resolve, reject) => {
        await task.list()
        await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
          object.callback({status:true})
        });
        let getTask = await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
          object.callback({status:true})
        })
        let request = [];
        [2, 5, 3, 9].forEach((element, index, array)=>{
          request.push(task.set(true, `get test ${index}`, '5', {
            test:element
          },'/test-heap'));
        });
        resolve(getTask)
      })
    })
  })
  describe('case №3', async function () {
    it('task list', function () {
      return new Promise(async (resolve, reject) => {
        await task.list()
        resolve()
      })
    })
    it('task close', function () {
      return new Promise(async (resolve, reject) => {
        await task.close(true,`close`,'5',{},'/test-heap')
        await task.list()
        resolve(true)
      })
    })
  })
  describe('case №4 router', async function () {
    it('set routes', function () {
      return new Promise(async (resolve, reject) => {
       // await task.set(true, '', '5', {
       //    head: {
       //      prev: import.meta.url,
       //      current: import.meta.url
       //    },
       //    payload: {}
       //  },'/route_dev')
        resolve(true)
      })
    })
    it('get static data', function () {
      return new Promise(async (resolve, reject) => {
        // await task.set(true, '', '5', {
        //   head: {
        //     prev: import.meta.url,
        //     current: import.meta.url
        //   },
        //   payload: {}
        // },'/route_index')
        resolve(true)
      })
    })
  })
})