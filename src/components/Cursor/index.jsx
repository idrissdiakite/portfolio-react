import React from 'react';

import "./style.scss";

const Cursor = () => {

    const cursorRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => { // on écoute/récupère le mouvement de la souris 
            const {clientX, clientY} = e;
            // console.log(e)
            const mouseX = clientX - cursorRef.current.clientWidth / 2; // permet d'obtenir la position centrale de l'élément 
            const mouseY = clientY - cursorRef.current.clientHeight / 2;

            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            // console.log(cursorRef)
        })
    }, [])

    return (
        <div className="cursor" ref={cursorRef}>
            
        </div>
    );
};

export default Cursor;