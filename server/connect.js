import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"QqWwEe102938",
    database:"link_me"
})