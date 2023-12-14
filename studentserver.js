//studentserver.js
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
const glob = require("glob");
const { send } = require('process');
var port=5678;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

// Mongose MONGO DBS ATLAS SET UP
mongoose.connect("mongodb+srv://carlo:test123@cluster0.olc1ibw.mongodb.net/?retryWrites=true&w=majority")

const studentSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: Number
  },
  first_name: {
    required: true,
    type: String
  },
  last_name: {
    required: true,
    type: String
  },
  gpa: {
    required: true,
    type: String
  },
  enrolled: {
    required: true,
    type: String
  }
})

const Model=mongoose.model('Data',studentSchema) //creates tabel

// app.post('/students',async function(req,res){
//   const data =new Model({
//     _id:req.body._id,
//     first_name:req.body.first_name,
//     last_name:req.body.first_name,
//     gpa:req.body.gpa,
//     enrolled: req.body.enrolled,
//   })
//   await data.save()
//   return res.staus(201).send(data);
// })






// EJS ATTEMPT v

//Set everything for ejs to work bellow
const ejs=require('ejs');//add requirements for ejs
// const { default: mongoose } = require('mongoose');
app.set('view engine','ejs');//set the engine 
// app.set('views',__dirname+'/views')// IDK LEARN MORE

app.get('/',function(req,res){//will ignore if there is an idex.html
  // OLD : No ejs
  // res.send('wellcome to student server ')
  // NEW : with ejs
  res.render('index');
})

// Testing add ejs
app.get('/add',function(req,res){//will ignore if there is an idex.html
  res.render('addStudent');
})

app.get('/delete',function(req,res){//will ignore if there is an idex.html
  res.render('deleteStudent');
})

app.get('/list',function(req,res){//will ignore if there is an idex.html
  res.render('listStudents');
})

app.get('/find',function(req,res){//will ignore if there is an idex.html
  res.render('displayStudent');
})

app.get('/update',function(req,res){//will ignore if there is an idex.html
  res.render('updateStudent');
})

//EJS ATTMPET ^


/**
description: method for adding a student
@method: /students
@type:post
@param: record_id
@param: first_name
@param: last_name
@param: gpa
@param: enrolled
*/
//post makes a student 
//DONE
app.post('/students',async function(req, res) {
  const data =new Model({
    _id:req.body._id,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    gpa:req.body.gpa,
    enrolled: req.body.enrolled,
  })
  await data.save();
  return res.status(201).send(data);


  // var record_id = new Date().getTime();

  // var obj = {};
  // obj.record_id = record_id;
  // obj.first_name = req.body.first_name;
  // obj.last_name = req.body.last_name;
  // obj.gpa = req.body.gpa;
  // obj.enrolled = req.body.enrolled;

  // var str = JSON.stringify(obj, null, 2);
  // //writes new file as jason
  // fs.writeFile("students/" + record_id + ".json", str, function(err) {
  //   var rsp_obj = {};
  //   if(err) {
  //     rsp_obj.record_id = -1;
  //     rsp_obj.message = 'error - unable to create resource';
  //     return res.status(200).send(rsp_obj);
  //   } else {
  //     rsp_obj.record_id = record_id;
  //     rsp_obj.message = 'successfully created';
  //     return res.status(201).send(rsp_obj);
  //   }
  // }); //end writeFile method
  
}); //end post method

/*
description: method for adding a student
@method: /students/:record_id
@type:get
@param: record_id
*/
//get one sturdent records
app.get('/students/:record_id',async function(req, res) {
  let data=await Model.findOne({_id : req.params.record_id})//
  console.log(data)
  return res.status(200).send(data);

  
  // var record_id = req.params.record_id;

  // fs.readFile("students/" + record_id + ".json", "utf8", function(err, data) {
  //   if (err) {
  //     var rsp_obj = {};
  //     rsp_obj.record_id = record_id;
  //     rsp_obj.message = 'error - resource not found';
  //     return res.status(404).send(rsp_obj);
  //   } else {
  //     return res.status(200).send(data);
  //   }
  // });
}); 

/**
* discription:  Reads the contents of a list of files, 
*           extracts JSON data from each file, and returns an 
*            object containing the data for all students.
* @method: readFiles
* @param {string[]} files - An array of filenames to read.
* @param {object[]} arr - An array to store the JSON data for each file.
* @param {object} res - An object representing the HTTP response to send once all files have been processed.
* @returns {void}
*/


