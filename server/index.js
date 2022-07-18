const express = require("express");
const app = express();
const cors =  require("cors");
const mongoose = require("mongoose");
const StudentModel = require("./models/Students");

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb://localhost:27017/tutorialmern?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    { useNewUrlParser: true }
  );

  app.post("/addStudent", async (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone
    const email = req.body.email
    const branch = req.body.branch
    const gender = req.body.gender
    
    const student = new StudentModel({ name: name, phone: phone, email:email, branch:branch, gender:gender });
    await student.save();
    res.send("Success");
  });

  app.get("/read", async (req, res) => {
    StudentModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put('/update', async (req, res) => {
    const newPhone = req.body.newPhone
    const id = req.body.id
    try{
        await StudentModel.findById(id, (error, studentToUpdate) => {
          studentToUpdate.phone = Number(newPhone);
          studentToUpdate.save();
        });
    } catch(err) {
      console.log(err)
    }

    res.send("update");
  })

  app.delete('/delete/:id', async(req,res) => {
    const id = req.params.id
    await StudentModel.findByIdAndRemove(id).exec();
    res.send("item deleted");
  });

app.listen(3001, () => {
    console.log("You are connected!");
});