import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi/Auxi';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // only update if show changes
        return nextProps.show !== this.props.show;
    }
    componentWillUpdate() {
        console.log('[Modal] ComponentWillUpdate');
    }
    
    render() {
        return (
            <Auxi>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={classes.Modal}
                    style={{
                            transform:this.props.show? 'translateY(0)': 'translateY(-100vh)',
                            opacity: this.props.show? '1': '0'
                    }}>
                    {this.props.children}            
                </div>        
            </Auxi>
        );
    }
}

export default Modal;