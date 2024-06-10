import dotenv from "dotenv";
import { app } from "./app.express.js";

dotenv.config({
    path: "./.env"
});


(async () => {
    try {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is created successfully and listening at port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
})()



