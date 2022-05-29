// @ts-ignore
const shuffleText = (text: string): string => {
    return text
        .split('')
        .map((s) => ({ s, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((s) => s.s)
        .join('')
}
export const pair = (mapKey: string, mapText: string): string[] => {
    let map = []

    for (let i = 0; i < mapKey.length; i++) {
        for (let j = 0; j < mapText.length; j++) {
            map.push(mapKey[i] + mapText[j])
        }
    }

    return map
        .map((el) => ({ el, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((el) => el.el)
}

// console.log(' abcdefghijklmnopqrstuvwxyz'.length)
// console.log('hblgmxjconyrf,q?!e.pkv azdiutsw')
// console.log(shuffleText('hblgmxjconyrf,q?!e.pkv azdiutsw'))
// console.log('abcdefghijklmopqrstuvwxyzabcdefghijklmopqrstuvwxyz')
// const x = shuffleText('abcdefghijklmopqrstuvwxyzabcdefghijklmopqrstuvwxyz')
// const y = splitTwo(x)
// console.log(x)
// console.log(y)
