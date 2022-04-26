import { Request, Response } from 'express';
import { createPosts } from './helpers/createPosts';
import { Post } from './interfaces';

/**
 *  this Class will be responsible for checking the routes 
 * 	 - getPost() = create posts list and return it 
 */

class PostsServices {


	public getPosts (req:Request ,  res:Response){
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