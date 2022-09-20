import styles from '../styles/login.module.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function Login(){
const router=useRouter();
const {next}=router.query;

// alert(next)

function handleSubmit(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        axios.post(`/api/authentication/signin`,formData,{withCredentials:true})
        .then(res=>{
            let status=res.data.status;

            if(status==='success'){
            router.push(next||'/admin');
            
            }else{
            Swal.fire(
                'Alert!',
                `${status}`,
                'info'
            )
            }
        }).catch(err=>{
            Swal.fire(
                'Alert!',
                 err,
                'error'
            )
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
            <input type='password' name='password'/>
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