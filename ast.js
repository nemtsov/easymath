exports.Program = Program;
exports.ProcedureStmt = ProcedureStmt;
exports.PlusExpr = PlusExpr;
exports.MinusExpr = MinusExpr;
exports.TimesExpr = TimesExpr;
exports.DivideExpr = DivideExpr;
exports.PowExpr = PowExpr;
exports.ParenExpr = ParenExpr;
exports.NumberLit = NumberLit;
exports.ConstantLit = ConstantLit;


//------------------------------------
function Program(node) {
  this.root = node;
}
Program.prototype.exec = function () {
  var v = this.root.exec();
  return v;
};


//------------------------------------
function ProcedureStmt(name, args) {
  this.name = name;
  this.args = args;
}
ProcedureStmt.prototype.exec = function () {
  var values = this.args.map(function (a) {
    return a.exec();
  });
  return Math[this.name].apply(Math, values);
};


//------------------------------------
function ParenExpr(arg) {
  this.arg = arg;
}
ParenExpr.prototype.exec = function () {
  var v = this.arg.exec();
  return v;
};


//------------------------------------
function PlusExpr(left, right) {
  this.left = left;
  this.right = right;
}
PlusExpr.prototype.exec = function () {
  var l = this.left.exec()
    , r = this.right.exec()
    , v = (l + r);
  return v;
};


//------------------------------------
function MinusExpr(left, right) {
  this.left = left;
  this.right = right;
}
MinusExpr.prototype.exec = function () {
  var l = this.left.exec()
    , r = this.right.exec()
    , v = (l - r);
  return v;
};


//------------------------------------
function TimesExpr(left, right) {
  this.left = left;
  this.right = right;
}
TimesExpr.prototype.exec = function () {
  var l = this.left.exec()
    , r = this.right.exec()
    , v = (l * r);
  return v;
};


//------------------------------------
function DivideExpr(left, right) {
  this.left = left;
  this.right = right;
}
DivideExpr.prototype.exec = function () {
  var l = this.left.exec()
    , r = this.right.exec()
    , v = (l / r);
  return v;
};


//------------------------------------
function PowExpr(left, right) {
  this.left = left;
  this.right = right;
}
PowExpr.prototype.exec = function () {
  var l = this.left.exec()
    , r = this.right.exec()
    , v = Math.pow(l, r);
  return v;
};


//------------------------------------
function NumberLit(value) {
  this.value = value;
}
NumberLit.prototype.exec = function () {
  var v = Number(this.value);
  return v;
};

//------------------------------------
function ConstantLit(name) {
  this.name = name;
}
ConstantLit.prototype.exec = function () {
  var v = Math[this.name];
  return v;
};
