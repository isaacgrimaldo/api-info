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

class Server {

	private  readonly app:Application; 
	private  readonly port:string | undefined; 
	private  readonly paths:Paths = {
		adds:'/api/adds',
		post:'/api/posts'
	};
		

	constructor(){
		this.app = express();
		this.port = PORT;
		this.middlewares();
		this.routers();
	}
   
	/*middleware for all routes */
	private middlewares(){
		this.app.use(express.json());
		this.app.use(cors());
	}

	/*added the routers at server*/
	private routers(){
		this.app.use(this.paths.adds, adds);
		this.app.use(this.paths.post, post);
	}
     
	/*start up the server*/
	public listen(){
		this.app.listen( this.port , () =>{
			console.log('Server Running in port: ', this.port);
		});
	}

	
}


export default Server;