/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/Routes/index.ts":
/*!************************************!*\
  !*** ./src/server/Routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar DBcards_1 = __webpack_require__(/*! ../db/queries/DBcards */ \"./src/server/db/queries/DBcards.ts\");\nvar DBusers_1 = __webpack_require__(/*! ../db/queries/DBusers */ \"./src/server/db/queries/DBusers.ts\");\nvar router = express.Router();\nrouter.get(\"/api/cards\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.all()];\n            case 1:\n                cards = _a.sent();\n                res.json(cards);\n                return [2 /*return*/];\n        }\n    });\n}); }),\n    //select begginer cards front end\n    router.get(\"/api/begginerFE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var cards1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, DBcards_1.default.BFElevel()];\n                case 1:\n                    cards1 = _a.sent();\n                    res.json(cards1);\n                    return [2 /*return*/];\n            }\n        });\n    }); });\n//selct begginer cards back end\nrouter.get(\"/api/begginerBE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.BBElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select begginer database  cards\nrouter.get(\"/api/begginerDB\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.BDBlevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select Intermediate database\nrouter.get(\"/api/InterDB\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.IDBlevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select Intermediate front end\nrouter.get(\"/api/InterFE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.IFElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select Intermediate back end\nrouter.get(\"/api/InterBE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.IBElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select advanced back end\nrouter.get(\"/api/AdvanceBE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.ABElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select advanced front end\nrouter.get(\"/api/AdvanceFE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.AFElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select  adavnced database\nrouter.get(\"/api/AdvanceDB\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.ADBlevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/api/QuizFEB\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var quiz;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.QuizFEB()];\n            case 1:\n                quiz = _a.sent();\n                res.json(quiz);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select all users\nrouter.get(\"/api/users\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBusers_1.default.all()];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select single user\nrouter.get(\"/api/users/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBusers_1.default.one(req.params.id)];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//create user\n// format\n// //{\n//    \"userId\": 1,\n//    \"fullName\": \"Maddie Conaway\",\n//    \"email\": \"mc@ib.com\",\n//    \"userName\": \"maddie\",\n//    \"password\": \"robots1!\",\n//    \"skillLevel\": \"Beginner\"\n// }\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, DBusers_1.default.post(Number(req.body.userId), req.body.fullName, req.body.email, req.body.userName, req.body.password, req.body.skillLevel)];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [3 /*break*/, 3];\n            case 2:\n                e_1 = _a.sent();\n                console.log(e_1);\n                res.status(500).json(e_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/Routes/index.ts?");

/***/ }),

/***/ "./src/server/config /index.ts":
/*!*************************************!*\
  !*** ./src/server/config /index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nexports.default = {\n    mysql: {\n        host: process.env.DB_CODENEWBIE,\n        user: process.env.DB_USER,\n        password: process.env.DB_PASS,\n        database: process.env.DB_DATABASE\n    },\n    port: process.env.PORT\n};\n\n\n//# sourceURL=webpack:///./src/server/config_/index.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar config_1 = __webpack_require__(/*! ../config  */ \"./src/server/config /index.ts\");\nvar pool = mysql.createPool(config_1.default.mysql);\nexports.Connection = mysql.createConnection(config_1.default.mysql);\nexports.Connection.connect(function (err) {\n    if (err)\n        console.log(err);\n});\nexports.Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.Connection.query(query, values, function (err, results) {\n            if (err)\n                return reject(err);\n            return resolve(results);\n        });\n    });\n};\nvar DBcards_1 = __webpack_require__(/*! ./queries/DBcards */ \"./src/server/db/queries/DBcards.ts\");\nvar DBusers_1 = __webpack_require__(/*! ./queries/DBusers */ \"./src/server/db/queries/DBusers.ts\");\nexports.default = {\n    cards: DBcards_1.default,\n    users: DBusers_1.default\n};\n// Query('select * from cards WHERE cardid = ?',[1])\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/DBcards.ts":
/*!******************************************!*\
  !*** ./src/server/db/queries/DBcards.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\nexports.all = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT * FROM cards')];\n}); }); };\n//select begginer cards front end\nexports.BFElevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Front End\" and skillLevel=\"Beginner\";')\n        //selct begginer cards back end\n    ];\n}); }); };\n//selct begginer cards back end\nexports.BBElevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Back End\" and skillLevel=\"Beginner\";')\n        //select begginer database  cards\n    ];\n}); }); };\n//select begginer database  cards\nexports.BDBlevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Database\" and skillLevel=\"Beginner\";')\n        //select Intermediate front end\n    ];\n}); }); };\n//select Intermediate front end\nexports.IFElevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Front End\" and skillLevel=\"Intermediate\";')\n        //select Intermediate back end\n    ];\n}); }); };\n//select Intermediate back end\nexports.IBElevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Back End\" and skillLevel=\"Intermediate\";')\n        //select Intermediate database\n    ];\n}); }); };\n//select Intermediate database\nexports.IDBlevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Database\" and skillLevel=\"Intermediate\";')\n        //select advanced front end\n    ];\n}); }); };\n//select advanced front end\nexports.AFElevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Front End\" and skillLevel=\"Advanced\";')\n        //select advanced back end\n    ];\n}); }); };\n//select advanced back end\nexports.ABElevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Back End\" and skillLevel=\"Advanced\";')\n        //select  adavnced database\n    ];\n}); }); };\n//select  adavnced database\nexports.ADBlevel = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query('SELECT categoryLevel,skillLevel,cardTitle,cardText FROM Cards WHERE categoryLevel= \"Database\" and skillLevel=\"Advanced\";')\n        //Front End Quiz Begginer\n        //export const QuizFEB = async () => Query('select c.skillLevel, c.categoryLevel, c.cardText , q.answerText , q.correctAnswerfrom cards as c left join quizanswers as q on q.questionId = cardIdwhere c.categoryLevel=\"Front End\" and c.skillLevel=\"Begginer\";')\n    ];\n}); }); };\n//Front End Quiz Begginer\n//export const QuizFEB = async () => Query('select c.skillLevel, c.categoryLevel, c.cardText , q.answerText , q.correctAnswerfrom cards as c left join quizanswers as q on q.questionId = cardIdwhere c.categoryLevel=\"Front End\" and c.skillLevel=\"Begginer\";')\nexports.default = {\n    all: exports.all,\n    BFElevel: exports.BFElevel,\n    BBElevel: exports.BBElevel,\n    BDBlevel: exports.BDBlevel,\n    IFElevel: exports.IFElevel,\n    IBElevel: exports.IBElevel,\n    IDBlevel: exports.IDBlevel,\n    AFElevel: exports.AFElevel,\n    ABElevel: exports.ABElevel,\n    ADBlevel: exports.ADBlevel,\n};\n\n\n//# sourceURL=webpack:///./src/server/db/queries/DBcards.ts?");

/***/ }),

