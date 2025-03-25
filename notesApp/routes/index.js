var express = require('express');
// const { redirect } = require('express/lib/response');
var router = express.Router();

let note = [
  {id: "(unique identifier, can be a simple number or string)", 
    title: "Getting Started", 
    body: "You're just getting started!", 
    color: "white", 
    starred: true, 
    createdAt: "(timestamp for when the note was created)", 
    updatedAt: "(timestamp for when the note was last updated)"
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Notes', data: note});
});

router.get('/notes/new', function(req, res, next) {
  res.render('new', { title: 'Notes', data: note});
});

router.get('/notes/:id/edit', function(req, res, next) {
  res.render('edit', { title: 'Notes', data: note});
});

router.get('/notes/:id/star', function(req, res, next) {
  var id= req.params.id;
  const thisNote = note.find(user => user.createdAt == id);
  if(thisNote==null){
    res.redirect('/');
  } else {
    res.render('index', { title: 'Notes', data: thisNote});
  }
});

router.post('/notes', function(req, res, next) {
  // var id= req.body.fname;
  var title= req.body.title;
  var body= req.body.body;
  var color= req.body.color;
  var starred= req.body.starred;
  var createdAt= req.body.lname;
  // var updatedAt= req.body.lname;
  var newNote = {id:createdAt, title:title, body:body, color:color, starred:starred, createdAt:createdAt, updatedAt:createdAt}
  note.push(newNote);
  res.render('new', { title: 'Notes', data: note});
});

router.post('/notes/:id', function(req, res, next) {

  res.render('edit', { title: 'Notes', data: note});
});


module.exports = router;
