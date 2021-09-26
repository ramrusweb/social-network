import DialogsStyle from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Ruslan'},
        {id: 2, name: 'Kamila'},
        {id: 3, name: 'Evgeniy'},
        {id: 4, name: 'Alexander'},
        {id: 5, name: 'Said'},
        {id: 6, name: 'Alexandra'},
        {id: 7, name: 'Andrey'},
    ];

    let messagesData = [
        {message: 'Hi, how are you?'},
        {message: 'What are you doing?'},
        {message: 'You study React?'}
    ];

    return(
        <section className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogs_items}>
                <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
                <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
                <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
                <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
                <Dialog id={dialogsData[4].id} name={dialogsData[4].name} />
                <Dialog id={dialogsData[5].id} name={dialogsData[5].name} />
                <Dialog id={dialogsData[6].id} name={dialogsData[6].name} />
            </div>
            <div className={DialogsStyle.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </section>
    );
}

export default Dialogs;
