const Sequelize = require("sequelize");
const battleModel = require("./models/Battle");
const dataFromFile = require("./csvjson");

const sequelize = new Sequelize("kingsBattle", "postgres", "dinesh", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

sequelize
  .authenticate()
  .then(async () => {
    console.log("Database Connected");
    await sequelize.sync();
    await Battle.findAndCountAll()
      .then(count => {
        let docCount = count;
        console.log("docCount : ", docCount.count);
        if (docCount.count > 0) {
          return;
        }
        Battle.bulkCreate(dataFromFile)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.error("Unable To Connect to Database", err));

let Battle = battleModel(sequelize, Sequelize);

module.exports = { Battle };
