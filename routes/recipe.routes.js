import { Router } from "express";
// import { MongoClient } from "mongodb";
const router = Router();



// Define routes
router.post('/recipes', (req, res) => {
res.send("Add the recipes")
});

router.get('/recipes', (req, res) => {
res.send('Get all recipes!');
});

router.get('/recipes/:id', (req, res) => {
    res.send(`Get recipe with id: ${req.params.id}`);
});

router.patch('/recipes/id',(req,res) => {
    res.send('Update single recipes!');
});

router.delete ('/recipes/id',(req,res) => {
    res.send('Delete single recipes!');
});

export default router;
