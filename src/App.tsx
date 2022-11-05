import { Input } from './components/Input'
import { Person } from './components/Person'

export const App = () => {
    return (
        <>
            <h1 className='text-info'>React - Typescript</h1>
            <br />
            <Person name='Jesús' age={19} />
            <br />
            <Input />

        </>
    )
}
