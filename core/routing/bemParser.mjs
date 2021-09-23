import isEmpty from '@orbit/isEmpty'
import bem from './bem.js'

function process(obj, parse, elemMod, splitElem, elemModVal, deepElement, element) {
  for(let key in parse) {
    switch (key) {
      case 'block':
        break
      case 'elem':
        switch (deepElement) {
          case 0:
            if(isEmpty(obj[splitElem[0]])) {
              obj[splitElem[0]] = []
            }
            if(elemMod) {
              if(isEmpty(obj[splitElem[0]]['main'])) {
                obj[splitElem[0]]['main'] = []
              }
              obj[splitElem[0]]['main'].push(element)
            }
            break
          case 1:
            if(isEmpty(obj[splitElem[0]])) {
              obj[splitElem[0]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]])) {
              obj[splitElem[0]][splitElem[1]] = []
            }
            if(elemMod) {
              if(isEmpty(obj[splitElem[0]][splitElem[1]]['main'])) {
                obj[splitElem[0]][splitElem[1]]['main'] = []
              }
              obj[splitElem[0]][splitElem[1]]['main'].push(element)
            }
            break
          case 2:
            if(isEmpty(obj[splitElem[0]])) {
              obj[splitElem[0]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]])) {
              obj[splitElem[0]][splitElem[1]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]] = []
            }
            if(elemMod) {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]]['main'])) {
                obj[splitElem[0]][splitElem[1]][splitElem[2]]['main'] = []
              }
              obj[splitElem[0]][splitElem[1]][splitElem[2]]['main'].push(element)
            }
            break
          case 3:
            if(isEmpty(obj[splitElem[0]])) {
              obj[splitElem[0]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]])) {
              obj[splitElem[0]][splitElem[1]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]] = []
            }
            if(elemMod) {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]]['main'])) {
                obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]]['main'] = []
              }
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]]['main'].push(element)
            }
            break
          case 4:
            if(isEmpty(obj[splitElem[0]])) {
              obj[splitElem[0]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]])) {
              obj[splitElem[0]][splitElem[1]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]] = []
            }
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]] = []
            }
            if(elemMod) {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]]['main'])) {
                obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]]['main'] = []
              }
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][splitElem[4]]['main'].push(element)
            }
            break
          default:
            console.warn('не хватает ячеек')
            break
        }
        break
      case'elemMod':
        switch (deepElement) {
          case 0:
            if(isEmpty(obj[splitElem[0]][`${parse.elemMod}`])) {
              obj[splitElem[0]][`${parse.elemMod}`] = []
            }
            if(elemModVal) {
              if(isEmpty(obj[splitElem[0]][`${parse.elemMod}`][`${parse.elemModVal}`])) {
                obj[splitElem[0]][`${parse.elemMod}`][`${parse.elemModVal}`] = []
              }
              obj[splitElem[0]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element)
            } else {
              if(isEmpty(obj[splitElem[0]][`${parse.elemMod}`]['main'])) {
                obj[splitElem[0]][`${parse.elemMod}`]['main'] = []
              }
              obj[splitElem[0]][`${parse.elemMod}`]['main'].push(element)
            }
            break
          case 1:
            if(isEmpty(obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`])) {
              obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`] = []
            }
            if(elemModVal) {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`][`${parse.elemModVal}`])) {
                obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`][`${parse.elemModVal}`] = []
              }
              obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element)
            } else {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`]['main'])) {
                obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`]['main'] = []
              }
              obj[splitElem[0]][splitElem[1]][`${parse.elemMod}`]['main'].push(element)
            }
            break
          case 2:
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`] = []
            }
            if(elemModVal) {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`][`${parse.elemModVal}`])) {
                obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`][`${parse.elemModVal}`] = []
              }
              obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element)
            } else {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`]['main'])) {
                obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`]['main'] = []
              }
              obj[splitElem[0]][splitElem[1]][splitElem[2]][`${parse.elemMod}`]['main'].push(element)
            }
            break
          case 3:
            if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`])) {
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`] = []
            }
            if(elemModVal) {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`][`${parse.elemModVal}`])) {
                obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`][`${parse.elemModVal}`] = []
              }
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`][`${parse.elemModVal}`].push(element)
            } else {
              if(isEmpty(obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`]['main'])) {
                obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`]['main'] = []
              }
              obj[splitElem[0]][splitElem[1]][splitElem[2]][splitElem[3]][`${parse.elemMod}`]['main'].push(element)
            }
            break
          default:
            console.log('недостаточно ячеек для обработки')
            break
        }
        break
      case'elemModVal':
        break
      default:
        console.log('неизвестное свойство', key, { obj: parse})
        break
    }
  }
}

export default (API, substrate, property) => {
  return new Promise(async (resolve, reject) => {
    let obj = {}
    substrate.forEach((element) => {
      let id = {}
      let classList = 1
      if(property.type === 'id') {
        id = element.id
      } else if(property.type === 'class') {
        (element.classList.length === 1)
          ? id = element.className
          : id = element.classList
      } else if(property.type === 'slot') {
        id = element.slot
      } else {
        console.warn('неизвестный тип', property)
      }

      let parse = {}
      let elemMod = {}
      let elemModVal = {}
      let deepElement = 0
      let splitElem = {}

      if( typeof id === 'object') {
        for(let itemClass of id) {
          parse = bem(itemClass)
          elemMod = !('elemMod' in parse)
          elemModVal = ('elemModVal' in parse)
          deepElement = 0
          splitElem = {}
          if(('elem' in parse)) {
            splitElem = parse['elem'].split('-')
            deepElement = splitElem.length -1
          }
          process(obj, parse, elemMod, splitElem, elemModVal, deepElement, element)
        }
      } else {
        parse = bem(id)
        elemMod = !('elemMod' in parse)
        elemModVal = ('elemModVal' in parse)
        deepElement = 0
        splitElem = {}
        if(('elem' in parse)) {
          splitElem = parse['elem'].split('-')
          deepElement = splitElem.length -1
        }
        process(obj, parse, elemMod, splitElem, elemModVal, deepElement, element)
      }
    })
    if(property.type === 'id') {
      API['id'] = obj
    } else if(property.type === 'class') {
      API['class'] = obj
    } else if(property.type === 'slot') {
      API['slot'] = obj
    } else {
      console.warn('неизвестный тип')
    }
    obj = { }
    resolve(API)
  })
}
