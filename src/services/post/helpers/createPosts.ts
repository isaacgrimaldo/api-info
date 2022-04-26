import { Post } from '../interfaces';
import getNamePage from './getPages';


// will be response to create a posts list  and return it
export const createPosts = (sizes:number):Post[] => {
	const posts:Post[] = [];
     
	// created a new element and push into posts array
	for (let i = 0; i < sizes; i++) {
		const post:Post = {} as Post;
		post.pageName = getNamePage(); // setthe name of the post page
		post.comments = 100;
		post.date = new Date().getTime();
		post.description = 'dsadsada';
		post.share = 100;
		post.likes = 10;
		console.log(post.pageName);
		posts.push(post);
	}

	return posts;
};
