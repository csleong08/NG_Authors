const Author = require("./models.js")

module.exports = 
{
    // getall
    allAuthors: (req,res) => 
    {
        console.log("all cakes in controller")
        Author.find({})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    // new task
    createAuthor: (req,res) => 
    {
        console.log("create cake in controller")
        Author.create(req.body)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    // one task
    showAuthor: (req,res) => 
    {
        console.log("one cake in controller");
        Author.findById(req.params.id)
                .then(data=>console.log(data)||res.json(data))
                .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateAuthor: (req,res) => 
    {
        console.log("update cake in controller");
        console.log(req.body);
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },

    deleteAuthor: (req,res) =>
    {
        console.log("delete cake in controller")
        Author.findByIdAndRemove(req.params.id)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    }
}