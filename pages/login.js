import styles from '../styles/login.module.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import Router,{ useRouter } from 'next/router';
import { useLoader } from './_app';
import { baseUrl } from '../components/BaseUrl';

export default function Login(){
const router2=useRouter();
const {next}= router2.query;
const { loading, setloading } = useLoader();
// alert(next)

function handleSubmit(e){
        e.preventDefault();
        setloading(true)
        const formData=new FormData(e.target);
        axios.post(`/api/authentication/signin`,formData,{withCredentials:true})
        .then(res=>{
            let status=res.data.status;
            setloading(false)
            if(status==='success'){
            router2.push(baseUrl+next||`${baseUrl}/admin`);
            // router.push(next);
            
            }else{
            Swal.fire(
                'Alert!',
                `${status}`,
                'info'
            )
            }
        }).catch(err=>{
            setloading(false)
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