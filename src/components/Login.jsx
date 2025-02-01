import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    // const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSublit = async() => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://nasal-cerulean-velvet.glitch.me/login`, { username, password });
            console.log(response.data)
            if (response.data.success) {
                console.log(response.data);
                const { token } = response.data;
                // login(token);
                navigate(`/quiz`);
            }
            else {
                console.log("Error")
            }
            }
        catch (err) {
            console.log(err)
        }
        // onLogin({ username, password })
        // navigate(`/quiz`);

    }

  return (
      <div> 
          <h2>Login</h2>
          <form onSubmit={handleSublit}>
              <input type='text' placeholder='Enter usser name' onChange={(e) => setUsername(e.target.value)} value={username} />
              <input type='password' placeholder='Enter the password' onChange={(e) =>setPassword(e.target.value)} value={password} />
              <input type='submit' value="Login"/>
          </form>
          {/* {error &&<p> { error }</p>} */}
    </div>
  )
}

export default Login