const express = require('express');
const app = express();
app.listen(8000, function(){
  console.log("Servidor no ar - Porta: 8000.")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql');
const { createConnection } = require('mongoose');
var con = mysql.createConnection({
  host: "localhost",
  user: "josias",
  password: "Fernanda14;/",
  database: "bdg"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Banco de dados conectado.");
});

const UsuariosDAO = require('./models/UsuariosDAO');

app.get('/', function(req, res){

  var usuario = new UsuariosDAO();
  usuario.list1(con, function(result){
      res.render('home.ejs', {usuarios: result});
  });
  
});

app.get('/1', function(req, res){

  var usuario = new UsuariosDAO();
  usuario.list1(con, function(result){
      res.render('lista1.ejs', {usuarios: result});
  });
  
});

app.get('/inserir1', function(req, res){
  res.sendFile(__dirname + '/views/form1.html');
}); 

  app.post('/salvar1', function(req, res){
    try {
      var usuarios = new UsuariosDAO();  
      
      usuarios.setNome(req.body.nome);
      usuarios.setSobrenome(req.body.sobrenome);
      usuarios.setEndereco(req.body.endereco);
      usuarios.setCidade(req.body.cidade);
      usuarios.setSigla_estado(req.body.sigla_estado);
      usuarios.setTelefone(req.body.telefone);
      usuarios.setTipo_usuario_id(req.body.tipo_usuario_id);
      
      if (req.body.acao1 == "Atualizar") {
        usuarios.setId1(req.body.id1);
        var retorno = usuarios.update1(con);
        res.sendFile(__dirname + '/views/resultado1.html');
      } else {
        if (req.body.acao1 == "Cancelar") {
          res.redirect("http://localhost:8000/1");
        } else {
          var retorno = usuarios.create1(con);
          res.sendFile(__dirname + '/views/resultado1.html');
        }
      }
  } catch (e) {
      res.render('erro1.ejs', {erro: e});
  }
}); 

app.get('/excluir1', function(req, res){
  var usuarios = new UsuariosDAO();
  usuarios.setId1(req.query.id1);

  var retorno = usuarios.delete1(con);

  res.sendFile(__dirname + '/views/resultado1.html');
});

app.get('/atualizar1', function(req, res){
  var usuarios = new UsuariosDAO();
  usuarios.setId1(req.query.id1);

  usuarios.buscarPorId1(con, function(result){
    res.render('form1.ejs', {usuarios:result});
  });
});

/*--------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------*/

const TipousuariosDAO = require('./models/TipousuariosDAO');

app.get('/2', function(req, res){

  var type = new TipousuariosDAO();
  type.list2(con, function(result){
      res.render('lista2.ejs', {tipousuariotu: result});
  });
  
});

app.get('/inserir2', function(req, res){
  res.sendFile(__dirname + '/views/form2.html');
});

app.post('/salvar2', function(req, res){
  try{
  var Tipousuarios = new TipousuariosDAO();  
  Tipousuarios.setTipo_usuario(req.body.tipo_usuario);
  Tipousuarios.setMulta_dia(req.body.multa_dia);
  Tipousuarios.setPrazo(req.body.prazo);
  
  if (req.body.acao2 == "Atualizar") {
    Tipousuarios.setId2(req.body.id2);
    var retorno = Tipousuarios.update2(con);
    res.sendFile(__dirname + '/views/resultado2.html');
    } else {
    if (req.body.acao2 == "Cancelar") {
      res.redirect("http://localhost:8000/2");
    } else {
      var retorno = Tipousuarios.create2(con);
      res.sendFile(__dirname + '/views/resultado2.html');
    }
    }
  } catch (e) {
    res.render('erro2.ejs', {erro: e});
}
}); 

app.get('/excluir2', function(req, res){
  var Tipousuarios = new TipousuariosDAO();
  Tipousuarios.setId2(req.query.id2);

  var retorno = Tipousuarios.delete2(con);

  res.sendFile(__dirname + '/views/resultado2.html');
});

app.get('/atualizar2', function(req, res){
	var Tipousuarios = new TipousuariosDAO();  
	Tipousuarios.setId2(req.query.id2);
	
	Tipousuarios.buscarPorId2(con, function(result){
		res.render('form2.ejs', {Tipousuarios: result});
    });
});

/*--------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------*/

const LivrosDAO = require('./models/LivrosDAO');

app.get('/3', function(req, res){

  var livro = new LivrosDAO();
  livro.list3(con, function(result){
      res.render('lista3.ejs', {livros: result});
  });
  
});

app.get('/inserir3', function(req, res){
  res.sendFile(__dirname + '/views/form3.html');
}); 

app.post('/salvar3', function(req, res){
  try {
  var livros = new LivrosDAO();  
  
  livros.setUsuario_id(req.body.usuario_id);
  livros.setTitulo(req.body.titulo);
  livros.setEscritor(req.body.escritor);
  livros.setEditora(req.body.editora);
  livros.setAno_publicacao(req.body.ano_publicacao);
  livros.setNumero_edicao(req.body.numero_edicao);
  livros.setPaginas(req.body.paginas);
  livros.setCategoria_id(req.body.categoria_id);
  livros.setPreco(req.body.preco);
  
  if (req.body.acao3 == "Atualizar") {
    livros.setId3(req.body.id3);
    var retorno = livros.update3(con);
    res.sendFile(__dirname + '/views/resultado3.html');
    } else {
    if (req.body.acao3 == "Cancelar") {
      res.redirect("http://localhost:8000/3");
    } else {
      var retorno = livros.create3(con);
      res.sendFile(__dirname + '/views/resultado3.html');
    }
    }
  }catch (e) {
    res.render('erro3.ejs', {erro: e});
}
}); 

app.get('/excluir3', function(req, res){
  var livros = new LivrosDAO();
  livros.setId3(req.query.id3);

  var retorno = livros.delete3(con);

  res.sendFile(__dirname + '/views/resultado3.html');
});

app.get('/atualizar3', function(req, res){
  var livros = new LivrosDAO();
  livros.setId3(req.query.id3);

  livros.buscarPorId3(con, function(result){
    res.render('form3.ejs', {livros:result});
  });
});

/*--------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------*/

const CategoriasDAO = require('./models/CategoriasDAO');

app.get('/4', function(req, res){

  var categorias = new CategoriasDAO();
  categorias.list4(con, function(result){
      res.render('lista4.ejs', {categorias: result});
  });
  
});

app.get('/inserir4', function(req, res){
  res.sendFile(__dirname + '/views/form4.html');
}); 

app.post('/salvar4', function(req, res){
  try{
  var categorias = new CategoriasDAO();  
  
  categorias.setCategoria(req.body.categoria);
  
  if (req.body.acao4 == "Atualizar") {
    categorias.setId4(req.body.id4);
    var retorno = categorias.update4(con);
    res.sendFile(__dirname + '/views/resultado4.html');
    } else {
    if (req.body.acao4 == "Cancelar") {
      res.redirect("http://localhost:8000/4");
    } else {
      var retorno = categorias.create4(con);
      res.sendFile(__dirname + '/views/resultado4.html');
    }
    }
  }catch (e) {
    res.render('erro4.ejs', {erro: e});
}
}); 

app.get('/excluir4', function(req, res){
  var categorias = new CategoriasDAO();
  categorias.setId4(req.query.id4);

  var retorno = categorias.delete4(con);

  res.sendFile(__dirname + '/views/resultado4.html');
});

app.get('/atualizar4', function(req, res){
  var categorias = new CategoriasDAO();
  categorias.setId4(req.query.id4);

  categorias.buscarPorId4(con, function(result){
    res.render('form4.ejs', {categorias:result});
  });
});

