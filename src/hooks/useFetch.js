import React, { useState, useEffect } from 'react'

export default function useFetch(url, update) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
         data ? setPosts(Object.entries(data)): setPosts([])

      });
  }, [update]);
  return { posts }
}
