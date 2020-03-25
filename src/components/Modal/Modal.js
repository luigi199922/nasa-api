import React from 'react'
import './Modal.css'
import Transition from 'react-transition-group/Transition'
import Button from '../UI/Button/Button'

const animationTiming = {
    enter: 400,
    exit: 400,
}

const Modal = props => {
    return(
        <Transition
            in={props.show}
            timeout={animationTiming} 
            mountOnEnter
            unmountOnExit>
                {state => {
                        const classes =['Modal',
                                state === 'entering' ? 'ModalOpen' 
                                : state === 'exiting' ? 'ModalClosed' : null
                            ]
                        return (
                            <div className={classes.join(' ')}>
                                <h1>{props.title}</h1>
                                <img src={props.url} alt={props.alt}></img>
                                <Button btnType="Danger" clicked={props.closed}>Dismiss</Button>
                            </div>
                        )
                    }
                }          
        </Transition>
       
    )
}
export default Modal