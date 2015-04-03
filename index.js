var derby = require('derby');

var app = module.exports = derby.createApp('ieteszt', __filename);

app.use(require('derby-debug'));

app.loadViews(__dirname);

app.get('/', function(page, model) {
  page.render();
});