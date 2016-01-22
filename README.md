# es-usage-rate

Analyze JavaScript and output usage rate of each syntax.

## What's is

The Analyzer parse code and process AST.

AST is defined by [estree/estree: The ESTree Spec](https://github.com/estree/estree "estree/estree: The ESTree Spec").

1. parse(Code) => AST
2. map(AST) => Nodes
3. reduce(Nodes) => Nodes
4. format(Nodes) => result!

## Installation

    npm install es-usage-rate

## Usage

### CLI

    $ es-usage-rate "src/**/*.js"
    
    [Options]
    
        --formatter formatter name - default: "line-by-line",
        --mapper: mapper name - default: "line-by-line",
        --reducer: reducer name - default: "identity"
    
    [stdin]
    
    $ cat file.js | es-usage-rate

### Use-case

Use this with [distribution](https://github.com/philovivero/distribution "distribution").

```sh
$ es-usage-rate "src/*.js" | distribution
                Key|Ct  (Pct)    Histogram
         Identifier|842 (35.47%) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
   MemberExpression|221  (9.31%) ▬▬▬▬▬▬▬▬▬▬▬▬▬
     CallExpression|176  (7.41%) ▬▬▬▬▬▬▬▬▬▬
        CommentLine|128  (5.39%) ▬▬▬▬▬▬▬
      StringLiteral|126  (5.31%) ▬▬▬▬▬▬▬
 VariableDeclarator| 95  (4.00%) ▬▬▬▬▬▬
VariableDeclaration| 95  (4.00%) ▬▬▬▬▬▬
     BlockStatement| 78  (3.29%) ▬▬▬▬▬
       CommentBlock| 74  (3.12%) ▬▬▬▬▬
ExpressionStatement| 69  (2.91%) ▬▬▬▬
     ObjectProperty| 63  (2.65%) ▬▬▬▬
     ThisExpression| 62  (2.61%) ▬▬▬▬
    TemplateElement| 35  (1.47%) ▬▬
    ReturnStatement| 32  (1.35%) ▬▬
   ObjectExpression| 26  (1.10%) ▬▬

```

Filter by ES6 node

## Reducer

`--reducer es6` filter by ES6 node

```sh
$ es-usage-rate --reducer es6 "src/**/*.js" | distribution --char=ba
                      Key|Ct  (Pct)    Histogram
VariableDeclaration:const|156 (44.07%) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
          TemplateElement| 75 (21.19%) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  VariableDeclaration:let| 32  (9.04%) ▬▬▬▬▬▬▬▬▬
          TemplateLiteral| 32  (9.04%) ▬▬▬▬▬▬▬▬▬
  ArrowFunctionExpression| 29  (8.19%) ▬▬▬▬▬▬▬▬
        AssignmentPattern| 12  (3.39%) ▬▬▬▬
            ObjectPattern|  6  (1.69%) ▬▬
         ClassDeclaration|  6  (1.69%) ▬▬
                ClassBody|  6  (1.69%) ▬▬
```

## Formatter

`--formatter json-by-file` output results of count by group.

```sh
es-usage-rate --formatter json-by-file --reducer es6 "src/**/*.js"
[{"@file":"src/cli/cli.js","ImportDeclaration":2,"ImportSpecifier":2,"ImportDefaultSpecifier":1,"ExportNamedDeclaration":2,"VariableDeclaration:const":1},{"@file":"src/es-usage-rate.js","ImportDeclaration":5,"ImportNamespaceSpecifier":1,"ImportSpecifier":4,"VariableDeclaration:const":11,"ArrowFunctionExpression":3,"ExportNamedDeclaration":2,"AssignmentPattern":2},{"@file":"src/formatter.js","ImportDeclaration":2,"ImportDefaultSpecifier":2,"ExportNamedDeclaration":1,"VariableDeclaration:const":1,"ArrowFunctionExpression":1},{"@file":"src/formatters/json-by-all.js","ImportDeclaration":1,"ImportSpecifier":1,"VariableDeclaration:const":4,"ArrowFunctionExpression":3,"VariableDeclaration:let":4,"ExportDefaultDeclaration":1,"ObjectPattern":1},{"@file":"src/formatters/json-by-file.js","ImportDeclaration":1,"ImportSpecifier":1,"ExportDefaultDeclaration":1,"ArrowFunctionExpression":1,"VariableDeclaration:const":1,"ObjectPattern":1},{"@file":"src/formatters/line-by-line.js","ExportDefaultDeclaration":1,"VariableDeclaration:let":1,"ArrowFunctionExpression":1,"VariableDeclaration:const":1,"ObjectPattern":1},{"@file":"src/mapper.js","ImportDeclaration":2,"ImportDefaultSpecifier":2,"ExportNamedDeclaration":1,"VariableDeclaration:const":1,"ArrowFunctionExpression":1},{"@file":"src/mappers/line-by-line.js","ImportDeclaration":2,"ImportDefaultSpecifier":1,"ImportSpecifier":1,"ExportDefaultDeclaration":1,"VariableDeclaration:const":2},{"@file":"src/parser.js","ExportNamedDeclaration":1},{"@file":"src/reducer.js","ImportDeclaration":2,"ImportDefaultSpecifier":2,"ExportNamedDeclaration":1},{"@file":"src/reducers/es6.js","VariableDeclaration:const":1,"ExportDefaultDeclaration":1,"ArrowFunctionExpression":2},{"@file":"src/reducers/identity.js","ExportDefaultDeclaration":1},{"@file":"src
```    

`--formatter json-by-all` output single object that sum of count by group.

```sh
es-usage-rate --formatter json-by-all --reducer es6 "src/**/*.js"
{"@file":"src/","ImportDeclaration":17,"ImportSpecifier":9,"ImportDefaultSpecifier":8,"ExportNamedDeclaration":9,"VariableDeclaration:const":25,"ImportNamespaceSpecifier":1,"ArrowFunctionExpression":12,"AssignmentPattern":2,"VariableDeclaration:let":5,"ExportDefaultDeclaration":7,"ObjectPattern":3,"TemplateLiteral":1,"TemplateElement":3}
```

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT