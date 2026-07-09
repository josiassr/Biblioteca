module.exports = class LivrosDAO {

    constructor(){
        this.id3 = 0;
        this.usuario_id = 0;
        this.titulo = "";
        this.escritor = "";
        this.editora = "";
        this.ano_publicacao = 0;
        this.numero_edicao = 0;
        this.paginas = 0;
        this.categoria_id = 0;
        this.preco = 0;
    }
    
    setId3(i){
        this.setid3 = i;
    }
    getId3(){
        return this.id3;
    }

    setUsuario_id(u){
        this.usuario_id = u;
    }
    getUsuario_id(u){
        return this.usuario_id;
    }

    setTitulo(t){
        if (t == ''){
            throw "O campo titulo é obrigatório";
        } else if (t == ' '){
            throw "O campo titulo é obrigatório";
        } else {
            this.titulo = t;
        }
    }
    getTitulo(){
        return this.titulo;
    }

    setEscritor(e){
        if (e == ''){
            throw "O campo escritor é obrigatório";
        } else if (e == ' '){
            throw "O campo escritor é obrigatório";
        } else {
            this.escritor = e;
        }
    }
    getEscritor(){
        return this.escritor;
    }

    setEditora(d){
        if (d == ''){
            throw "O campo editora é obrigatório";
        } else if (d == ' '){
            throw "O campo editora é obrigatório";
        } else {
            this.editora = d;
        }
    }
    getEditora(){
        return this.editora;
    }

    setAno_publicacao(a){
        this.ano_publicacao = a;
    }
    getAno_publicacao(){
        return this.ano_publicacao;
    }

    setNumero_edicao(n){
        this.numero_edicao = n;
    }
    getNumero_edicao(){
        return this.numero_edicao;
    }

    setPaginas(p){
        this.paginas = p;
    }
    getPaginas(){
        return this.paginas;
    }

    setCategoria_id(c){
        this.categoria_id = c;
    }
    getCategoria_id(){
        return this.categoria_id;
    }

    setPreco(r){
        this.preco = r;
    }
    getPreco(){
        return this.preco;
    }

    create3(connection){
        var sql = "INSERT INTO Livros (usuario_id, titulo, escritor, editora, ano_publicacao, numero_edicao, paginas, categoria_id, preco) values (?,?,?,?,?,?,?,?,?)";
        
        connection.query(sql, [this.usuario_id, this.titulo, this.escritor, this.editora, this.ano_publicacao, this.numero_edicao, this.paginas, this.categoria_id, this.preco]),
        function (err, result) {
            if (err) throw err;
        }
    }

    list3(connection, callback){
        var sql = "SELECT * FROM Livros";

        connection.query(sql, function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    delete3(connection){
        var sql = "DELETE FROM Livros WHERE id = ?";

        connection.query(sql, [this.id3], function(err, result){
            if (err) throw err;
        });
    }

    buscarPorId3(connection, callback){
        var sql = "SELECT * FROM Livros WHERE id = ?";

        connection.query(sql, [this.id3], function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    update3(connection) {
        var sql = "UPDATE Livros SET usuario_id = ?, titulo = ?, escritor = ?, editora = ?, ano_publicacao = ?, numero_edicao = ?, paginas = ?, categoria_id = ?, preco = ? WHERE id = ?";

        connection.query(sql, [this.usuario_id, this.titulo, this.escritor, this.editora, this.ano_publicacao, this.numero_edicao, this.paginas, this.categoria_id, this.preco, this.id3], function (err, result) {
        if (err) throw err;
        });
    }

} 