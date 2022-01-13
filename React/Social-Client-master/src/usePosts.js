// Custom Hook
// Auslagerung von State Logik in eine eigene Datei

import {useState, useEffect} from 'react'

//const postsExample = [
//    {id: 1, author: "Ada Lovelace", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores"},
//    {id: 2, author: "Bill Gates", text: "Der Computer wurde zur Lösung von Problemen erfunden, die es früher nicht gab."}
//]

function usePosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            // Abfrage der API (HTTP)
            const owmURL = "http://127.0.0.1:8000/api2/posts"
            const result = await fetch(owmURL);
            // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
            const data = await result.json()
            //console.log(data)
            setPosts(data)
        }
        setInterval(getPosts, 5000);
    }, [])

    function addPost(newPost) {
        newPost.text !== "" && setPosts([ newPost, ...posts])
    }

    return {
        posts,
        addPost
    }
}

export default usePosts




