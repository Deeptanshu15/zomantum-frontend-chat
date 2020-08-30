import React, {useState} from 'react'

function You(props) {

    const [name] = useState('Deeptanshu Sharma')
    const [about] = useState('Your description about you or status here')

    var displayName
    if(name.length>10)
        displayName = name.substring(0,9)+'...'
    else
        displayName = name


    var displayAbout
    if(about.length>10)
        displayAbout = about.substring(0,50)+'...'
    else
        displayAbout = about

    
    return (
        <div className="you" onClick={() => props.setContact({id: null, name: name, desc: about})}>
            
            <img src="images/photo-you.jpeg" className="your-img" alt="profile" />

            <div className="your-details">
                <h2>{displayName}</h2><br />
                <span>(YOU)</span><br />
                <div className="displayAbout">{displayAbout}</div>
            </div>
            
        </div>
    )
}

export default You
