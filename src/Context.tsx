import { ReactElement, ReactFragment, createContext, useState } from 'react';



type globalContext = {
    apiResponse: any,
    setApiResponse: Function
}

type Props = {
    children: ReactElement | ReactFragment
}

const GlobalContext = createContext<globalContext | null>(null);

const GlobalProvider = ({children}:Props) => {
    const [apiResponse, setApiResponse] = useState();
    return (<GlobalContext.Provider value={{apiResponse, setApiResponse}}>
        {children}
    </GlobalContext.Provider>)
}

export { GlobalContext, GlobalProvider };