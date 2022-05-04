import { FC } from "react";

type ContactsType = { email: string, phone: string };

export const Contacts: FC<ContactsType> = (props) => {
    return (
        <div className="textStyle">
            <h2>
                <i className="textName">Contacts:</i>
                <div className="text">Email: {props.email}</div>
                <div className="text">Phone: {props.phone}</div>
            </h2>
        </div>
    )
}