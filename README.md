### Inventory Manangement and accounting software

Tech stack:
NodeJS, Express, PostgreSQL, Handlebars, Semantic UI, JQuery, Express-sessions
Applying the MVC design pattern to build this app.

Hosted on AWS-ec2, RDS, CI/CD using buddy.io deploying on push to master


##### Instructions:
1. `npm install`
2. Configure and select DB to use in `./db.js`
3. Create tables `./tools/seed.sql`
4. run `node index.js`


Project structure
```
Express-MVC
├── /controllers
├── /helpers
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

#### Milestones:
General:
Automated Testing using Jest
Login with express session - DONE
Hashing Authentication
Authorization tables

Sales and Purchases:
Product categories for reporting - DONE
Basic Purchase searching - DONE
Deprecated items options - DONE
Sales invoicing - DONE
Sum up payment categories in sales
clear search field on modal close
save and autosave draft invoice
snp invoices edit function
Set pruduct par levels

Basic reporting:
Dashboard 
Credit / Outstanding reporting - DONE
Inv as at date. - DONE
COGS reporting
Export tablulations
Rebate calculation
Rebate levels setting


Meeting notes with stakeholder (Feedback on legacy system):
* SBII Search function is limited to only one field
* Retrieve costing is stupid
* Report is stupid, dont know costing per unit.


Bugs:
Need to do manual data validation for DatePicker
Duplicated from browser refresh
https://stackoverflow.com/questions/6718150/how-to-prevent-duplicate-posts-via-a-browser-refresh

# Developer reference:

#### Frontend
[A Step By Step Guide To Using Handlebars With Your Node js App](https://medium.com/@waelyasmina/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65)

#### On Deployment:

[Never run directly against NodeJS in Production](https://www.freecodecamp.org/news/you-should-never-ever-run-directly-against-node-js-in-production-maybe-7fdfaed51ec6/)

[pm2 - Process Manager quick start guide](https://pm2.keymetrics.io/docs/usage/quick-start/)

> Note: One should never `sudo` and run process directly on port 80, instead use this command:
`sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080`

[Reference: StackOverFlow](https://stackoverflow.com/questions/44911171/running-node-app-via-pm2-on-port-80)

CICD:
Deployed onto AWS EC2, running pm2 process manager
`pm2 start index.js --watch`
Using Github Actions to trigger buddy for CICD on push to master.

#### Housekeeping
Implement error handling middleware


#### On security
Implement sessions
https://github.com/scott88lee/express-middleware/blob/master/index.js

Implement pg store for sessions
https://www.npmjs.com/package/connect-pg-simple

On password hashing
https://crackstation.net/hashing-security.htm

#### Interesting techniques
On using console.log()
https://www.abhishekdeshmukh.com/blog/javascript-console-log-and-other-methods?fbclid=IwAR3qaXfinGYptSWn5oDELBMnEAtLHeHxowFCi_SJubhvD4_Czuw63ByDvpw