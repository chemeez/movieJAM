import { Router } from 'express';


const router = Router();

import * as echo from '../controllers/echo';
router.get('/', echo.echo);

//module.exports = router;  -> commonJs 방식
export default router; // ES6 방식

