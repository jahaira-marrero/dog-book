import React, {useState} from 'react';

function Dogs({image}) {
    const [claps, setClaps] = useState(100)
    // const [profile, setProfile] = useState(false)

    function handleClick() {
        setClaps(claps + 1)
    }

    // function handleProfileClick(){
    //    console.log(setProfile(!profile))
    // }


    return (
        <li className="card"> 
            <div className="image">
                <img src={image} alt=""></img>
                <button className="claps" onClick={handleClick}>
                👏{claps}
                 </button>
            </div>
        </li>
    )
}

export default Dogs;