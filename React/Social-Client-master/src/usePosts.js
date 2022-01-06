// Custom Hook
// Auslagerung von State Logik in eine eigene Datei

import {useState, useEffect} from 'react'

//const postsExample = [
//    {id: 1, author: "Ada Lovelace", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores"},
//    {id: 2, author: "Bill Gates", text: "Der Computer wurde zur Lösung von Problemen erfunden, die es früher nicht gab."}
//]

function usePosts() {
    const [posts, setPosts] = useState([])

    function addPost(newPost) {
        newPost.text !== "" && setPosts([ newPost, ...posts])
    }

    return {
        posts,
        addPost
    }
}

export default usePosts




