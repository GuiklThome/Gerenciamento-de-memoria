const http = require('http')
const PcMemoria = require('./pcRamUsage')
const host = 'http://localhost'
const port = 3000

const bem = '<h1>Seja bem vindo </h1>'


http.createServer((req, res) => {
    let url = req.url

    if(url == '/PcMemoria'){
        <div>Grafico</div>
        res.end(JSON.stringify(PcMemoria, null, 2))
    }else{
        res.end(bem)
    }

}).listen(port, () => console.log(`Serve is running ${host}:${port}, ${PcMemoria}`))