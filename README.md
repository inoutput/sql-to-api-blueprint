sql-to-api-blueprint
====================


Generate base Apiary Markdown from SQL CREATE TABLE syntax.
Creates your basic GETs, POSTs, PUTs, and DELETEs.

Utilises [Blueprint AST JSON](https://github.com/apiaryio/api-blueprint-ast), and [Matter Compiler](https://github.com/apiaryio/matter_compiler) to then convert from AST to Blueprint API Markdown syntax.

To override any JSON AST nodes, simply create a mixin json file, and specify with the --mixin parameter
(see example)


# installation
- Clone this repo
- Install matter compiler (run 'bundle' to install required RubyGem)


# usage:
```
/sql2bp --input example/db.sql --mixin example/mixin.json --output example/blueprint.md
 ````

Parameters:

- --input - the SQL file to parse
- --mixin - Optional JSON mixin properties for AST
- --output - The output Markdown file


# notes:

This is using sqljs to parse SQL, and we have run into a few issues. Namely,

- BIT fields freak it out (currently replacing with TINYINT
- FOREIGN KEYs freak it out (do not include)