import FS from './fs/main.mjs'
import wasm from './fs/wasmBinary.mjs'
let container = null ;
let files = null;
let workerFS = FS({ wasmBinary: wasm })
workerFS.then(async (Module)=> {
  let FS = Module.FS

  FS.mkdir('/data');

  FS.mount(Module.FS.filesystems.WORKERFS, {
    files: files,
    blobs: []
  }, '/data');

  // console.log('~~~~~~~~~', FS)
  // let fileContents = FS.readFile("/data/container", { encoding: "utf8" });
  // console.log("File contents:");
  // console.log(fileContents);


})
self.onmessage = msg => {
  // container = msg.data;
  // console.log('container', container)
  files = msg.data;
  files.name = "test.wav";
  console.log(files);
  self.postMessage("Got it");
}

console.log('~~~~~~~~~~~~~~ worker ~~~~~~~~~~~~')
