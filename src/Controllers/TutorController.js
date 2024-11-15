const TutorModel = require ('../models/TutorModel');

class TutorController {
    //CREATE
    async store(req, res) {
        const CreatedTutor = await TutorModel.create(req.body);

        return res.status(200).json(CreatedTutor);
    }
    //READ ALL
    async index(req, res) {
        const tutor = await TutorModel.find();
        
        return res.status(200).json(tutor);
     }
      // READ (ID)
    async show(req, res) {
        try {
            const { id } = req.params;

        const tutor = await TutorModel.findById(id);
        console.log(tutor)
        if (!tutor) {
            return res.status(404).json({ message: "Tutor does not exist"});
        }

        return res.status(200).json(tutor);

        } catch (error) {
            return res.status(404).json({ message: "failed to list Tutors"});
        }
    }

    //UPDATE
    async update(req, res) {
        try {
            const { id } = req.params;

            await TutorModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({message: "Tutor updated"});
        } catch (error) {
            return res.status(404).json({ message: "failed to update tutor"});
        }
    }

    //DELETE
    async destroy(req, res) {
        try {
            const { id } = req.params;

            const TutorDelete = await TutorModel.findByIdAndDelete(id);
            
            if (!TutorDelete){
            return res.status(404).json({message: "Tutor doesnot exists"});
            }
            return res.status(200).json({message: "Tutor Deleted"});
        } catch (error) {
            return res.status(404).json({ message: "failed to delete tutor"});
        }
    }
}

module.exports = new TutorController();