import React from 'react'
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styles from '../../style/Posts.module.css'
import Card from '../../components/Card';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/helpers';

const queryClient = new QueryClient();

export default function Posts() {
  const [postId, setPostId] = React.useState(-1);
  return (
    <Layout
      title={'Post Page'}
      children={
        <>
          <QueryClientProvider client={queryClient}>
            {postId > -1 ? (
              <PostDetail postId={postId} setPostId={setPostId} />
            ) : (
              <PostsList setPostId={setPostId} />
            )}
            <ReactQueryDevtools initialIsOpen />
          </QueryClientProvider>
        </>
      }
    />
  )
}

function usePosts() {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get(
      baseUrl
    );
    return data;
  });
}

function usePost(postId) {
  return useQuery(["post", postId], () => getPostById(postId), {
    enabled: !!postId,
  });
}

const getPostById = async (id) => {
  const { data } = await axios.get(
    `${baseUrl}/${id}`
  );
  return data;
};

function PostsList({ setPostId }) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();
  const navigate = useNavigate();

  // console.log('data =>', status, data, error, isFetching );

  return (
    <div className={styles.wrap}>
      <h1><strong>Daftar Blogs</strong></h1>
      <hr className='mb-3 mt-3'/>
      <button className={styles.buttonSubmit} onClick={ (e) => {e.preventDefault(); navigate('/posts/create');} }>Create Post</button>
      <br />
      <br />

      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div className={styles.gridView}>
              {data.blogs.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.description}
                  onClick={() => setPostId(post.id)} 
                  style={
                    queryClient.getQueryData(["post", post.id])
                      ? {
                          fontWeight: "bold",
                          color: "green",
                        }
                      : {}
                  }
                />
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

function PostDetail({ postId, setPostId }) {
  const { status, data, error, isFetching } = usePost(postId);

  return (
    <div>
      <div>
        <button onClick={() => setPostId(-1)} href="#">
          Back
        </button>
      </div>
      {!postId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}
