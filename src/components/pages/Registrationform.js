
import './style.css'
const RegistrationForm =()=> {

   

    return(
        <div className="form">
             <input type="text" placeholder="Firstname" />
             <input type="text" placeholder="Lastname" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="Confirmpassword" />
            <div className="login-btn">Register</div>
                
        </div>

    )
}

export default RegistrationForm