/***/ "./src/server/db/queries/DBusers.ts":
/*!******************************************!*\
  !*** ./src/server/db/queries/DBusers.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\nvar all = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, __1.Query(\"SELECT * FROM users\")];\n}); }); };\nvar one = function (id) {\n    return __1.Query(\"SELECT * FROM users WHERE userId = \" + id);\n};\nvar post = function (userId, fullName, email, userName, password, skillLevel) {\n    __1.Query(\"INSERT INTO users (userId, fullName, email, userName, password, skillLevel) VALUE(?,?,?,?,?,?)\", [userId, fullName, email, userName, password, skillLevel]);\n};\nexports.default = {\n    all: all,\n    one: one,\n    post: post,\n};\n\n\n//# sourceURL=webpack:///./src/server/db/queries/DBusers.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar DBcards_1 = __webpack_require__(/*! ../db/queries/DBcards */ \"./src/server/db/queries/DBcards.ts\");\nvar DBusers_1 = __webpack_require__(/*! ../db/queries/DBusers */ \"./src/server/db/queries/DBusers.ts\");\nvar router = express.Router();\nrouter.get(\"/api/cards\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.all()];\n            case 1:\n                cards = _a.sent();\n                res.json(cards);\n                return [2 /*return*/];\n        }\n    });\n}); }),\n    //select begginer cards front end\n    router.get(\"/api/begginerFE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var cards1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, DBcards_1.default.BFElevel()];\n                case 1:\n                    cards1 = _a.sent();\n                    res.json(cards1);\n                    return [2 /*return*/];\n            }\n        });\n    }); });\n//selct begginer cards back end\nrouter.get(\"/api/begginerBE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.BBElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select begginer database  cards\nrouter.get(\"/api/begginerDB\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.BDBlevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select Intermediate database\nrouter.get(\"/api/InterDB\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.IDBlevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select Intermediate front end\nrouter.get(\"/api/InterFE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.IFElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select Intermediate back end\nrouter.get(\"/api/InterBE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.IBElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select advanced back end\nrouter.get(\"/api/AdvanceBE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.ABElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select advanced front end\nrouter.get(\"/api/AdvanceFE\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.AFElevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select  adavnced database\nrouter.get(\"/api/AdvanceDB\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var cards1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBcards_1.default.ADBlevel()];\n            case 1:\n                cards1 = _a.sent();\n                res.json(cards1);\n                return [2 /*return*/];\n        }\n    });\n}); });\n// router.get(\"/api/QuizFEB\", async (req,res) => {\n//    let quiz = await DBcards.QuizFEB()\n//    res.json(quiz)\n// })\n//select all users\nrouter.get(\"/api/users\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBusers_1.default.all()];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//select single user\nrouter.get(\"/api/users/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, DBusers_1.default.one(req.params.id)];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [2 /*return*/];\n        }\n    });\n}); });\n//create user\n// format\n// //{\n//    \"userId\": 1,\n//    \"fullName\": \"Maddie Conaway\",\n//    \"email\": \"mc@ib.com\",\n//    \"userName\": \"maddie\",\n//    \"password\": \"robots1!\",\n//    \"skillLevel\": \"Beginner\"\n// }\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var users, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, DBusers_1.default.post(Number(req.body.userId), req.body.fullName, req.body.email, req.body.userName, req.body.password, req.body.skillLevel)];\n            case 1:\n                users = _a.sent();\n                res.json(users);\n                return [3 /*break*/, 3];\n            case 2:\n                e_1 = _a.sent();\n                console.log(e_1);\n                res.status(500).json(e_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Routes_1 = __webpack_require__(/*! ./Routes */ \"./src/server/Routes/index.ts\");\nvar Routes_2 = __webpack_require__(/*! ./Routes */ \"./src/server/Routes/index.ts\");\nvar config_1 = __webpack_require__(/*! ./config  */ \"./src/server/config /index.ts\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar app = express();\napp.use(express.static('public'));\napp.use(passport.initialize());\napp.use(morgan('dev'));\napp.use(express.json());\napp.use('/api', Routes_1.default);\napp.use('/api', Routes_2.default);\napp.use(routes_1.default);\napp.get(\"*\", function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\nparseInt('3000');\napp.listen(parseInt(config_1.default.port), function () { return console.log(\"Server listening on port: \" + parseInt(config_1.default.port)); });\n__webpack_require__(/*! ./db/index */ \"./src/server/db/index.ts\");\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });