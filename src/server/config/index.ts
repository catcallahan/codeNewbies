import * as dotenv from 'dotenv'

dotenv.config();

export default {
    mysql: {
        host: process.env.DB_CODENEWBIE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE 
    },
 port: process.env.PORT
}