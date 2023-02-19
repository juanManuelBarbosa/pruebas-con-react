import React, {useState, useEffect} from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);


    useEffect(()=>{
        //actualiza el titulo del documetno usando la browser API

        document.title = `vos clickeaste ${count} veces!`;
    });

    return(
        <div>
            <p>has hecho click {count} veces!</p>

            <button onClick={()=>{
                setCount(count + 1 )
            
            }}
                >clickeame!!!</button>
        </div>
    )


}


export default Contador;