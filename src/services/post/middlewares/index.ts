import { NextFunction, Request, Response } from 'express';
import {validationResult,  check ,  matchedData} from 'express-validator';


class PostMiddlewares {
    
	private checkFields (req:Request ,  res:Response ,  next:NextFunction){
		req.body =  matchedData(req ,{
			includeOptionals:false,
		});

		const error = validationResult(req);
		if(!error.isEmpty()){
			return  res.status(400).json({
				ok:false,
				error:error.mapped()
			});
		}
		next();
	}   

	public postsList(){
		return [
			check('sizes','this field is required').notEmpty(),
			check('sizes','should be a number').isNumeric(),	
			check('max_comments','should be a number').isNumeric(),
			check('min_comments','should be a number').isNumeric(),
			check('max_likes','should be a number').isNumeric(),
			check('min_likes','should be a number').isNumeric(),
			check('max_shares','should be a number').isNumeric(),
			check('min_shares','should be a number').isNumeric(),
			// check('max-date','should be a number').isNumeric(),
			// check('min-date','should be a number').isNumeric(),
			this.checkFields
		];
	}
}


export default PostMiddlewares;