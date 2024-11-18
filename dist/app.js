"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
//
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
userRouter.get("/create-user", (req, res) => {
    try {
        res.send(somthing);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: ''
        });
    }
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'course is start next month',
        data: course
    });
});
const logger = (req, res, next) => {
    console.log('middle ware request:', req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(sothing);
    }
    catch (error) {
        next(error);
    }
}));
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: 'successfully receive data'
    });
});
//custom error
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: 'rout not found'
    });
});
//global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'something went wrong'
        });
    }
});
exports.default = app;
