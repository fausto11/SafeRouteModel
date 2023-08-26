import { Router } from "express";
import { deleteReport, getReport, getReports, getReportsCount, saveReport, updateReport } from "../controllers/reports";

const routers = Router();

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
routers.get('/reports', getReports);

/**
 * @swagger
 * /tasks/count:
 * get:
 * summary: Get all reports counter
 * tags: [Routes]
 */
routers.get('/reports/count', getReportsCount);

/**
 * @swagger
 * /tasks:
 * get:
 * summary: Get a report by id
 * tags: [Routes]
 */
routers.get('/reports/:id', getReport);

/**
 * @swagger
 * /tasks:
 * post:
 * summary: save a new report
 * tags: [Routes]
 */
routers.post('/reports', saveReport);

/**
 * @swagger
 * /tasks:
 * delete:
 * summary: Delete report id
 * tags: [Routes]
 */
routers.delete('/reports/:id', deleteReport);

/**
 * @swagger
 * /tasks:
 * put:
 * summary: Update report by id
 * tags: [Routes]
 */
routers.put('/reports/:id', updateReport);

export default routers;