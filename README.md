### Express-MVC

##### Instructions:
1. `npm install`
2. Configure and select DB to use in `./db.js`
3. run `node index.js`

misc: seed DB with `./tools/seed.sql`

Project structure
```
Express-MVC
├── /controllers
├── /model
├── /node_modules*
├── /public
├── /routes
├── /tools
├── /views
│   ├── /layouts
│   ├── /partials
│   ├── err404.hbs
│   ├── index.hbs
│   └── login.hbs
├── index.js
├── db.js
├── package.json
└── README.md
```

Tech stack:
NodeJS, Express, PostgreSQL, Handlebars, Semantic UI, JQuery
Applying the MVC design pattern to build this app.

TBD: 
Automated Testing using Jest

Meeting notes with stakeholder:
SBII Search function is limited to only one field, stupid
Retrieve costing is stupid
Report is stupid, dont know costing per unit.
Inv/Non inv item.
Update SKU and all past records are screwed. past records needs to be updated.

Info for product
SKU          / Brand    / Model      / Description           / MSRP  / MAP   / Inv
DEXP1231ACAS1/ Daddario / EXP1231CP  / 22" Cup with red logo / $9.90 / $8.90 / Yes

Info for Inv purchases
1. Date
2. Inv number
3. Add product
4. Cost
5. Qty

Weight Avg cost
Weight is recalculated after every purchase.
Cost is recorded every sale.

#Developer reference

#### Handlebars:
###### Very good
https://medium.com/@waelyasmina/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65
###### Not so good
https://hackersandslackers.com/handlebars-templates-expressjs/
