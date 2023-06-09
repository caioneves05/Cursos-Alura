import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = (req, res) => {
    livros.find()
      .populate('autor')
      .exec((err, livros) => {
        res.status(200).json(livros)
    })
  }

  static cadastrarLivro = (req, res) => {
    //Criando um livro
    let livro = new livros(req.body);

    livro.save((err) => {

      if(err){
        res.status(500).send({message: `${err.message} - Falha ao cadastrar o livro.`})
      }
      else{
        res.status(201).send(livro.toJSON());
      }

    })
  }
}

export default LivroController