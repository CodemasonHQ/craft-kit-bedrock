module.exports = {
  name: 'bedrock',
  default: ["php", "mysql"],
  masonJson: {
  	php: require('./mason-json/php.js'),
  	mysql: require('./mason-json/mysql.js')
  },
  hooks: []
}