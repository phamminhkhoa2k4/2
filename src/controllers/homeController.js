const conn = require("../config/database");

const homepage = async (req, res) => {
  const [row, fields] = await conn.execute(`SELECT * FROM users`);
  return res.render("index.ejs", { datauser: row });
};

const about = (req, res) => {
  res.send("Create by: Mr Thai");
};

const add = (req, res) => {
  res.render("register.ejs");
};

const detail = async (req, res) => {
  var id = req.params.id;
  var [user] = await conn.execute(`select * from users where id = ?`, [id]);
  return res.send(JSON.stringify(user[0]));
};

const edituser = async (req, res) => {
  var id = req.params.id;
  var [user] = await conn.execute(`select * from users where id = ?`, [id]);
  return res.render("edit.ejs", { datauser: user[0] });
};

const updateuser = async (req, res) => {
  var { name, email, phone, id } = req.body;
  console.log("Check request", req.body);
  await conn.execute("update users set name= ?,email=?,phone=? where id=?", [
    name,
    email,
    phone,
    id,
  ]);
  return res.redirect("/");
};

const deleteuser = async (req, res) => {
  const id = req.body.id;
  await conn.execute("delete from users where id=?", [id]);
  return res.redirect("/");
};


const createnew = async (req, res) => {
  const { name, email, phone } = req.body;
  await conn.execute("insert into users(name,email,phone) value(?,?,?)", [
    name,
    email,
    phone,
  ]);
  return res.redirect("/");
};
module.exports = {
  homepage,
  about,
  add,
  detail,
  edituser,
  updateuser,
  deleteuser,
  createnew,
};