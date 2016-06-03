import express from 'express';
import restfulApi from '../modules/restfulApi';

const
	router = express.Router();

router.all('/', restfulApi.restful('root'));

export default router;