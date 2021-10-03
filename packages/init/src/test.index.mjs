// import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
// import task from '/static/html/components/component_modules/heap/index.mjs'
// import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'

describe('task manager', async function () {
    this.timeout(10000);
    before(async function () {
        console.log('i18n',)
        // console.log('emoji', emoji('moon'))
    });
    describe('case №1', async function () {
        it('set await', function () {
            return new Promise(async (resolve, reject) => {
                // await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
                //     object.callback({status:true})
                // })
                // await task.get(true, 'await', '5', '','/test-heap', async (object)=>{
                //     object.callback({status:true})
                // })
                resolve(true)
            })
        })
        it('set task', function () {
            return new Promise(async (resolve, reject) => {
                let request = [];
                // [0,1,2,3].forEach((element, index, array)=>{
                //     request.push(task.set(true, `get test ${index}`, '5', {
                //         test:element
                //     },'/test-heap'));
                // });
                // await task.close(true,`close`,'5',{},'/test-heap');
                let response = await Promise.all(request);
                // (!isEmpty(response))
                //     ? resolve()
                //     : reject()
            })
        })
    })
})