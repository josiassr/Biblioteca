module.exports = class TipousuariosDAO {

    constructor(){
        this.id2 = 0;
        this.tipo_usuario = "";
        this.multa_dia = 0.0;
        this.prazo = 0;
    }

    setId2(i){
        this.id2 = i;
    }
    getId2(){
        return this.id2;
    }

    setTipo_usuario(t){
        if (t == ''){
            throw "O campo tipo de usuario é obrigatório";
        } else if (t == ' '){
            throw "O campo tipo de usuario é obrigatório";
        } else {
            this.tipo_usuario = t;
        }
    }
    getTipo_usuario(){
        return this.tipo_usuario;
    }

    setMulta_dia(m){
        if (isNaN(m) == true){
            throw "O campo Multa por dia deve ser numérico";           
        }else {
            this.multa_dia = m;
        }
    }
    getMulta_dia(){
        return this.multa_dia;
    }

    setPrazo(p){
        if (isNaN(p) == true){
            throw "O campo Prazo deve ser numérico";           
        }else {
            this.prazo = p;
        }
    }
    getPrazo(){
        return this.prazo;
    }

    create2(connection){
        var sql = "INSERT INTO TipoUsuarios (tipo_usuario, multa_dia, prazo) values (?,?,?)";
        
        connection.query(sql, [this.tipo_usuario, this.multa_dia, this.prazo]),
        function (err, result) {
            if (err) throw err;
        }
    }

    list2(connection, callback){
        var sql = "SELECT * FROM tipousuarios";

        connection.query(sql, function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    delete2(connection){
        var sql = "DELETE FROM TipoUsuarios WHERE id = ?";

        connection.query(sql, [this.id2], function(err, result){
            if (err) throw err;
        });
    }

    buscarPorId2(connection, callback){
        var sql = "SELECT * FROM Tipousuarios WHERE id = ?";

        connection.query(sql, [this.id2], function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    update2(connection) {
        var sql = "UPDATE Tipousuarios SET tipo_usuario = ?, multa_dia = ?, prazo = ? WHERE id = ?";

        connection.query(sql, [this.tipo_usuario, this.multa_dia, this.prazo, this.id2], function (err, result) {
        if (err) throw err;
        });
    }

} 