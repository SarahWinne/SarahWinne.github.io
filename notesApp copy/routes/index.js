var express = require('express');
// const { redirect } = require('express/lib/response');
var router = express.Router();
const fs = require('fs');
var path = require('path');


let note = [];

function writeFile(jsonData){
  var filePath = path.join(__dirname, "../public/notes.json");
  fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Data written to file.');
  });
}

function readFile(){
  var filePath = path.join(__dirname, "../public/notes.json");
  const data = fs.readFileSync(filePath, 'utf8');
  const note = JSON.parse(data);
  return note;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var note= readFile();
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.get('/notes/new', function(req, res, next) {
  res.render('new', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.get('/notes/:id/edit', function(req, res, next) {
  var id= req.params.id;
  var note=readFile();
  const thisNote = note.find(n => n.createdAt == id);
  res.render('edit', { title: 'Notes', data: thisNote, currentDate: Date.now()});
});

// Couldn't get this to work as a toggle, so I added its function to the edit form
// router.get('/notes/:id/star', function(req, res, next) {
//   var id= req.params.id;
//   var note=readFile();
//   const thisNote = note.find(m => m.createdAt == id);
//   var title= thisNote.title;
//   var body= thisNote.body;
//   var color= thisNote.color;
//   if (thisNote.starred == false) {
//     var starred = true;
//   } else {
//     var starred = false;
//   }
//   var createdAt= thisNote.createdAt;
//   var updatedAt= currentDate;
//   var newNote = {id:id, title:title, body:body, color:color, starred:starred, createdAt:createdAt, updatedAt:updatedAt}
//   const index = note.findIndex(n => n.createdAt == id)
//   if (index !== -1) {
//     note[index] = newNote;
//   }
//   writeFile(note);
//   res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
// });

router.post('/notes/new', function(req, res, next) {
  var id= req.body.updatedAt;
  var title= req.body.title;
  var body= req.body.body;
  var color= req.body.color;
  var starred= req.body.starred ? true : false;
  var createdAt= req.body.updatedAt;
  var updatedAt= req.body.updatedAt;
  var newNote = {id:id, title:title, body:body, color:color, starred:starred, createdAt:createdAt, updatedAt:updatedAt}
  var note=readFile();
  note.push(newNote);
  writeFile(note);
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.post('/notes/:id/edit', function(req, res, next) {
  var id= req.params.id;
  var title= req.body.title;
  var body= req.body.body;
  var color= req.body.color;
  var starred= req.body.starred ? true : false;
  var createdAt= req.body.id;
  var updatedAt= req.body.updatedAt;
  var newNote = {id:id, title:title, body:body, color:color, starred:starred, createdAt:createdAt, updatedAt:updatedAt}
  var note=readFile();
  const index = note.findIndex(n => n.createdAt == id)
  if (index !== -1) {
    note[index] = newNote;
  }
  writeFile(note);
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});

router.get('/notes/:id/delete', function(req, res, next) {
  var id= req.params.id;
  var note=readFile();
  note = note.filter(notes => notes.createdAt !== id); 
  writeFile(note);
  res.render('index', { title: 'Notes', data: note, currentDate: Date.now()});
});


module.exports = router;
