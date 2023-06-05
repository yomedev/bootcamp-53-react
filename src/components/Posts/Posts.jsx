import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../Button";

import { PostsItem } from "./PostsItem";
import { PostsLoader } from "./PostsLoader";
import { PostsSearch } from "./PostsSearch";
import { PostsError } from "./PostsError";
import { getPosts } from "../../services/postsServices";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

const pageLimit = 9;

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(fetchStatus.Idle);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const total = useRef(null);

  const fetchPosts = useCallback(async () => {
    setStatus(fetchStatus.Loading);
    try {
      const postsResponse = await getPosts({ page, search });
      if (page > 1) {
        setPosts((prev) => [...prev, ...postsResponse.articles]);
      } else {
        setPosts(postsResponse.articles);
      }
      setStatus(fetchStatus.Success);
      total.current = postsResponse.totalResults;
    } catch (err) {
      setStatus(fetchStatus.Error);
    }
  }, [page, search])


  useEffect(() => {
    fetchPosts();
  }, [page, search, fetchPosts]);

  const handleChangeSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  if (status === fetchStatus.Loading) {
    return <PostsLoader />;
  }

  return (
    <>
      <PostsSearch onSubmit={handleChangeSearch} />

      {status === fetchStatus.Error ? (
        <PostsError />
      ) : (
        <div className="container-fluid g-0">
          <div className="row">
            {posts?.map((post) => (
              <PostsItem key={post.url} post={post} />
            ))}
          </div>
        </div>
      )}

      {status === fetchStatus.Loading ? (
        <PostsLoader />
      ) : (
        total.current > page * pageLimit && (
          <div className="btn-group my-2 mx-auto btn-group-lg d-flex justify-content-center w-25">
            <Button onClick={handleNextPage}>Load more</Button>
          </div>
        )
      )}
    </>
  );
};

// export class Posts1 extends Component {
//   state = {
//     posts: null,
//     status: fetchStatus.Idle,
//     page: 1,
//     search: "",
//   };

//   total = null;

//   async componentDidMount() {
//     this.setState({ status: fetchStatus.Loading });
//     try {
//       const postsResponse = await getPosts();
//       this.setState({
//         posts: postsResponse.articles,
//         status: fetchStatus.Success,
//       });
//       this.total = postsResponse.totalResults;
//     } catch (err) {
//       this.setState({ status: fetchStatus.Error });
//     }
//     //  finally {
//     //   this.setState({ isLoading: false });
//     // }
//   }

//   async componentDidUpdate(_, prevState) {
//     const { page, search } = this.state;
//     if (prevState.page !== page || prevState.search !== search) {
//       try {
//         const postsResponse = await getPosts({ page, search });
//         this.setState((prev) => ({
//           posts:
//             page === 1
//               ? postsResponse.articles
//               : [...prev.posts, ...postsResponse.articles],
//           status: fetchStatus.Success,
//         }));
//         this.total = postsResponse.totalResults;
//       } catch (err) {
//         this.setState({ status: fetchStatus.Error });
//       }
//     }
//   }

//   handleChangeSearch = (search) => {
//     this.setState({ search, page: 1 });
//   };

//   handleNextPage = () => {
//     this.setState((prev) => ({ page: prev.page + 1 }));
//   };

//   render() {
//     const { posts, status, page } = this.state;

//     if (status === fetchStatus.Loading) {
//       return <PostsLoader />;
//     }

//     return (
//       <>
//         <PostsSearch onSubmit={this.handleChangeSearch} />

//         {status === fetchStatus.Error ? (
//           <PostsError />
//         ) : (
//           <div className="container-fluid g-0 pb-5 mb-5">
//             <div className="row">
//               {posts?.map((post) => (
//                 <PostsItem key={post.url} post={post} />
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="pagination">
//           <div className="btn-group my-2 mx-auto btn-group-lg">
//             {this.total > page * pageLimit && (
//               <Button onClick={this.handleNextPage}>Load more</Button>
//             )}
//             {/* {[...Array(9)].map((_, index) => (
//               <Button key={index}>{index + 1}</Button>
//             ))} */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
