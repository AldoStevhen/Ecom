1. Run Install
   npm init
   npm install express
   npm install nodemon -D
   npm i express mongoose
   npm install dotenv --save
   npm install bcrypt

2. Start API
   npm run dev
   Routes
   User

for register POST -> http://localhost:5000/api/auth/register
for login POST -> http://localhost:5000/api/auth/login
for update PUT -> http://localhost:5000/api/user/(id in mongoose)
for delete POST

Product
add product POST -> http://localhost:5000/api/product/create/new
get product GET -> http://localhost:5000/api/product?new=(the title)

=======================================================
#Users
model shcema of user
UserSchema
{
username: { type: String, required: true },
address: { type: String, required: true },
password: { type: String, required: true },
join_date: { type: Date, required: true },
phone_Num: { type: Number, required: true },
isAdmin: {
type: Boolean,
default: false,
},
},
{ timestamps: true }
);
=======================================================

POST /users (login)
for create user login and return new object
URL Params
/login
Headers
Content-Type: application/json
data params
{

\_id
62822ae6579e39fbe7c839d6

ObjectId
username
aldo

String
address
jln

String
password
$2b$10$AItllnwUhb4WyL6V4o1jC.LvynBuQHHSPCHOURvucbd.BpxRM4aAO

String
join_date
2019-12-31T16:00:00.000+00:00

Date
phone_Num
88

Int32
isAdmin
false

Boolean
createdAt
2022-05-16T10:43:50.073+00:00

Date
updatedAt
2022-05-16T10:43:50.073+00:00

Date
\_\_v
0

}

succes response
code: status(200)
Content: json(others);

failed response  
 code: status(500)
Content: json(err);

=======================================================
for register the user
POST /user

URL Params
/register
Headers
Content-Type: application/json
Data Params
{
username: { type: String, required: true },
address: { type: String, required: true },
password: { type: String, required: true },
join_date: { type: Date, required: true },
phone_Num: { type: Number, required: true },
isAdmin: {
type: Boolean,
default: false,
},
}
succes response
code: status(200)
Content: json(user);

failed response  
 code: status(500)
Content: json(err);

=======================================================
for create product
POST /product

URL Params
/create/new
Headers
Content-Type: application/json
Data Params
{
title_id: { type: String, required: true, unique: true },
name: { type: String, required: true },
categories: { type: Array },
quantity: { type: String },
price: { type: String },
}

succes response
code: status(200)
Content: json(savedProduct);

failed response  
 code: status(500)
Content: json(err);

=======================================================
for get product
GET /product

URL Params
/(can be new, or category)
Headers
Content-Type: application/json
Data Params
{
title_id: { type: String, required: true, unique: true },
name: { type: String, required: true },
categories: { type: Array },
quantity: { type: String },
price: { type: String },
}

succes response
code: status(200)
Content: json(product);

failed response  
 code: status(500)
Content: json(err);

=======================================================
for delete user
DELETE /:id
URL Params
/:id
Data Params
{
username: { type: String, required: true },
address: { type: String, required: true },
password: { type: String, required: true },
join_date: { type: Date, required: true },
phone_Num: { type: Number, required: true },
isAdmin: {
type: Boolean,
default: false,
},
}
succes response
code: status(200)
Content: json(deleteUser);

failed response  
 code: status(500)
Content: json(err);

=======================================================
