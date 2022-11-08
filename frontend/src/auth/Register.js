import React, {useState} from "react";
import { useHistory} from 'react-router-dom';

/** Register Form
 * 
 * Form manages update to state when form fields change
 * OnSubmit: calls signup function, redirects to "/"
 * 
 * Routes -> Register
 * 
 */

function Register({register}) {
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        let result = await register(formData);
        if(result.success) {
            history.push("/")
        }
    }

    return (
        <div>
            <h3>Yodlr Registration Portal</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <label>First Name</label>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />   
                </div>
                <div>
                    <button className="btn btn-primary float right">Register</button>
                </div>
            </form>
        </div>
    )

}

export default Register;