import axios from 'axios';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import {useState, useEffect} from 'react';

export default function Admin(){
    const [articlesCount,setarticlesCount]=useState('')
    const [categoriesCount,setcategoriesCount]=useState('')
    const [viewsCount,setviewsCount]=useState('');


    
  function loadViewsCount(){
    axios.get('/api/views/getViewsCount')
    .then(res=>{
        let data=res.data.data;
        let status=res.data.status;
        if(status==='success'){
            console.log(data);
            setviewsCount(data)
        }else{
            Swal.fire(
                'Error',
                res.data.status,
                'warning'
            )
        }
    }).catch(err=>{
        Swal.fire(
            'Error',
            'Error Occured at Axios',
            'warning'
        )           
    });
    }

    function loadCategoriesCount(){
        axios.get('/api/categories/getCategoriesCount')
        .then(res=>{
            let data=res.data.data;
            let status=res.data.status;
            if(status==='success'){
                console.log(data);
                setcategoriesCount(data)
            }else{
                Swal.fire(
                    'Error',
                    res.data.status,
                    'warning'
                )
            }
        }).catch(err=>{
            Swal.fire(
                'Error',
                'Error Occured at Axios',
                'warning'
            )           
        });
        }
    
        function loadarticlesCount(){
            axios.get('/api/articles/getArticlesCount')
            .then(res=>{
                let data=res.data.data;
                let status=res.data.status;
                if(status==='success'){
                    console.log(data);
                    setarticlesCount(data)
                }else{
                    Swal.fire(
                        'Error',
                        res.data.status,
                        'warning'
                    )
                }
            }).catch(err=>{
                Swal.fire(
                    'Error',
                    'Error Occured at Axios',
                    'warning'
                )           
            });
            }
        

    const options  = {
        title: {
          text: ''
        },
        chart:{
        type:'column'
        },
        xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4']
        },
        yAxis:{
        title:{
            text:'Views per week'
        }
        },
        series: [{
          data: [1, 2, 10,6,9]
        }],
        accessibility:{
            enabled:false
        },
        credits:false
      }

      const options2 = {
        title: {
          text: ''
        },
        chart:{
        type:'pie'
        },
        xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4']
        },
        yAxis:{
        title:{
            text:'Views per week'
        }
        },
        series: [{
          data: [1, 2, 7,6]
        }],
        accessibility:{
            enabled:false
        },
        credits:false
      }

     
      
useEffect(()=>{
loadCategoriesCount();
loadarticlesCount();
loadViewsCount();
},[])


    return(
        <>
            <div className='mainHeading'><p>Dashboard</p></div>


            <div className='adminstat1con'>
            <div className='adminstat1'>
                <div className='adminstat1icon'>
                    <div style={{background:'rgba(255, 69, 0,0.4)',color:'rgb(255, 69, 0)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Views</p>
                <p>{viewsCount}</p>
                </div>
            </div>

            <div className='adminstat1'>
                <div className='adminstat1icon'>
                <div style={{background:'rgba(30, 144, 255,0.4)',color:'rgb(30, 144, 255)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Categories</p>
                <p>{categoriesCount}</p>
                </div>
            </div>

            <div className='adminstat1'>
                <div className='adminstat1icon'>
                <div style={{background:'rgba(60, 179, 113,0.4)',color:'rgb(60, 179, 113)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Articles</p>
                <p>{articlesCount}</p>
                </div>
            </div>
        </div>





        <div className='adminstat2con'>
            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Views Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options}
                />
                </div>
                <div className='chartfilterscon'>
                    <select>
                    <option defaultValue='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    </select>
                    <select>
                    <option defaultValue='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                    </select>
                </div>
            </div>

            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Likes Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options2}
                />
                </div>
                <div className='chartfilterscon'>
                    <select>
                    <option defaultValue='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    </select>
                    <select>
                    <option defaultValue='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                    </select>
                </div>
            </div>

        </div>
        </>
    )
}