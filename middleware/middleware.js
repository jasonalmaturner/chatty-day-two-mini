module.exports = {
  jacobHeader: function(req, res, next) {
    res.header('jacob-eats-poop', 'true');
    next();
  },
};
