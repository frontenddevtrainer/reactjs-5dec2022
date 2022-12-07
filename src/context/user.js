import { createContext, useContext, useState } from "react";

const userContext = createContext();
const { Provider } = userContext;

function UserProvider(props){
    const { children } = props;
    const [user, setUser] = useState(null);

    return <Provider value={{ user, setUser }}>
        {children}
    </Provider>
}

const useUserContext = ()=>{ return useContext(userContext) };

export {
    UserProvider,
    userContext,
    useUserContext
}