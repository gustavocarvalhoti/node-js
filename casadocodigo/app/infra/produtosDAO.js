/*
module.exports = function () {
  //Exporta a function que tem o lista dentro
  return function (connection) {
    this.lista = function (callback) {
      connection.query('select * from livros', callback);
    };
    return this;
  }
};
*/

function ProdutosDAO(connection) {
  this._connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
  // Esse callback é assincrono, ele retorna a lista quando retornar do BD
  this._connection.query('select * from produto', callback);
};

ProdutosDAO.prototype.save = function (produto, callback) {
  this._connection.query('insert into produto set ?', produto, callback);
};

module.exports = function () {
  return ProdutosDAO;
};