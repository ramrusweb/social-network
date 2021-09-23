import {NavLink} from 'react-router-dom';
import DialogStyle from './Dialog.module.css';

const Dialog = (props) => {
    const path = "/dialogs/" + props.id;
    const name = props.name;
    return(
        <div className={DialogStyle.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

export default Dialog;
