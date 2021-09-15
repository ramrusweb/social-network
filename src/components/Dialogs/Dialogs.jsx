import DialogsStyle from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <section className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogs_items}>
                <div className={DialogsStyle.dialog}>
                    Ruslan
                </div>
                <div className={DialogsStyle.dialog + ' ' + DialogsStyle.active}>
                    Kamila
                </div>
                <div className={DialogsStyle.dialog}>
                    Evgeniy
                </div>
                <div className={DialogsStyle.dialog}>
                    Alexander
                </div>
                <div className={DialogsStyle.dialog}>
                    Said
                </div>
                <div className={DialogsStyle.dialog}>
                    Alexandra
                </div>
                <div className={DialogsStyle.dialog}>
                    Andrey
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