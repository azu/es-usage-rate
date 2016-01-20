# es-usage-rate

Analyze JavaScript and output result. 

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