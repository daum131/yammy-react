import React from 'react'

export default function Login() {

    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhodt:3000/login',{
                email,
                password,
            });

            console.log(response.data);
        }catch(error){
            console.error(error)
        }
    };


  return (
    <form>
        <label>
          Email:
          <input type="text" value="email" onChange ={ (e) => setEmail(e.target.value)}></input>
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

         <button type="submit">Login</button>
    </form>
  )
}
