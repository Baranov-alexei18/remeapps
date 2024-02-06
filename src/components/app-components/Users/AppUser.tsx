import React from "react";

import Users from "./Users.tsx";
import FormNewUser from "./FormNewUser.tsx";

import "./Users.style.css"

export interface InterfaceUser {
    id?: number | undefined,
    email?: string,
    name?: string,
    phone?: string,
    username?: string,
    website?: string,
}
interface IntUserExemple {
    users: Array<InterfaceUser>
}

class AppUser extends React.Component<{}, Readonly<IntUserExemple>>{
    constructor(props: any) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    email: "Sincere@april.biz",
                    name: "Leanne Graham",
                    phone: "1-770-736-8031 x56442",
                    username: "Bret",
                    website: "hildegard.org",
                },
                {
                    id: 2,
                    email: "Alexei@april.biz",
                    name: "Alexei Graham",
                    phone: "1-770-736-8031 x56442",
                    username: "Aexo",
                    website: "hildegard.org",
                }
            ]
        }
        this.addNewUser = this.addNewUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    render() {
        return (
            <div className="app-users">
                <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser} />
                <FormNewUser onAdd={this.addNewUser}></FormNewUser>
            </div>
        );
    }


    addNewUser(user: InterfaceUser): void {
        let lastUser = this.state.users[this.state.users.length - 1]
        const id = !lastUser ? 1 : lastUser.id as number + 1;
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }

    deleteUser(id: number): void {
        this.setState({ users: this.state.users.filter(item => item.id !== id) })
    }

    editUser(user: InterfaceUser): void {
        let users = this.state.users;
        for (const item of users) {
            if (item.id === user.id) {
                item.email = user.email;
                item.name = user.name;
                item.username = user.username;
                item.phone = user.phone;
                item.website = user.website;
            }
        }
        this.setState({ users: [] }, () => {
            this.setState({ users: [...users] })
        })
    }
}

export default AppUser
