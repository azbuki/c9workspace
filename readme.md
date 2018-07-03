ensure mongoose is running ./mongod in the separate tab

mkdir v2_Mongo
cd v2_Mongo/
npm init
npm install ejs --save
npm install mongoose --save
npm install request --save
npm install express --save
npm install body-parser --save
//
name  | url  | verb | description
==================================
index | /foo | GET | start a page
new   | /foo/new | GET | display form 
create| /foo     | POST| Add new item
show  | /foo/:id | GET | shows info about one specific item for the id 


//
-- Show db.collection.drop() - remove everything from schema
Example:
terminal command prompt > mongo
show dbs
use <db_name>
show collections
db.<collection_name>.drop()
db.dropDatabase()
