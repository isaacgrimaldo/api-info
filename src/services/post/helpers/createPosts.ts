import { Post } from '../interfaces';
import { generatorNumber } from './generateNums';
import getNamePage from './getPages';
import getPhrases from './getPhrases';
import { setDate } from './setDate';


/**
 * will be responsible to create a posts list  and return it 
 * @para sizes - number elements request for the client
 * @returns post - array full of Posts with   
 */
export const createPosts = (sizes:number):Post[] => {
	const posts:Post[] = [];
     
	// created a new element and push into posts array
	for (let i = 0; i < sizes; i++) {
		const post:Post = {} as Post;
		post.pageName = getNamePage(); // setthe name of the post page
		post.comments = generatorNumber(5000 , 1000);
		post.date = setDate();
		post.description = getPhrases() ;
		post.share = generatorNumber(5000 , 1000);
		post.likes = generatorNumber(5000 , 1000);
		posts.push(post);
	}

	return posts;
};
