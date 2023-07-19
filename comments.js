// Create web server

// Load modules
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// Load configuration
var config = require(path.join(__dirname, '..', 'config.json'));

// Load comments
var comments = require(path.join(__dirname, '..', 'comments.json'));

// Load comments template
var commentsTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'comments.html'), 'utf8');

// Load comments template
var commentTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'comment.html'), 'utf8');

// Load comments template
var commentFormTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'comment-form.html'), 'utf8');

// GET comments
router.get('/', function(req, res) {
  var html = commentsTemplate;
  var commentsHtml = '';
  for (var i = 0; i < comments.length; i++) {
    var commentHtml = commentTemplate;
    commentHtml = commentHtml.replace(/{{name}}/g, comments[i].name);
    commentHtml = commentHtml.replace(/{{email}}/g, comments[i].email);
    commentHtml = commentHtml.replace(/{{comment}}/g, comments[i].comment);
    commentsHtml += commentHtml;
  }
  html = html.replace(/{{comments}}/g, commentsHtml);
  html = html.replace(/{{comment-form}}/g, commentFormTemplate);
  res.send(html);
});

// POST comment
router.post('/', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var comment = req.body.comment;
  comments.push({
    name: name,
    email: email,
    comment: comment
  });
  fs.writeFileSync(path.join(__dirname, '..', 'comments.json'), JSON.stringify(comments), 'utf8');
  res.redirect('/comments');
});

// Export router
module.exports = router;