export default (peer = {}) => {
  return new Promise(async (resolve, reject) => {
    let Peer = peer
    resolve({
      symlink: (oldpath, newpath) => {
        Peer.fs.self.symlink(oldpath, newpath);
      },
      unmount: (mountpoint = './fs') => {
        Peer.fs.self.unmount(mountpoint)
      },
      fsLoad: () => {
        return new Promise(async (resolve, reject) => {
          Peer.fs.self.syncfs(true,  (err) => {
            console.log('file load', err)
            resolve()
          });
        })
      },
      fsSave: () => {
        return new Promise(async (resolve, reject) => {
          Peer.fs.self.syncfs(false , (err) => {
            console.log('file save', err)
            resolve()
          });
        })
      },
      mkdir: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.mkdir(path)
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      readdir: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.readdir(path)
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      rmdir: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.rmdir(path)
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      cwd: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.cwd()
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      rename: (file, result) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.rename(file, result)
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      readFile: (file, encoding = "utf8") => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.readdir(file, { encoding: encoding })
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      unlink: (file) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.unlink(file)
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      writeFile: (file, contents) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.writeFile(file, contents)
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      createDataFile: (folder, file, contents, readable = true, writable = true ) => {
        return new Promise(async (resolve, reject) => {
          try {
            resolve({
              status: true,
              success: true,
              message: await Peer.fs.createDataFile(folder, file, contents, readable, writable)
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      }
    })
  })
}
