import { config } from 'dotenv';
config();

interface Props {
    PORT:string 
}
if(!process.env.PORT) throw  new Error('SERVER-PORT NOT FOUND');


export default    {
	PORT : process.env.PORT
} as Props;