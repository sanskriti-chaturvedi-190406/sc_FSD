import React, {useState} from 'react'

function Registration() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function getData(e){
    e.preventDefault();
    //alert(name+email+password);
    const data = {name, email, password};
    console.log(data);
  }

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div class="form-group">
        <label for="exampleInputName1">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Name"/>
        {/* {name} */}
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" onChange = {(e) => setEmail(e.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        {/* {email} */}
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" onChange = {(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary" onClick={getData}>Register</button>
    </form>
    </div>
  )
}

export default Registration