const CursoModel = require ('../models/CursoModel');

class CursoController {
    //Criação dos Cursos (Materias)
    async store(req, res) {
        const CreatedCurso = await CursoModel.create(req.body);

        return res.status(200).json(CreatedCurso);
    }

    //READ
    async index(req, res) {                                                                                                 
                                                                                                                          
        const {pesquisa} = req.body                                                                                     
  const cursos = await CursoModel.aggregate(                                                                            
          [{                                                                                                            
                  $search:{                                                                                             
                          index:"default",                                                                              
                          text:{                                                                                        
                                  query:pesquisa,                                                                       
                                  path:['nome_curso', 'materia', 'descricao']                                           
                          }                                                                                             
                  }                                                                                                     
          }]                                                                                                            
  );                                                                                                                    
                                                                                                                        
  return res.status(200).json(cursos);                                                                                  
}

    // READ (ID)
    async show(req, res) {
        try {
            const { id } = req.params;

        const curso = await CursoModel.findById(id);
        console.log(curso)
        if (!curso) {
            return res.status(404).json({ message: "Curso does not exist"});
        }

        return res.status(200).json(curso);

        } catch (error) {
            return res.status(404).json({ message: "failed to list curse"});
        }
    }

    //UPDATE
    async update(req, res) {
        try {
            const { id } = req.params;

            await CursoModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({message: "curse updated"});
        } catch (error) {
            return res.status(404).json({ message: "failed to update curse"});
        }
    }
    //DELETE
    async destroy(req, res) {
        try {
            const { id } = req.params;

            const curseDelete = await CursoModel.findByIdAndDelete(id);
            
            if (!curseDelete){
            return res.status(404).json({message: "Product doesnot exists"});
            }
            return res.status(200).json({message: "Curse Deleted"});
        } catch (error) {
            return res.status(404).json({ message: "failed to delete curse"});
        }
    }
}

module.exports = new CursoController();