"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookmarkrouter = express_1.default.Router();
const listuserbookmarks_1 = __importDefault(require("./listuserbookmarks"));
// import listbookmarkcontent from "./listbookmarkcontent"
const createbookmark_1 = __importDefault(require("./createbookmark"));
const deletebookmark_1 = __importDefault(require("./deletebookmark"));
// import createGroup from "./creategroup"
// import deleteGroup from "./deletegroup"
// /**
//  * @url /v1/bookmark/listcontent
//  * @method GET
//  * @description This will list all the content for a bookmark
//  * @param {string} access_token - The access_token from google. This is put in the headers
//  * @param {string} bookmarkid - The bookmarkid to list the content for
//  */
// bookmarkrouter.get("/listcontent", listbookmarkcontent)
/**
 * @url /v1/bookmark/listbookmarks
 * @method GET
 * @description This will list all the bookmarks for a user
 * @param {string} access_token - The access_token from google. This is put in the headers
 * @returns {object} - The user info
 *
 */
bookmarkrouter.get("/listbookmarks", listuserbookmarks_1.default);
/**
 * @url /v1/bookmark/createbookmark
 * @method POST
 * @description This will create a bookmark
 * @param {string} access_token - The access_token from google. This is put in the headers
 * @param {string} bookmarkname - The name of the bookmark. This is put in the body
 * @param {string} bookmarkurl - The url of the bookmark. This is put in the body
 * @param {string} bookmarkdescription - The description of the bookmark. This is put in the body
 * @returns {object} - The bookmark info
 */
bookmarkrouter.post("/createbookmark", createbookmark_1.default);
/**
 * @url /v1/bookmark/
 * @method DELETE
 * @param {string} bookmarkid - The bookmarkid to delete. This is put in the query string
 * @param {string} access_token - The access_token from google. This is put in the headers
 * @param {string} bookmarkid - The content id of the bookmark
 * @returns {object} - The bookmark info
 *
 */
bookmarkrouter.delete("/deletebookmark", deletebookmark_1.default);
// /**
//  * @url /v1/bookmark/creategroup
//  * @method POST
//  * @description This will create a bookmark group
//  * @param {string} access_token - The access_token from google. This is put in the headers
//  * @param {string} group_name - The name of the bookmark group. This is put as a query string
//  * @returns {object} - The bookmark group info
//  * 
//  */
// bookmarkrouter.post("/creategroup", createGroup)
// /**
//  * @url /v1/bookmark/deletegroup
//  * @method DELETE
//  * @description This will delete a bookmark group
//  * @param {string} access_token - The access_token from google. This is put in the headers
//  * @param {string} groupid - ID of the bookmark group. This is put as a query string
//  * @returns {object} - The bookmark group info
//  */
// bookmarkrouter.delete("/deletegroup", deleteGroup)
exports.default = bookmarkrouter;
