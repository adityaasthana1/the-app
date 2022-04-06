import express from 'express';


export const startServer = ()=>{
    const app = express();

    app.listen(
        6969,
        ()=>{
            console.log('hello world!');
        }
    )
}