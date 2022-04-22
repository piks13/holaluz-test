const supplyPoints = require('../static/data/supply-points.json')
export default {
  path: '/api/supply-points',
  handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(supplyPoints))
    res.end()
  },
}
