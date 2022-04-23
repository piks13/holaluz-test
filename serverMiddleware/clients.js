const clients = require('../assets/data/clients.json')
export default {
  path: '/api/clients',
  handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(clients))
    res.end()
  },
}
