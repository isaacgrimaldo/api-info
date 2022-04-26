import data  from '../feature/nombre';

/*get the page name from features*/
const getNamePage  = ():string => {
	const i:number =  Math.floor(Math.random() * ((data.length -1) - 0) + 0); 
	return data[i];
};


export default getNamePage;