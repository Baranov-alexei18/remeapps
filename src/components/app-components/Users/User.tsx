import React from "react";
import FormNewUser from "./FormNewUser.tsx";

import { InterfaceUser } from "../Users/AppUser.tsx"


interface OwnUser {
    user: InterfaceUser,
    key: number,
    findUser: (id: number) => void
    editUser: (user: InterfaceUser) => void
}

class User extends React.Component<OwnUser, { useEditForm: boolean }> {
    constructor(props: OwnUser | Readonly<OwnUser>) {
        super(props);
        this.state = {
            useEditForm: false
        }
    }
    render() {
        return (
            <div className="user_list">
                <div className="user_content" style={{ color: "white" }}>
                    <h1>{this.props.user?.name}</h1>
                    <p>{this.props.user?.email}</p>
                    <p>{this.props.user?.username}</p>
                    <p>{this.props.user?.phone}</p>
                </div>
                <div className="user_action">
                    <button id="edit_btn" onClick={() => this.setState({ useEditForm: !this.state.useEditForm })}>
                        {this.state.useEditForm ? "Убрать форму" : "Редактировать"}
                    </button>
                    <button type="button" id="delete_btn" onClick={() => { this.props.findUser(this.props.user.id as number) }}>
                        Удалить
                    </button>
                </div>

                {this.state.useEditForm && <FormNewUser user={this.props.user} onAdd={this.props.editUser} />}
            </div>
        )
    }
}

export default User