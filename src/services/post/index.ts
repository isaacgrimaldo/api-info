import { Response } from 'express';
import { createPosts } from './helpers/createPosts';
import { Post } from './interfaces';

interface Request {
	body:{
		sizes:number
		max_comments:number
		min_comments:number
		max_likes:number
		min_likes:number
		max_shares:number
		min_shares:number
	}
}
/**
 *  class focused in the controls of the posts routes
 */
class PostsServices {
     
    
	/**
	 * GET method responsible to get information from the request and create the 
	 * posts list with that data
	 * @param _ express request 
	 * @param res express response
	 * @returns Summary object with {Post}
	 */
	public getPosts ( req:Request ,  res:Response){
		
		const {sizes,
			max_comments,
			min_comments ,
			max_likes , 
			max_shares ,
			min_likes ,
			min_shares} = req.body;
		
		try {
			
			const post:Post[] = createPosts({max_comments , sizes , min_comments,max_likes ,max_shares ,min_likes ,min_shares});
			return res.status(200).json({
				size:post.length -1,
				data:post
			});

		} catch (error) {
			console.log(error);
	
			if(error instanceof Error){ 
				return res.status(500).json({
					error:400,
					msg:error.message
				});
			}
		}
	}

}


export default PostsServices;