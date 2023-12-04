import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
  // const history = useHistory();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [displayName, setDisplayName] = useState();
  // const { setUserData } = useContext(UserContext);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const userPost = await axios.post("/api/users", {
  //       email,
  //       password,
  //       displayName,
  //     });
      // localStorage.setItem("auth-token", userPost.data._id);
      // setUserData({ userId: userPost.data._id })
      // history.push("/");
    // } catch (err) {
    //   console.log(err);
    // }
    return (<>Signup</>);
  };
// }
export default Signup;
