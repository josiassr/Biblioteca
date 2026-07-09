module.exports = class UsuariosDAO {

    constructor(){
        this.id1 = 0;
        this.nome = "";
        this.sobrenome = "";
        this.endereco = "";
        this.cidade = "";
        this.sigla_estado = "";
        this.telefone = 0;
        this.tipo_usuario_id = 0;
    }
    
    setId1(i){
        this.id1 = i;
    }
    getId1(){
        return this.id1;
    }

    setNome(n){
        if (n == ''){
            throw "O campo nome é obrigatório";
        } else if (n == ' '){
            throw "O campo nome é obrigatório";
        } else {
            this.nome = n;
        }
    }
    getNome(){
        return this.nome;
    }

    setSobrenome(s){
        if (s == ''){
            throw "O campo Sobrenome é obrigatório";
        } else if (s == ' '){
            throw "O campo Sobrenome é obrigatório";
        } else {
            this.sobrenome = s;
        }
    }
    getSobrenome(){
        return this.sobrenome;
    }

    setEndereco(e){
        this.endereco = e;
    }
    getEndereco(){
        return this.endereco;
    }

    setCidade(c){
        this.cidade = c;
    }
    getCidade(){
        return this.cidade;
    }

    setSigla_estado(q){
        this.sigla_estado = q;
    }
    getSigla_estado(){
        return this.sigla_estado;
    }

    setTelefone(t){
        this.telefone = t;
    }
    getTelefone(){
        return this.telefone;
    }

    setTipo_usuario_id(w){
        if (isNaN(w) == true){
            throw "O campo Id do tipo de usuários deve ser numérico";           
        }else {
            this.tipo_usuario_id = w;
        }
    }
    getTipo_usuario_id(){
        return this.tipo_usuario_id;
    }

    create1(connection){
        var sql = "INSERT INTO Usuarios (nome, sobrenome, endereco, cidade, sigla_estado, telefone, tipo_usuario_id) values (?,?,?,?,?,?,?)";
        
        connection.query(sql, [this.nome, this.sobrenome, this.endereco, this.cidade, this.sigla_estado, this.telefone, this.tipo_usuario_id]),
        function (err, result) {
            if (err) throw err;
        }
    }

    list1(connection, callback){
        var sql = "SELECT * FROM usuarios";

        connection.query(sql, function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    delete1(connection){
        var sql = "DELETE FROM usuarios WHERE id = ?";

        connection.query(sql, [this.id1], function(err, result){
            if (err) throw err;
        });
    }

    buscarPorId1(connection, callback){
        var sql = "SELECT * FROM usuarios WHERE id = ?";

        connection.query(sql, [this.id1], function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    update1(connection) {
        var sql = "UPDATE usuarios SET nome = ?, sobrenome = ?, endereco = ?, cidade = ?, sigla_estado = ?, telefone = ?, tipo_usuario_id = ? WHERE id = ?";

        connection.query(sql, [this.nome, this.sobrenome, this.endereco, this.cidade, this.sigla_estado, this.telefone, this.tipo_usuario_id, this.id1], function (err, result) {
        if (err) throw err;
        });
    }

} 