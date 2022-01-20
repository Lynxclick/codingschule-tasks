import { useState, createContext, useContext } from "react";

import usePosts from './usePosts'

const AppContext = createContext()

const useAppContext = () => useContext(AppContext)

function AppContextProvider({children}) {
    const {posts, addPost} = usePosts()
    const [token, setToken] = useState()
    //const [user, setUser] = useState()
    //const [posts, setPosts] = useState(postsExample)

    return  (
        <AppContext.Provider value={{posts, addPost, token, setToken}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, useAppContext}
