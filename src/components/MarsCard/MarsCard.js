import React from 'react'
import Button from '../UI/Button/Button'

const MarsCard = props => {
    const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed']
    return (
        <div className={cssClasses.join(' ')}>
            <h1>Mars Photo</h1>
            <img src={props.url} alt={props.alt}></img>
            <Button btnType="Danger" clicked={props.closed}>Dismiss</Button>
        </div>
    )
}
export default MarsCard