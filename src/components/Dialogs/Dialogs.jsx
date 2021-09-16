import DialogsStyle from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return(
        <section className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogs_items}>
                <div className={DialogsStyle.dialog}>
                    <NavLink to="/dialogs/1">Ruslan</NavLink>
                </div>
                <div className={DialogsStyle.dialog + ' '+ DialogsStyle.active}>
                    <NavLink to="/dialogs/2" className={DialogsStyle.active}>Kamila</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to="/dialogs/3">Evgeniy</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to="/dialogs/4">Alexander</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to="/dialogs/6">Said</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to="/dialogs/7">Alexandra</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to="/dialogs/8">Andrey</NavLink>
                </div>
            </div>
            <div className={DialogsStyle.messages}>
                <div className={DialogsStyle.message}>Hi</div>
                <div className={DialogsStyle.message}>How are you?</div>
                <div className={DialogsStyle.message}>Yo, man</div>
            </div>
        </section>
    );
}

export default Dialogs;