module.exports = {
  name: 'web', 
  build: '.',
  base: 'codemasonhq/bedrock', 
  type: 'service',
  volumes: {
    './':'/app',
  },
  ports: [
    "80:80",
    "443:443"
  ],
  environment: {
    'DOCUMENT_ROOT': '/app/web',
  }
}