//used in  app.get('/students/:record_id'...
function readFiles(files,arr,res) {
  fname = files.pop();
  if (!fname)
    return;
  fs.readFile(fname, "utf8", function(err, data) {
    if (err) {
      return res.status(500).send({"message":"error - internal server error"});
    } else {
      arr.push(JSON.parse(data));
      if (files.length == 0) {
        var obj = {};
        obj.students = arr;
        return res.status(200).send(obj);
      } else {
        readFiles(files,arr,res);
      }
    }
  });  
}

/**
description: Handles GET requests for retrieving all student records.
@type:put
@method: /students
@param: record_id
@param: first_name
@param: last_name
@param: gpa
@param: enrolled
*/
//gets all students info records and displays it a json
app.get('/students',async function(req, res) {
  let data=await Model.find()//gets all 
  return res.status(200).send(data);//

  // var obj = {};
  // var arr = [];
  // filesread = 0;

  // glob("students/*.json", null, function (err, files) {
  //   if (err) {
  //     return res.status(500).send({"message":"error - internal server error"});
  //   }
  //   readFiles(files,[],res);
  // });

});

/**
Handles PUT requests to update a student record in the file system.
@type:put
@method: /students/:record_id
@param {object} req - The request object containing the HTTP request.
@param {object} res - The response object containing the HTTP response.
@param: first_name
@param: last_name
@param: gpa
@param: enrolled
*/
//DONE
app.put('/students/:record_id',async function(req, res) {
  let data=await Model.findOne({_id : req.params.record_id})//
  console.log(data)
  return res.status(200).send(data);

  // var record_id = req.params.record_id;
  // var fname = "students/" + record_id + ".json";
  // var rsp_obj = {};
  // var obj = {};

  // obj.record_id = record_id;
  // obj.first_name = req.body.first_name;
  // obj.last_name = req.body.last_name;
  // obj.gpa = req.body.gpa;
  // obj.enrolled = req.body.enrolled;

  // var str = JSON.stringify(obj, null, 2);

  // //check if file exists
  // fs.stat(fname, function(err) {
  //   if(err == null) {

  //     //file exists
  //     fs.writeFile("students/" + record_id + ".json", str, function(err) {
  //       var rsp_obj = {};
  //       if(err) {
  //         rsp_obj.record_id = record_id;
  //         rsp_obj.message = 'error - unable to update resource';
  //         return res.status(200).send(rsp_obj);
  //       } else {
  //         rsp_obj.record_id = record_id;
  //         rsp_obj.message = 'successfully updated';
  //         return res.status(201).send(rsp_obj);
  //       }
  //     });
      
  //   } else {
  //     rsp_obj.record_id = record_id;
  //     rsp_obj.message = 'error - resource not found';
  //     return res.status(404).send(rsp_obj);
  //   }
  // });

}); //end put method

/**
 * Deletes a student record with the given ID from the server.
 *
 * @type:delete
 * @method: /students/:record_id
 * @param record_id
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @returns {object} A JSON object containing a message indicating whether the record was deleted and a status code.
 * @example
 * // Sends a DELETE request to delete a student record with ID 123 from the server.
 * // Returns a response with a message indicating that the record was deleted and a status code of 200.
 * delete http://example.com/students/123
 */
//DONE
app.delete('/students/:record_id',async function(req, res) {
  let data=await Model.deleteOne({_id:req.params.record_id})//gets all
  var rsp_obj = {};
  rsp_obj.record_id = req.params.record_id;
  rsp_obj.message = 'record deleted';
  return res.status(200).send(rsp_obj);

  // var record_id = req.params.record_id;
  // var fname = "students/" + record_id + ".json";

  // fs.unlink(fname, function(err) {
  //   var rsp_obj = {};
  //   if (err) {
  //     rsp_obj.record_id = record_id;
  //     rsp_obj.message = 'error - resource not found';
  //     return res.status(404).send(rsp_obj);
  //   } else {
  //     rsp_obj.record_id = record_id;
  //     rsp_obj.message = 'record deleted';
  //     return res.status(200).send(rsp_obj);
  //   }
  // });
}); //end delete method

app.listen(port); //start the server
console.log('Server is running...');
console.log(`server : http://localhost:${port}`)


