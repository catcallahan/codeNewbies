import * as mysql from 'mysql';
import config from '../config'

const pool = mysql. createPool(config.mysql)

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err) console.log(err);
})


export const Query = (query: string, values?: Array< string | number >) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

import cards from './queries/DBcards'
import users from './queries/DBusers'

export default {
    cards,
    users
}

// Query('select * from cards WHERE cardid = ?',[1])





