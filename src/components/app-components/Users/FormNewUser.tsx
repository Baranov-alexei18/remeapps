import React from "react";

import { InterfaceUser } from "../Users/AppUser.tsx"

interface IFormUser {
    user?: InterfaceUser,
    onAdd: (user: InterfaceUser) => void | Readonly<{}>
}

interface Form {
    email?: string | undefined,
    name?: string | undefined,
    username?: string | undefined,
    phone?: string | undefined,
    website?: string | undefined,
}

class FormNewUser extends React.Component<IFormUser, Readonly<Form>> {
    userAdd: InterfaceUser = {};
    valideForm: boolean = true;
    form: any;

    constructor(props: IFormUser | Readonly<IFormUser>) {
        super(props);

        this.state = {
            email: "",
            name: "",
            username: "",
            phone: "",
            website: "",
        };

    }

    handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

        if (this.state.email && this.state.name && this.state.username &&
            this.state.phone && this.state.website) {
            this.valideForm = false;
        }
    }

    render() {
        return (
            <form className="form_wrapper" ref={(el => this.form = el)}>
                <input placeholder="email" name="email" value={this.state.email} onChange={(e) => this.handleUserInput(e)} required></input>
                <input placeholder="name" name="name" value={this.state.name} onChange={(e) => this.handleUserInput(e)} required></input>
                <input placeholder="username" name="username" value={this.state.username} onChange={(e) => this.handleUserInput(e)} required></input>
                <input placeholder="phone" name="phone" value={this.state.phone} onChange={(e) => this.handleUserInput(e)} required></input>
                <input placeholder="website" name="website" value={this.state.website} onChange={(e) => this.handleUserInput(e)} required></input>
                <button type="button" disabled={this.valideForm} onClick={() => {
                    this.userAdd = {
                        email: this.state.email,
                        name: this.state.name,
                        username: this.state.username,
                        phone: this.state.phone,
                        website: this.state.website,
                    }
                    if (this.props.user) this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd);
                    this.form.reset();

                    this.setState({ email: "" });
                    this.setState({ name: "" });
                    this.setState({ username: "" });
                    this.setState({ phone: "" });
                    this.setState({ website: "" });

                    this.valideForm = true;


                }}>Добавить</button>
            </form>
        )
    }

}

export default FormNewUser