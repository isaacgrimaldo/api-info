import phrases from '../feature/phrases';

const getPhrases = ():string => {
	const i:number =  Math.floor(Math.random() * ((phrases.length -1) - 0 ));
	return  phrases[i]; 
}; 


export default getPhrases;