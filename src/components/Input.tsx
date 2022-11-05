import { FC, useRef } from 'react'

export const Input: FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        inputRef.current?.select();
    }

    return (
        <>
            <input
                className='form-controller'
                type="text" ref={inputRef} 
            />
            <br />
            <button
                className="mt-3 btn btn-success"
                onClick={() => onClick()}
            >
                Focus
            </button>
        </>
    )
}
