module.exports = class CategoriasDAO {

    constructor(){
        this.id4 = 0;
        this.categoria = "";
    }
    
    setId4(i){
        this.id4 = i;
    }
    getId4(){
        return this.id4;
    }

    setCategoria(c){
        if (c == ''){
            throw "O campo categoria é obrigatório";
        } else if (c == ' '){
            throw "O campo categoria é obrigatório";
        } else {
            this.categoria = c;
        }
    }
    getCategoria(){
        return this.categoria;
    }


    create4(connection){
        var sql = "INSERT INTO Categorias (categoria) values (?)";
        
        connection.query(sql, [this.categoria]),
        function (err, result) {
            if (err) throw err;
        }
    }

    list4(connection, callback){
        var sql = "SELECT * FROM Categorias";

        connection.query(sql, function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    delete4(connection){
        var sql = "DELETE FROM Categorias WHERE id = ?";

        connection.query(sql, [this.id4], function(err, result){
            if (err) throw err;
        });
    }

    buscarPorId4(connection, callback){
        var sql = "SELECT * FROM Categorias WHERE id = ?";

        connection.query(sql, [this.id4], function(err, result){
            if (err) throw err;
            return callback(result);
        });
    }

    update4(connection) {
        var sql = "UPDATE categorias SET categoria = ? WHERE id = ?";

        connection.query(sql, [this.categoria, this.id4], function (err, result) {
        if (err) throw err;
        });
    }

} 