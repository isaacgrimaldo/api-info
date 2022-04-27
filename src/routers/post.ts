/*routes posts 
*  dev-url :http://localhost:8080/api/posts/
*  production-url: undefine
*/

import {Router} from 'express';
import Services from '../services/post';
import Middleware from '../services/post/middlewares';

const services = new Services();
const middlewares = new Middleware();
const route = Router();

route.get('/',[
	...middlewares.postsList()
],services.getPosts);

export default  route;