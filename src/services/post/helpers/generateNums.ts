
/**
 *  will be to generate a number  with a min and max range
 *  @param max - max number accepted 
 *  @param min - mix number  accepted
 *  @returns number generated - number of  created
 */
export const generatorNumber = (max:number , min:number):number => {
	if(min > max) throw new Error('you not can set a min value more bigger that a max value');
	return Math.floor(Math.random() * (max - min ) * min);
};

