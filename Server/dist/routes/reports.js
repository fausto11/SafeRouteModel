"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _reports = require("../controllers/reports");
var routers = (0, _express.Router)();

/**
 * @swagger
 * tags:
 * name: Routes
 * description: routes endpoint
 */

/**
 * @swagger
 * /tasks:
 * get:
 * summary: Get all reports
 * tags: [Routes]
 */
routers.get('/reports', _reports.getReports);

/**
 * @swagger
 * /tasks/count:
 * get:
 * summary: Get all reports counter
 * tags: [Routes]
 */
routers.get('/reports/count', _reports.getReportsCount);

/**
 * @swagger
 * /tasks:
 * get:
 * summary: Get a report by id
 * tags: [Routes]
 */
routers.get('/reports/:id', _reports.getReport);

/**
 * @swagger
 * /tasks:
 * post:
 * summary: save a new report
 * tags: [Routes]
 */
routers.post('/reports', _reports.saveReport);

/**
 * @swagger
 * /tasks:
 * delete:
 * summary: Delete report id
 * tags: [Routes]
 */
routers["delete"]('/reports/:id', _reports.deleteReport);

/**
 * @swagger
 * /tasks:
 * put:
 * summary: Update report by id
 * tags: [Routes]
 */
routers.put('/reports/:id', _reports.updateReport);
var _default = routers;
exports["default"] = _default;