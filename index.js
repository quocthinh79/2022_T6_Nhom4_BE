const { createPool } = require("mysql");
const express = require("express");
var app = express();
const POST = 9999;
const fs = require("fs");

const db = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "data_warehouse",
  multipleStatements: true,
});

app.get("/weather/import-data/:fileName", (req, res) => {
  let fileName = req.params.fileName;
  const sql = `truncate weatherdata_staging;LOAD DATA INFILE 'C:/Users/Admin/Downloads/${fileName}.csv' INTO TABLE weatherdata_staging FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\\n' IGNORE 1 ROWS;`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/handle-staging", (req, res) => {
  const sql = `CALL initStaging();`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/handle-data-warehouse", (req, res) => {
  const sql = `CALL initDataWarehouse();`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get(
  "/filelog/handle-write-log/:fileName/:logDate/:actionLog/:status",
  (req, res) => {
    let file_name = req.params.fileName;
    let log_date = req.params.logDate;
    let action_log = req.params.actionLog;
    let status = req.params.status;
    const sql = `CALL writeLog('${file_name}', '${log_date}', '${action_log}', '${status}');`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  }
);

app.get("/weather/get-city", (req, res) => {
  const sql = `SELECT data_warehouse.TinhThanhPho, city_dim.city_name FROM data_warehouse JOIN city_dim on data_warehouse.TinhThanhPho = city_dim.id WHERE data_warehouse.ngay_het_han = 7671`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(JSON.stringify(data));
  });
});

app.get("/weather/thoi-tiet-hien-tai/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietHienTai(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/thoi-tiet-ngay-mai/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietNgayMai(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/thoi-tiet-ngay-mot/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietNgayMot(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/thoi-tiet-ba-ngay-toi/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietBaNgayToi(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/thoi-tiet-bon-ngay-toi/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietBonNgayToi(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/thoi-tiet-nam-ngay-toi/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietNamNgayToi(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/thoi-tiet-sau-ngay-toi/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietSauNgayToi(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/weather/thoi-tiet-bay-ngay-toi/:cityId", (req, res) => {
  let cityId = req.params.cityId;
  const sql = `CALL thoiTietBayNgayToi(${cityId});`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/delete-file/:fileNameCsv", (req, res) => {
  let fileNameCsv = req.params.fileNameCsv;
  fs.unlinkSync(`C:\\Users\\Admin\\Downloads\\${fileNameCsv}.csv`);
  res.send("Delete File");
});

app.listen(POST, () => {
  console.log(POST);
});
0;
