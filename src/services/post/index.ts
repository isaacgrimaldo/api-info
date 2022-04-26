import { Request, Response } from 'express';
import { createPosts } from './helpers/createPosts';
import { Post } from './interfaces';


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
	public getPosts ( _:Request ,  res:Response){
		const sizes = 10;
		
		try {
			
			const post:Post[] = createPosts(sizes);
			return res.status(200).json({
				size:post.length -1,
				data:post
			});

		} catch (error) {
			console.log(error);
			return res.status(500).json({
				error:500,
				msg:'SERVER-ERROR'
			});
		}
	}

}


export default PostsServices;