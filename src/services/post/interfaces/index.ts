/**
 *  @interface 
 *  struct of the posts 
 *  @property   {string} pageName  - name of the post page
*   @property   {string} description - description post 
*   @property   {number} date - date of post 
*   @property   {number} likes -   number likes of post
*   @property   {number} comments - number comment of post 
*   @property   {number} share - number shares of post
 */
export interface Post {
    pageName:string
    description:string
    date:number
    likes:number
    comments:number 
    share:number
}