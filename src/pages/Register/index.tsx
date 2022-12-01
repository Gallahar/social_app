import styles from './index.module.scss'
import {Link} from 'react-router-dom'

const Register = () =>{
    return (
        <div className={styles.register}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <h1>Register</h1>
                    <form>
                        <input type='text' placeholder='UserName'/>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <input type='text' placeholder='Name'/>
                        <button>Register</button>
                    </form>

                </div>
                <div className={styles.right}>
                    <h1>Greetings!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa debitis illum in laborum, libero natus odio perferendis ?</p>
                    <span>Do you have an account?</span>
                    <Link to='/Login'>
                    <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Register