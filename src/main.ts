import { A, B, C } from './constant'

const algorithm = (
    doubleJump: boolean,
    msg: string,
    key: string,
    mapFromSingle: string | string[],
    mapToSingle: string | string[],
    mapFromDouble: string | string[],
    mapToDouble: string | string[]
): string => {
    msg = msg.toLowerCase()
    let result: string[] = []

    let j = 0
    for (let i = 0; i < msg.length; i++) {
        const subjectSingle = msg[i]
        const subjectDouble = msg[i] + msg[i + 1]

        if (key[j] == '1')
            result.push(mapToSingle[mapFromSingle.indexOf(subjectSingle)])
        if (key[j] == '2') {
            result.push(
                mapToDouble[
                    mapFromDouble.indexOf(
                        doubleJump ? subjectDouble : subjectSingle
                    )
                ]
            )
            if (doubleJump) i++
        }

        j = (j + 1) % key.length
    }

    return result.join('')
}

const chiper = (msg: string, key: string): string => {
    return algorithm(false, msg, key, A, B, A, C)
}
const dechiper = (msg: string, key: string): string => {
    return algorithm(true, msg, key, B, A, C, A)
}

export { chiper, dechiper }
