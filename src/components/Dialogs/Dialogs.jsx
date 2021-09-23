import DialogsStyle from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    return(
        <section className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogs_items}>
                <Dialog id="1" name="Ruslan" />
                <Dialog id="2" name="Kamila" />
                <Dialog id="3" name="Evgeniy" />
                <Dialog id="4" name="Alexander" />
                <Dialog id="5" name="Said" />
                <Dialog id="6" name="Alexandra" />
                <Dialog id="7" name="Andrey" />
            </div>
            <div className={DialogsStyle.messages}>
                <Message message="Hi, how are you?" />
                <Message message="What are you doing?" />
                <Message message="You study React?" />
            </div>
        </section>
    );
}

export default Dialogs;
