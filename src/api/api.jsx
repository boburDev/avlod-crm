import React from 'react'
const Context = React.createContext()

const ApiProvider = ({children})=>{

    const [state, setState] = React.useState('')
    const isTester = false

    React.useEffect(()=>{

        const server = {
            server_dev: "http://192.168.100.9:4001",
            server_dev2: "http://192.168.43.4:4001",
            server_dev3: "http://92.168.100.9:4001",
            server_dev4: "http://localhost:4001",
            server_dep: "https://avlod21.herokuapp.com"
        }
        if (isTester) {
            // setState(server.server_dev)
            setState(server.server_dev4)
            // setState(server.server_dev3)
        } else {
            setState(server.server_dep)
        }
    }, [isTester])

    const value = {
        state,
        setState
    }
    
    return (
        <Context.Provider value={value}>
        <Context.Consumer>
            {
                ()=> children
            }
        </Context.Consumer>
        </Context.Provider>
    )
}

const useApi = (setterOnly) =>{
    const { state, setState } = React.useContext(Context)
    return setterOnly ? [setState] : [state,setState]
}

export {
    ApiProvider,
    useApi
}