import React, { Component } from 'react';

class User extends Component {

    /*
        onDeleteClick = e => { //arrow fonksiyon ile yazarsak tekrardan aşşağıda bind etmemize gerek yok
            console.log("Clicked");
            console.log(this);
        
            <-- Aşşağıda bu şekilde kullanıyoruz -->
            <button onClick={this.onDeleteClick} className="btn btn-danger" > Delete</button>
        } */

    onDeleteClick(id,e) { //bind ile bağlamak için kullanılan method yapısı
        
       const {deleteUser}= this.props;
       deleteUser(id);
    
    }
    render() {
        const { id, name, email } = this.props;
        //bind ile o fonksiyonu o butona bağlamış olduk
        //kendi methodumuzu yazdıysak kesinlikle bind etmemiz lazım
        return (
            <tr>
                <td> {id} </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger" > Delete</button></td>
            </tr>
        );
    }
}
export default User;