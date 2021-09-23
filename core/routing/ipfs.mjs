export default (peer = {}) => {
  return new Promise(async (resolve, reject) => {
    let Peer = peer
    resolve({
      node: {
        stop: () => {
          return new Promise(async (resolve, reject) => {
            resolve(Peer.ipfs.self.stop())
          })
        }
      },
      dag: {

      }

    })
  })
}
