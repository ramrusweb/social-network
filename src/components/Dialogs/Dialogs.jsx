import DialogsStyle from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Ruslan'},
        {id: 2, name: 'Kamila'},
        {id: 3, name: 'Evgeniy'},
        {id: 4, name: 'Alexander'},
        {id: 5, name: 'Said'},
        {id: 6, name: 'Alexandra'},
        {id: 7, name: 'Andrey'},
    ];
    
    let messages = [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'You study React?'}
    ];

    let dialogsElements = dialogs
        .map( d => <Dialog id={d.id} name={d.name}  />);

    let messagesElements = messages
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
