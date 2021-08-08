import React, {useState} from 'react';

function Dogs({image, name}) {
    const [claps, setClaps] = useState(100)
    // const [profile, setProfile] = useState(false)

    function handleClick() {
        setClaps(claps + 1)
    }

    return (
        <li className="card"> 
            <div className="image">
                <img src={image} alt={name}></img>
                <button className="claps" onClick={handleClick}>
                👏{claps}
                 </button>
            </div>
            <h3>{name}</h3>
        </li>
    )
}

export default Dogs;
