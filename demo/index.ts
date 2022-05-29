import { chiper, dechiper } from '../src/main'
// import { chiper, dechiper } from '..'
;[
    {
        msg: 'osaka, shizuku, kasumin, asaka, karin, mia chi, kawaii.',
        key: '1221122',
    },
    {
        msg: 'tokimeki ga doko?! vivid world',
        key: '111121',
    },
    {
        msg: 'ayumu lanzhu zong shioriko nijigasaki saiko.',
        key: '212',
    },
].forEach((el) => {
    const encryptedMsg = chiper(el.msg, el.key)
    const decryptedMsg = dechiper(encryptedMsg, el.key)
    console.log({
        msg: el.msg,
        key: el.key,
        encryptedMsg,
        decryptedMsg,
        status: el.msg === decryptedMsg ? 'success' : 'failed',
    })
})
