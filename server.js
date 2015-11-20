var port = 9001,
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  middleware = require('./middleware/middleware'),
  messagesCtrl = require('./controllers/messagesCtrl');

app.use(cors());
app.use(bodyParser.json());
// app.use(jacobHeader);

app.get('/api/messages', middleware.jacobHeader, messagesCtrl.getMessages);
app.post('/api/messages', messagesCtrl.postMessage);

app.listen(port, function() {
  console.log('listening on port:', port);
});
