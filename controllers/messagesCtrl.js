var messages = [{message: 'Hey brother', user: 'Jason', timestamp: new Date()}, {message: 'Her?', user: 'Jason', timestamp: new Date()}, {message: 'I made a huge mistake', user: 'Jason', timestamp: new Date()}, {message: 'Chaw chee chaw chee chaw', user: 'Jason', timestamp: new Date()}, {message: 'There is always money in the banana stand', user: 'Jason', timestamp: new Date()}, {message: 'Quit essing around', user: 'Jason', timestamp: new Date()}, {message: 'I\'m a monster!', user: 'Jason', timestamp: new Date()}];

module.exports = {
  getMessages: function(req, res) {
    return res.json(messages);
  },

  postMessage: function(req, res) {
    req.body.timestamp = new Date();
    messages.push(req.body);
    return res.send('message added');
  },
};
