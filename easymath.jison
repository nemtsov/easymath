%lex
%%
\s+            /* skip whitespace */
"pi"           return 'PI'
"e"            return 'E'
\d+(?:\.\d+)?  return 'NUM'
[a-z]+         return 'PROC'
"("            return '('
")"            return ')'
"+"            return '+'
"-"            return '-'
"*"            return '*'
"/"            return '/'
"^"            return '^'
<<EOF>>        return 'EOF'

/lex

%{ var t = require('./ast'); %}

%left '+' '-'
%left '*' '/'
%left '^'

%ebnf

%%

program
  : expression EOF
    { return (new t.Program($1)) }
  ;

expression
  : PROC '(' expression ')'
      -> (new t.ProcedureStmt($1, [$3]))
  | expression '*' expression -> (new t.TimesExpr($1, $3))
  | expression '/' expression -> (new t.DivideExpr($1, $3))
  | expression '^' expression -> (new t.PowExpr($1, $3))
  | expression '+' expression -> (new t.PlusExpr($1, $3))
  | expression '-' expression -> (new t.MinusExpr($1, $3))
  | '(' expression ')'        -> (new t.ParenExpr($2))
  | NUM                       -> (new t.NumberLit($1))
  | E                         -> (new t.ConstantLit('E'))
  | PI                        -> (new t.ConstantLit('PI'))
  ;
