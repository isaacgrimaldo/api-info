import data  from '../feature/nombre';

/**
 * wil be responsible of get a page name from the data  and return it 
 * @returns pageName -  page name generate for the algorithm.
 */
const getNamePage  = ():string => {
	const i:number =  Math.floor(Math.random() * ((data.length -1) - 0) + 0); 
	return data[i];
};


export default getNamePage;