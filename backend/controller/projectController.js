const projectModel = require('./../model/projectModel');

exports.allProjects = (req, res, next) => {
    const Managerid = req.body.Managerid;
    projectModel.find({projectManager: Managerid})
    .then(result => {
        if(result.length == 0){
            const error = new Error("There are no projects");
            throw error;
        }
        res.status(200).json({
            message: "success",
            projects: result
        });
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 400;
        }
        next(err);
    });
}

exports.createProject = (req, res, next)=> {
    var { projectTitle, projectManager, model, TeamLeader, Members, Document, Reports } = req.body;
    console.log(projectManager);

    const project = new projectModel({
        projectTitle: projectTitle,
        projectManager: projectManager,
        model: model,
        TeamLeader: TeamLeader,
        Members: Members,
        Document: Document,
        Reports: Reports
    })
    project.save()
    .then(result => {
        res.status(200).json({
            message: "succesfully Created project"
        });
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 400;
        }
        next(err);
    })
}

exports.singleProject = (req, res, next) => {
    var id = req.body.id;

    projectModel.findById(id)
    .then(project=> {
        if(!project){
            const error = new Error("No post found");
            throw error;
        }
        res.status(200).json({
            message: "post found",
            project: project
        })
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 400;
        }
        next(err);
    })
}