import { createContext, useContext } from "react";

import usePosts from './usePosts'

const AppContext = createContext()

const useAppContext = () => useContext(AppContext)

function AppContextProvider({children}) {
    const {posts, addPost} = usePosts()
    //const [user, setUser] = useState()
    //const [posts, setPosts] = useState(postsExample)

    return  (
        <AppContext.Provider value={[posts, addPost]}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, useAppContext}
