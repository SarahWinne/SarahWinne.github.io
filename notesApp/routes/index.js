var express = require('express');
// const { redirect } = require('express/lib/response');
var router = express.Router();

let note = [
  {id: 0, 
    title: "Getting Started", 
    body: "You're just getting started!", 
    color: "white", 
    starred: true, 
    createdAt: 0, 
    updatedAt: 0
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.get('/notes/new', function(req, res, next) {
  res.render('new', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.get('/notes/:id/edit', function(req, res, next) {
  res.render('edit', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.get('/notes/:id/star', function(req, res, next) {
  var id= req.params.id;
  const thisNote = note.find(user => user.createdAt == id);
  if(thisNote==null){
    res.redirect('/');
  } else {
    res.render('index', { title: 'Notes', data: thisNote, currentDate: Date.now()});
  }
});

router.post('/notes', function(req, res, next) {
  var id= req.body.updatedAt;
  var title= req.body.title;
  var body= req.body.body;
  var color= req.body.color;
  var starred= req.body.starred;
  var createdAt= req.body.updatedAt;
  var updatedAt= req.body.updatedAt;
  var newNote = {id:id, title:title, body:body, color:color, starred:starred, createdAt:createdAt, updatedAt:updatedAt}
  note.push(newNote);
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.post('/notes/:id/edit', function(req, res, next) {
  var id= req.params.id;
  var title= req.body.title;
  var body= req.body.body;
  var color= req.body.color;
  var starred= req.body.starred;
  var createdAt= req.body.id;
  var updatedAt= req.body.updatedAt;
  // note = note.filter(thisNote => thisNote.id !== id); 
  var newNote = {id:id, title:title, body:body, color:color, starred:starred, createdAt:createdAt, updatedAt:updatedAt}
  note.push(newNote);
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.post('/notes/:id', function(req, res, next) {
  var id= req.params.id;
  // Removes the object with firstname: id
  note = note.filter(notes => notes.createdAt !== id); 
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});


module.exports = router;
