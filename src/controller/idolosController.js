import { jogadores } from "../model/idolosVasco.js";

export const getIndex = async (req, res) => {

  try{
    const idolosVasco = await jogadores.findAll();
    res.render('index.ejs', {
      idolosVasco
    } );

  }
  catch(err){
    req.send(err.message);
  }

  }

  export const getDetalhes = async (req, res) => {
    try {
        const idoloVasco = await jogadores.findByPk(req.params.id)
        res.status(200).render('detalhes.ejs', {
            idoloVasco
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getDelete = async (req, res) => {
  try {
      await jogadores.destroy({
          where: {
          id: req.params.id
      }})
      res.status(200).redirect("/")
  }
  catch(err){
      res.status(500).send({err: err.message})
  }
}


export const getCreate = (req, res) => {
  res.status(200).render('create')
}

export const postCreate = async (req, res) => {
  
  try {
      const { nome, posicao, img, anonascimento, quantosgols } = req.body
      await jogadores.create({
        nome, posicao, img, anonascimento, quantosgols
      })
      res.status(200).redirect('/')
  }
  catch(err){
      res.send(err.message)
  }

}

export const getEdit = async (req, res) => {
  const idoloVasco = await jogadores.findByPk(req.params.id)
  res.status(200).render('edit.ejs', {
      idoloVasco
  })
}

export const postEdit = async (req, res) => {
  const { nome, posicao, img, anonascimento, quantosgols } = req.body
  try {
      await jogadores.update({
          nome: nome, 
          posicao: posicao, 
          img: img, 
          anonascimento: anonascimento, 
          anonascimento: anonascimento, 
          quantosgols: quantosgols
      }, {
          where: {
              id: req.params.id
          }
      })

      res.redirect('/')
  }

  catch(err) {
      res.status(500).send(err.message)
  }
}