import React, {useState} from 'react';
import { Hint } from 'react-autocomplete-hint';
import './App.css';
import { MenuButton } from './App.js';


function Userform () {
    const [text, setText] = useState('')
    const dorms = ["Chase", "Fulton", "Nyland", "Tavilla", "Wilson", "Evans", "Ferrin", "Bromley", "Village"];


    return (
        <>
            <h1 className="text-center mt-3 margin70">Please review your order</h1>
            <input
                className="autocomplete"
                placeholder="Enter your name"
            />
            <Hint options={dorms} allowTabFill>
                <input
                    className="autocomplete"
                    placeholder="Enter your dorm"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    />
            </Hint>

            <input
                className="autocomplete"
                placeholder="Enter your phone #"
            />
            
            <MenuButton />
        </>

    )
}

export default Userform;