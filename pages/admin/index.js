import axios from 'axios';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import {useState, useEffect, useLayoutEffect} from 'react';
import Swal from 'sweetalert2';

export default function Admin(){
    const [articlesCount,setarticlesCount]=useState('')
    const [categoriesCount,setcategoriesCount]=useState('')
    const [viewsCount,setviewsCount]=useState('');
    const [currentYear,setcurrentYear]=useState('');
    const [currentMonth,setcurrentMonth]=useState('');
    const [viewStat,setviewStat]=useState({week1:[],week2:[],week3:[],week4:[],week5:[]});


    
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

        function getViewStat(){
            axios.get(`/api/views/getViewStat?month=${currentMonth}&year=${currentYear}`)
            .then(res=>{
                let status=res.data.status;
                let data=res.data.data;

                if(status==='success'){
                    let week1=[]
                    let week2=[]
                    let week3=[]
                    let week4=[]
                    let week5=[]
                  for (let i = 0; i < data.length; i++) { 
                    if(data[i].day >= 1 && data[i].day <= 7){
                        week1.push(data[i])
                    }else if(data[i].day >= 8 && data[i].day <= 14){
                        week2.push(data[i])
                    }else if(data[i].day >= 15 && data[i].day <= 21){
                        week3.push(data[i])
                    }else if(data[i].day >= 22 && data[i].day <= 28){
                        week4.push(data[i])
                    }else if(data[i].day >= 29 && data[i].day <= 31){
                        week5.push(data[i])
                    }                   
                  }
                  console.log('ppppppp',week2)
    setviewStat({['week1']:week1,['week2']:week2,['week3']:week3,['week4']:week4,['week5']:week2});

                  console.log('luuup',viewStat.week1.length)
                }else{
                    Swal.fire(
                        'Unsuccessful',
                        status,
                        'warning'
                    )
                }
            }).catch(err=>{
                Swal.fire(
                    'Unsuccessful',
                    err,
                    'error'
                )
                console.log(err)
            })
        }

        function setTime(){
            const dateNow=new Date();
            setcurrentMonth(dateNow.getMonth());
            setcurrentYear(dateNow.getFullYear())
        }


        

    const options  = {
        title: {
          text: ''
        },
        chart:{
        type:'column'
        },
        xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4','Week 5']
        },
        yAxis:{
        title:{
            text:''
        }
        },
        series: [{
        name:'Views',
        data: [viewStat.week1.length, viewStat.week2.length, viewStat.week3.length,viewStat.week4.length,viewStat.week5.length]
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
        series: [{
            name:'Likes',
          data: [{
            name:'week1',
            y: 1,
          }, 
          {
            name:'week2',
            y: 2,
          }, 
          {
            name:'week3',
            y: 7,
          },
          {
            name:'week4',
            y: 6,
          },
          {
            name:'week5',
            y: 1,
          }]
        }],
        accessibility:{
            enabled:false
        },
        credits:false
      }

   
useEffect(()=>{
setTime();
},[])

useEffect(()=>{
    getViewStat();
},[currentMonth,currentYear])
      
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
    <div className='chartInfo'>Week 1 <p>(1 - 7 days)</p></div>
    <div className='chartInfo'>Week 2 <p>(8 - 14 days)</p></div>
    <div className='chartInfo'>Week 3 <p>(15 - 21 days)</p></div>
    <div className='chartInfo'>Week 4 <p>(22 - 28 days)</p></div>
    <div className='chartInfo'>Week 5 <p>(29 - 31 days)</p></div>
                </div>
                <div className='chartfilterscon'>
                    <select value={currentYear} onChange={(e)=>setcurrentYear(e.target.value)}>
                    <option value='2018'>2018</option>
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
                    <select value={currentMonth} onChange={(e)=>setcurrentMonth(e.target.value)}>
                    <option value='0'>January</option>
                    <option value='1'>February</option>
                    <option value='2'>March</option>
                    <option value='3'>April</option>
                    <option value='4'>May</option>
                    <option value='5'>June</option>
                    <option value='6'>July</option>
                    <option value='7'>August</option>
                    <option value='8'>September</option>
                    <option value='9'>October</option>
                    <option value='10'>November</option>
                    <option value='11'>December</option>
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
    <div className='chartInfo'>Week 1 <p>(1 - 7 days)</p></div>
    <div className='chartInfo'>Week 2 <p>(8 - 14 days)</p></div>
    <div className='chartInfo'>Week 3 <p>(15 - 21 days)</p></div>
    <div className='chartInfo'>Week 4 <p>(22 - 28 days)</p></div>
    <div className='chartInfo'>Week 5 <p>(29 - 31 days)</p></div>
                </div>
                <div className='chartfilterscon'>
                <select value={currentYear} onChange={(e)=>setcurrentYear(e.target.value)}>
                    <option value='2018'>2018</option>
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
                    <select value={currentMonth} onChange={(e)=>setcurrentMonth(e.target.value)}>
                    <option value='0'>January</option>
                    <option value='1'>February</option>
                    <option value='2'>March</option>
                    <option value='3'>April</option>
                    <option value='4'>May</option>
                    <option value='5'>June</option>
                    <option value='6'>July</option>
                    <option value='7'>August</option>
                    <option value='8'>September</option>
                    <option value='9'>October</option>
                    <option value='10'>November</option>
                    <option value='11'>December</option>
                    </select>
                </div>
            </div>

        </div>
        </>
    )
}