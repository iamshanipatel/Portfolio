import "dotenv/config"
import express from "express";
import cors from "cors";
const app = express()
app.use(cors()) 
app.use(express.json())

let skills = [
    {_id: "1", name: "HTML", category: "Frontend"},
    {_id: "2", name: "React", category: "Frontend"},
    {_id: "3", name: "Node.js", category: "Backend"},
];

app.get("/", (req, res)=>{
    res.send("Portfolio API is running ??")
})

app.get("/api/skills", (req, res)=>{
    res.json(skills);
})

app.post("/api/skills", (req,res)=>{
    const newSkill = {
        _id: Date.now().toString(),
        name: req.body.category,
        category: req.body.category,
    };
    skills.push(newSkill);
    res.status(201).json(newSkill);
})

app.delete("/api/skills/:id", (req, res)=>{
    skills = skills.filter((skill)=> skill._id !== res.params.id);
    res.json({message: "skill deleteed"})
})

const PORT = process.env.PORT || 5000;
app.console.log(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})