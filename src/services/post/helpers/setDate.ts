 
export const setDate = ():Date => {

	const dateStart  =   '1/5/2001';
	const dateEnd  =   '10/8/2005';
	const init:string[] = dateStart.split('/');
	const end:string[]  = dateEnd.split('/');
    
    
	const dateDay = Math.floor( Math.random() * (Number(end[0]) - Number(init[0])) + Number(init[0]));  
	const dateMount = Math.floor( Math.random() * (Number(end[1]) - Number(init[1])) + Number(init[1]));
	const dateYear = Math.floor( Math.random() * (Number(end[2]) - Number(init[2])) + Number(init[2]));
	const dateHour = Math.floor( Math.random() * (24 - 0) - 0);
	const date = new Date(dateYear , dateMount , dateDay , dateHour);
	return date;
};