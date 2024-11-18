"use strict";
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
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'failed to get data'
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
app.get('/', logger, (req, res) => {
    res.send('Hello developer!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: 'successfully receive data'
    });
});
exports.default = app;
