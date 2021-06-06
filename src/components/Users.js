import React, { Component } from 'react';
import User from "./User" 

class Users extends Component {
    render() {
        const { users ,deleteUser } =this.props;   // <User /> yerine component alımını böylede yapabiliriz

        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            const {id,name,email} = user;
                        // Aynı componentden birden fazla kez dönersek virtual domun bunu anlaması için uniqe key vermemiz lazım 
                            return <User
                                key= {id} 
                                id= {id}
                                name= {name}
                                email = {email}
                                deleteUser ={deleteUser} />;
                            
                        })
                    }
  
                </tbody>
            </table>

        );
    }
}

export default Users;



/*  App.js deki users verilerimi Users'a props(veri)olarak aktarmam lazım
Burdaki amaç oralarda bu arrayi kullanabilelim.Yoksa bunun statine başka bir componentden ulaşamam
(state management)
!! büyük programlarda state yönetimi için vuex veya redax gibi kütüphaneler kullanmalıyız
*/