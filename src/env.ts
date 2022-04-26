import { config } from 'dotenv';
config(); /**access to the environments variables */

interface Props {
    PORT:string 
}
if(!process.env.PORT) throw  new Error('SERVER-PORT NOT FOUND');


export default    {
	PORT : process.env.PORT // ENV to sever port
} as Props;