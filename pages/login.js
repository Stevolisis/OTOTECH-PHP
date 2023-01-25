import styles from '../styles/login.module.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useLoader } from './_app';
import { baseUrl, phpUrl } from '../components/BaseUrl';

export default function Login(){
const router=useRouter();
const {next}= router.query;
const {from}= router.query;
const { loading, setloading } = useLoader();

function handleSubmit(e){
        e.preventDefault();
        setloading(true)
        const formData=new FormData(e.target);
        axios.post(`${phpUrl}/ototech_api/ototech_api/authentication/staff-login.php`,formData,{withCredentials:true})
        .then(res=>{
            let status=res.data.status;
            setloading(false)
            if(status==='success'){
                if(router.pathname!==router.asPath.split('?')[0]){
                    router.reload();
                    // router.push(baseUrl+router.asPath||`${baseUrl}/admin`,{ shallow: true })
                }else{
                    router.push(next||`${baseUrl}/admin`);
                }
                        
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
                'Error Occured',
                 err.message,
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