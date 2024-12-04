import React from "react"

// Now here use User Class based component just refer User.js
// normal js function
// CLASS COMPONENT = has a class having render method which returns some piece of JSX
// react.component is a class which is given by react and user class is inheriting some property from it
class UserClass extends React.Component {

    // this render method will return a piece of jsx which will be displayed on UI

    // to receive props in class based compoent we will create a constructor ,
    // and this constructor will now receive this props
    constructor(props) {
        // take it as home work for why we write super(props)
        // ans By using super(props), we ensure that the constructor props are correctly passed to the parent constructor
        super(props);
        // state is reserved word over here contains state variables
        // this.state = {
        //     count: 0,
        //     count2: 2
        // }
        // console.log(props);
        
        this.state = { 
            userInfo: {
                name: "dummy",
                location: "default data",
                avatar_url: "https://dummyimage"
            }
         }
        // console.log("Child Constructor");
        
    }
    // this props can be access anywhere in this class component using this.porps
    // IMP whenever new instance of class is created a constructor is called


    // componentDidMount called after constructor and render 
    
    async componentDidMount() {
        // console.log("Child component did mount");
        // api call
        const data = await fetch("https://api.github.com/users/farhankhan1122")
        const json = await data.json()
        console.log(json,"json")
        this.setState({
            userInfo: json
        })
        
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo
        console.log("Child Render");
        // you can also desructure
        // const { name, location } = this.props
        const { count, count2 } = this.state
        return (
            <div className="user-card">
                <img className="card_avatar" width={60} height={60} src={avatar_url} alt="avatar" />
                {/* <button onClick={()=> {
                    // this.state.count = this.state.count + 1
                    // we never UPDATE state variable DIRECTLY using equal to in class component
                    this.setState({
                        count: this.state.count + 1
                    })
                    // above object will contain the updated value of the state variable
                    // you can use setState anywhere in class component
                    // whenever state change react will re render the component
                }}>plus</button> */}
                {/* <h1>class count2 : {count2}</h1> */}
              <div>
              <h2>Name: {name}</h2>
              <h3>Location: {location}</h3>
              <h4>Contact: #farhan khan</h4>
              </div>
            </div>
          );
    }

}

export default UserClass;
