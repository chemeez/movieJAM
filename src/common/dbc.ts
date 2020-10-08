import { createConnection, Connection } from 'typeorm';

class DB_CONNECT {
    public async connection() {
        try {
            console.log('DB connecting...');
            const db:Connection = await createConnection();
            console.log('DB connected!');
            return db;
        } catch(error) {
            console.log("[ERROR] dbc.ts line 10 catch with error: " + error.message);
        }
    }
}

export default new DB_CONNECT();