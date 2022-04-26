import { config } from 'dotenv';
config(); /**access to the environments variables */



interface Props {
    PORT:string 
}


if(!process.env.PORT) throw  new Error('SERVER-PORT NOT FOUND');


const env:Props = {
	PORT:process.env.PORT
}; 

/**
 * environments variables
 * @property PORT = it the server port established in .env  
 */
export default env as Props;
	