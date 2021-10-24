import DialogsStyle from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
    .map( d => <Dialog id={d.id} name={d.name} />);
    
    let messagesElements = props.state.messages
        .map( m => <Message message={m.message} />);   

    return(
        <section className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={DialogsStyle.messages}>
                {messagesElements}
            </div>
        </section>
    );
}

export default Dialogs;
