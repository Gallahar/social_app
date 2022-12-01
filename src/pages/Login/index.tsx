import styles from './index.module.scss'
import {Link} from 'react-router-dom'

const Login = () =>{
    return (
        <div className={styles.login}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <h1>Hello there!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa debitis illum in laborum, libero natus odio perferendis ?</p>
                    <span>Do you want create a account?</span>
                    <Link to='/register'>
                    <button>Register</button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <h1>Login</h1>
                    <form>
                        <input type='text' placeholder='UserName'/>
                        <input type='password' placeholder='Password'/>
                        <button>Login</button>

                    </form>

                </div>
            </div>
        </div>
    )
}



export default Login