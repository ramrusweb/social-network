import MessageStyle from './Message.module.css';

const Message = (props) => {
    return <div className={MessageStyle.message}>{props.message}</div>;
} 

export default Message;
