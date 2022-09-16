import styles from '../styles/login.module.css';
import axios from 'axios'
import Swal from 'sweetalert2';

export default function Login(){

    function handleSubmit(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        axios.post('http://localhost:80/auth/signin',formData,{withCredentials:true})
        .then(res=>{
            let data=res.data.data;
            if(data==='success'){
            setTrigger(false);
            }else{
            Swal.fire(
                'Alert!',
                `${data}`,
                'info'
                )
            }
        }).catch(e=>{
            alert(e);
        })
     }

    return(
        <>
        <div className={styles.loginCon}>
        <div className={styles.signincon}>
            <div className={styles.siginheading}><p>Sign In</p></div>
            <form onSubmit={handleSubmit}>
            <div className={styles.admineditnamecon}>
            <div className={styles.admineditname}>
            <p style={{color:'black'}}>Email Address</p>
            <input type='email' name='email'/>
            </div>
        </div>
        <div className={styles.admineditnamecon}>
            <div className={styles.admineditname}>
            <p style={{color:'black'}}>Password</p>
            <input type='password' name='styles.password'/>
            </div>
        </div>
        <div className={styles.usereditbtn}>
        <button>SUBMIT</button>
        </div>
        </form>
        </div>
        </div>
        </>
    )
}