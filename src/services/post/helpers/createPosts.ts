import { Post } from '../interfaces';
import { generatorNumber } from './generateNums';
import getNamePage from './getPages';
import getPhrases from './getPhrases';
import { setDate } from './setDate';

interface Props {
	sizes:number, 
	max_comments:number
	min_comments:number
	max_likes: number
	min_likes: number
	max_shares: number
	min_shares: number
}


export const createPosts = ({sizes , 
	max_comments,  
	min_comments , 
	max_likes , 
	max_shares , 
	min_likes ,
	min_shares
}:Props):Post[] => {

	const posts:Post[] = [];
     
	// created a new element and push into posts array
	for (let i = 0; i < sizes; i++) {
		const post:Post = {} as Post;
		post.pageName = getNamePage(); // set the name of the post page
		post.comments = generatorNumber(max_comments , min_comments);
		post.date = setDate();
		post.description = getPhrases() ;
		post.share = generatorNumber(max_shares , min_shares);
		post.likes = generatorNumber(max_likes , min_likes);
		posts.push(post);
	}

	return posts;
};
