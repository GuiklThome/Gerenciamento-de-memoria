const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os
    const tram = totalmem() / 1024 /1024
    const fram = freemem() / 1024 /1024
    const usage = (fram / tram) * 100

    const stats = {
        OS: platform(),
        Arch: arch(),
        ToralRam: `${parseInt(tram)} MB`,     //parseInt passar o valor para um inteiro
        FreeRam:`${parseInt(fram)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }
    console.clear()
    console.table(stats)
    exports.stats = stats
},1000)
