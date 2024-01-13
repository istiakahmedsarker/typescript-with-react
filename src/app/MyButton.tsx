import React from 'react';
interface MyButtonProps {
    text:string;
    onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default MyButton;