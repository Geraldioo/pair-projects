npx sequelize model:create --name User --attributes name:string,email:string,password:string,role:string

npx sequelize model:create --name Profile --attributes fullName:string,email:string,gender:string,role:string,UserId:integer

npx sequelize model:create --name Category --attributes categoryName:string

npx sequelize model:create --name Product --attributes name:string,type:string,price:integer,stock:integer,imageUrl:string

npx sequelize model:create --name ProductHasCategory --attributes ProductId:integer,CategoriesId:integer

npx sequelize migration:create --name UserId-OnProduct

npx sequelize seed:create --name product

npx sequelize seed:create --name category




