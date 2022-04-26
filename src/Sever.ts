import express , {Application} from 'express';
import cors from 'cors';

/*environment variables*/
import envs  from './env';
const {PORT} = envs;

/*routers*/
import {adds , post} from './routers';

interface Paths {
	post:string
	adds:string
}

/**
 *it is the server created with  express.js  and typescript
 */
class Server {

	/**
	 *  @property app express server application
	 *	@property port server port 
 	 * 	@property paths routers of  server 
	 */

	private  readonly app:Application; 
	private  readonly port:string | undefined; 
	private  readonly paths:Paths = {
		adds:'/api/adds',
		post:'/api/posts'
	};
		
	/**
	* @constructor 
	* start the necessary methods to start the server 
	*/
	constructor(){
		this.app = express();
		this.port = PORT;
		this.middlewares();
		this.routers();
	}
   
	/**
	 * @method middlewares
	 * initialize the main  middlewares for server cans to make request and response 
	 */
	private middlewares(){
		this.app.use(express.json());
		this.app.use(cors());
	}

	/**
	 * @method routers
	 * initialize the main routers and set their controls   
	 */
	private routers(){
		this.app.use(this.paths.adds, adds);
		this.app.use(this.paths.post, post);
	}
     
	/**
	 * @method listen
	 * responsible to get up the server using the property port
	 */
	public listen(){
		this.app.listen( this.port , () =>{
			console.log('Server Running in port: ', this.port);
		});
	}

	
}


export default Server;