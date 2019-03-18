if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://Hamza:933786vpn@ds233551.mlab.com:33551/my-vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}