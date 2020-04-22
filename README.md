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

Meeting notes with stakeholder (Feedback on legacy system):
* SBII Search function is limited to only one field
* Retrieve costing is stupid
* Report is stupid, dont know costing per unit.
* Inv/Non inv item. (DONE)
* Update SKU and all past records are screwed. past records needs to be updated.

Info for product
```
SKU          / Brand    / Model      / Description           / MSRP  / MAP   / Inv
DEXP1231ACAS1/ Daddario / EXP1231CP  / 22" Cup with red logo / $9.90 / $8.90 / Yes
```

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

#### On Deployment:

https://www.freecodecamp.org/news/you-should-never-ever-run-directly-against-node-js-in-production-maybe-7fdfaed51ec6/

###### On pm2
https://pm2.keymetrics.io/docs/usage/quick-start/

Should never run process directly on port 80, instead use this command
`sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080`
https://stackoverflow.com/questions/44911171/running-node-app-via-pm2-on-port-80

CICD:
Deployed onto AWS EC2, running pm2 process manager
`pm2 start index.js --watch`
Using Github Actions to trigger buddy for CICD on push to master.