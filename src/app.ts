import express, { NextFunction, Request, Response } from 'express'
const app = express();
const port = 3000;

// parser
app.use(express.json())
app.use(express.text())

//
const userRouter = express.Router()
const courseRouter = express.Router()

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)

userRouter.get("/create-user", (req: Request, res: Response) => {
    try {
        res.send(somthing)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'failed to get data'
        })
    }


})


courseRouter.post('/create-course', (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'course is start next month',
        data: course
    })
})











const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log('middle ware request:', req.url, req.method, req.hostname);
    next()
}

app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello developer!')
})

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: 'successfully receive data'
    })
})


export default app;

