import React from 'react'
const Context = React.createContext()

const ApiProvider = ({children})=>{

    const [state, setState] = React.useState('')
    const isTester = true

    React.useEffect(()=>{
        if (isTester) {
            setState('http://192.168.100.9:4000')
        }else {
            setState('http://192.168.43.4:4000')
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