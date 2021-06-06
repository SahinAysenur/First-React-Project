import React, {Component} from "react";
import AddUser from "./components/AddUser"  //AddUser componemtini çağırmak için
import Users from "./components/Users" 


class App extends Component {


  deleteUser(id){
    let updatedUsers = this.state.users;
    updatedUsers =updatedUsers.filter(user => user.id !==id);
    this.setState({
      users: updatedUsers

    })
  }

  //State tanımlama yöntem 1
  constructor(props){
    super(props); //Constructor içinde ilk olarak kesinlikle bu olmalı
    this.deleteUser=this.deleteUser.bind(this); //deleteUser fonksiyonunu bağlamak için constructor kullanarak bind ettik

    this.state={
      users : [
        {
          id:1,
          name:"Aysenur Yeter",
          email:"aysenuryeter@gmail.com"
        },
        {
          id : 2,
          name: "deneme ",
          email: "deneme@gmail.com"
        },
        {
          id : 3,
          name: "react",
          email: "react@gmail.com"
        }
      ]
    };
  }
  //constructor içinde sadece state tanımlaması yapacak isek şu tanımlamada kullanılabilir
  /* state={
     users:[]
   } */
render(){
  const title="User app";
  return (
    <div className="container">
      <h4>{title}</h4>
      <hr />
      <AddUser/>  {/* import edilen componenti kullanmak için */}
      <Users innerHTML="blue" deleteUser={this.deleteUser} users={this.state.users} />  {/* Users arrayimi alttakine props olarak gönderdik */}
     

    </div>
      );
}
}

export default App;
