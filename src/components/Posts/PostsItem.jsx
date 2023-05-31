import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { cutString } from '../../helpers/cut-string';

// const post = {
//   id: 56,
//   title: '11 Amazing New JavaScript Features in ES13',
//   content: `Discover which loop or iterator suits your needs and prevent silly mistakes that hurt app performance.
//         In web development, JavaScript is the new sensation. It is not just JS frameworks like NodeJS, React, Angular Vue, etc, vanilla JS also has a large fan base. Now let’s talk about modern JavaScript. Almost every programming language uses loops. The modern JS language gives you a great deal of flexibility when it comes to iterating over values.
//         The question is, do you know which loop or iteration fits your needs best. A variety of options are available in for loops, including for , for(reverse), for…of , foreach , for…in , and for…await . The post presents one such debate.`,
//   image:
//     'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
//   views: 1,
//   preview_image:
//     'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
//   created_at: '2022-08-09T22:26:17.837322+00:00',
//   updated_at: null,
// };

const post = {
  "source": {
  "id": "engadget",
  "name": "Engadget"
  },
  "author": "Mariella Moon",
  "title": "White House proposes 30 percent tax on electricity used for crypto mining",
  "description": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a blog post on the White House website, the administration ha…",
  "url": "https://www.engadget.com/white-house-proposes-30-percent-tax-on-electricity-used-for-crypto-mining-090342986.html",
  "urlToImage": "https://s.yimg.com/uu/api/res/1.2/_0lUWxV0epaYKnRPQ1.Jxw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/5d8f2740-e97d-11ed-b4b3-dfb213c6d348.cf.jpg",
  "publishedAt": "2023-05-03T09:03:42Z",
  "content": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a… [+3408 chars]"
  }

export const PostsItem = ({post}) => {
  return (
    <div className="col-12 col-xl-4 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post.urlToImage}
          className="card-img-top"
          style={{ objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            {/* <li className="list-group-item">Views: {post.views}</li> */}
            <li className="list-group-item">Created: {formatDistanceToNow(new Date(post.publishedAt))} ago</li>
          </ul>

          <div className="d-flex">
            <button type="button" className="btn btn-danger">
              Delete post
            </button>

            <a href={`/posts/${post.url}`} className="btn btn-primary ms-3">
              Read post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};