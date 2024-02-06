import React from "react";
import User from "./User.tsx";

import { InterfaceUser } from "../Users/AppUser.tsx"

interface ArrayUsers {
    users: Array<InterfaceUser>,
    onDelete: (id: number) => void,
    onEdit: (user: InterfaceUser) => void
}

class Users extends React.Component<ArrayUsers, any> {
    render() {
        if (this.props.users.length < 1) {
            return (
                <div className="list_wrapper">
                    <h2>Пользователей нет</h2>
                </div>
            )
        } else {
            return (
                <div className="list_wrapper">
                    {this.props.users.map((user) => (
                        <User user={user} key={user.id as number} findUser={this.props.onDelete} editUser={this.props.onEdit} />
                    ))}
                </div>
            )
        }
    }
}

export default Users