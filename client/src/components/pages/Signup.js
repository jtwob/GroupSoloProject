import React, {useState} from "react";
import axios from "axios";
import {UserContext, useContext} from '../../App'

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userPost = await axios.post("/api/users", {
        email,
        password,
        displayName,
      });
      setUserData({name: userPost.data.displayName, id: userPost.data._id })
    } catch (err) {
      console.log(err);
    }
  };
  
  return (<>Signup</>);
}
export default Signup;
