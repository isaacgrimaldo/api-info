/*routes posts 
*  dev-url :http://localhost:8080/api/posts/
*  production-url: undefine
*/

import {Router} from 'express';
import Services from '../services/post';


const services = new Services();
const route = Router();

route.get('/', services.getPosts);

export default  route;