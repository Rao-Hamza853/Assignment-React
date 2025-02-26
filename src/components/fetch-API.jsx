import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts"
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState()

    const getPosts = async ()=>{
        try{
            let response = await fetch(URL);
            let data = await response.json()
            setPosts(data)
        }
        catch(error){
            console.log(error);   
        }
    }

    useEffect(() => {
        getPosts();
      }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-4xl font-bold mb-8 text-center text-[#0A5EB0]">Fetch and Display Posts From API</h2>
    <div className="grid grid-cols-12 gap-3 mb-6">
      {posts.map((post, index) => (
        <button
          key={index}
          onClick={()=>setSelectedPost(post)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {post.id}
        </button>
      ))}
    </div>
    {
        selectedPost && 
        <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200'>
            <h2 className="text-xl font-semibold pb-3"> <span className='text-2xl font-bold text-blue-700'>ID: </span> {selectedPost.id}</h2>
            <span className='text-2xl font-bold text-blue-700'>Title:</span>
            <h2 className="text-xl font-semibold pb-3"> {selectedPost.title}</h2>
            <span className='text-lg font-bold text-blue-600'>Body: </span>
            <p className="text-gray-600">{selectedPost.body}</p>
        </div>
    }
  </div>

  )
}

export default FetchAPI
