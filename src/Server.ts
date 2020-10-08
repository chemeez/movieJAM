import * as express from 'express';

class Server {
    // 초기화
    public app : express.Application;
    
    // 생성자
    constructor() {
        this.app = express();
    }

    public getInstance() : express.Application {
        return this.app;
    }
}

export default new Server();