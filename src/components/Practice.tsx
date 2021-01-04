import { useState } from 'react'

interface State_Type {
    foo: number;
    bar: string;
}

function Practice(): React.ReactNode {
    const [bool, setBool] = useState<boolean>(false)
    const [state, setState] = useState<State_Type>({
        foo: 1,
        bar: 'Hello'
    })

    const someMethod = (obj: State_Type) => {
        setState(obj)
    }
    //const [user, setUser] = useState<IUser | null>(null);
    return <div>
        <button onClick={() => setBool(props => !props)}> toggle</button>
        {bool ? 'Hello' : 'World'}
    </div>
}

export default Practice