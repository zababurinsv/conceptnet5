## nft.storage
https://nft.storage/
https://app.pinata.cloud/
https://github.com/ipfs/js-ipfs/blob/master/packages/ipfs-core/src/runtime/config-browser.js

https://github.com/ipfs/js-ipfs/blob/master/docs/MODULE.md

https://proto.school/build

https://docs.ipfs.io/how-to/configure-node/#gateway


#FS

* Create file FS.writeFile("file.txt","some contents");
* Create file, with options FS.createDataFile("/data","file.txt","abcdef",true,true);
  >  folder where file will be saved  
     file name
     file contents (a string)
     is this file readable?
     is this file writable?
## folder where file will be saved
* Rename file `FS.rename("/data/file.txt","/data/renamed.txt");`
* Read file contents `FS.readFile("/data/file.txt", { encoding: "utf8" });`
* Delete the file `FS.unlink("/data/file.txt");`
## Enable virtual filesystems (the ephemeral MEMFS is included by default)
* IDBFS -lidbfs.js
* WORKERFS -lworkerfs.js
* NODEFS -lnodefs.js
## Folders
* Create folder `FS.mkdir("/data");`
* List folder contents `FS.readdir("/data");`
* Delete empty `folder FS.rmdir("/data");`
* Get working directory `FS.cwd();`


https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api
https://github.com/emscripten-core/emscripten/tree/main/src
