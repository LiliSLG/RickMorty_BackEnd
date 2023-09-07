require("dotenv").config();
const { PASSWORD } = process.env;
module.exports = [{ email: "ejemplo@gmail.com", password: PASSWORD }];
