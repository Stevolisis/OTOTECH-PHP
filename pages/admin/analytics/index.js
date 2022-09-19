import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function AdminAnalytics(){
    const [viewsCount,setviewsCount]=useState('');
    const [commentsCount,setcommentsCount]=useState('')
    const [likesCount,setlikesCount]=useState('')
    const [usersCount,setusersCount]=useState('');
    const [articlesCount,setarticlesCount]=useState('')
    const [categoriesCount,setcategoriesCount]=useState('')

    const [viewCurrentYear,setviewCurrentYear]=useState('');
    const [viewCurrentMonth,setviewCurrentMonth]=useState('');
    const [likeCurrentYear,setlikeCurrentYear]=useState('');
    const [likeCurrentMonth,setlikeCurrentMonth]=useState('');
    const [commentCurrentYear,setcommentCurrentYear]=useState('');
    const [commentCurrentMonth,setcommentCurrentMonth]=useState('');
    const [userCurrentYear,setuserCurrentYear]=useState('');
    const [userCurrentMonth,setuserCurrentMonth]=useState('');
    const [articleCurrentYear,setarticleCurrentYear]=useState('');
    const [articleCurrentMonth,setarticleCurrentMonth]=useState('');
    const [categoryCurrentYear,setcategoryCurrentYear]=useState('');
    const [categoryCurrentMonth,setcategoryCurrentMonth]=useState('');

    const [viewStat,setviewStat]=useState({week1:[],week2:[],week3:[],week4:[],week5:[]});
    const [likeStat,setlikeStat]=useState({week1:[],week2:[],week3:[],week4:[],week5:[]});
    const [commentStat,setcommentStat]=useState({week1:[],week2:[],week3:[],week4:[],week5:[]});
    const [userStat,setuserStat]=useState({week1:[],week2:[],week3:[],week4:[],week5:[]});
    const [articleStat,setarticleStat]=useState({week1:[],week2:[],week3:[],week4:[],week5:[]});
    const [categoryStat,setcategoryStat]=useState({week1:[],week2:[],week3:[],week4:[],week5:[]});




   
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
            err,
            'warning'
        )           
    });
    }


    function loadCommentsCount(){
        axios.get('/api/comments/getCommentsCount')
        .then(res=>{
            let data=res.data.data;
            let status=res.data.status;
            if(status==='success'){
                console.log(data);
                setcommentsCount(data)
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
                err,
                'warning'
            )           
        });
    }

    function loadLikesCount(){
        axios.get('/api/likes/getLikesCount')
        .then(res=>{
            let data=res.data.data;
            let status=res.data.status;
            if(status==='success'){
                console.log(data);
                setlikesCount(data)
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
                err,
                'warning'
            )           
        });
    }

    function loadUsersCount(){
        axios.get('/api/users/getUsersCount')
        .then(res=>{
            let data=res.data.data;
            let status=res.data.status;
            if(status==='success'){
                console.log(data);
                setusersCount(data)
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
                err,
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
                err,
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
                    err,
                    'warning'
                )           
            });
        }



    function getViewStat(){
        axios.get(`/api/views/getViewStat?month=${viewCurrentMonth}&year=${viewCurrentYear}`)
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
setviewStat({['week1']:week1,['week2']:week2,['week3']:week3,['week4']:week4,['week5']:week5});

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




    function getLikeStat(){
        axios.get(`/api/likes/getLikeStat?month=${likeCurrentMonth}&year=${likeCurrentYear}`)
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
setlikeStat({['week1']:week1,['week2']:week2,['week3']:week3,['week4']:week4,['week5']:week5});

              console.log('luuup',likeStat.week1.length)
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


    function getCommentStat(){
        axios.get(`/api/comments/getCommentStat?month=${commentCurrentMonth}&year=${commentCurrentYear}`)
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
setcommentStat({['week1']:week1,['week2']:week2,['week3']:week3,['week4']:week4,['week5']:week5});

              console.log('luuup',commentStat.week1.length)
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


    function getUserStat(){
        axios.get(`/api/users/getUserStat?month=${userCurrentMonth}&year=${userCurrentYear}`)
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
setuserStat({['week1']:week1,['week2']:week2,['week3']:week3,['week4']:week4,['week5']:week5});

              console.log('luuup',userStat.week1.length)
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




    function getArticleStat(){
        axios.get(`/api/articles/getArticleStat?month=${articleCurrentMonth}&year=${articleCurrentYear}`)
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
setarticleStat({['week1']:week1,['week2']:week2,['week3']:week3,['week4']:week4,['week5']:week5});

              console.log('luuup',articleStat.week1.length)
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


    function getCategoryStat(){
        axios.get(`/api/categories/getCategoryStat?month=${categoryCurrentMonth}&year=${categoryCurrentYear}`)
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
setcategoryStat({['week1']:week1,['week2']:week2,['week3']:week3,['week4']:week4,['week5']:week5});

              console.log('luuup',categoryStat.week1.length)
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
        setviewCurrentMonth(dateNow.getMonth());
        setviewCurrentYear(dateNow.getFullYear())
        setlikeCurrentMonth(dateNow.getMonth());
        setlikeCurrentYear(dateNow.getFullYear())
        setcommentCurrentMonth(dateNow.getMonth());
        setcommentCurrentYear(dateNow.getFullYear())
        setuserCurrentMonth(dateNow.getMonth());
        setuserCurrentYear(dateNow.getFullYear())
        setarticleCurrentMonth(dateNow.getMonth());
        setarticleCurrentYear(dateNow.getFullYear())
        setcategoryCurrentMonth(dateNow.getMonth());
        setcategoryCurrentYear(dateNow.getFullYear())
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
        y: likeStat.week1.length,
      }, 
      {
        name:'week2',
        y: likeStat.week2.length,
      }, 
      {
        name:'week3',
        y: likeStat.week3.length,
      },
      {
        name:'week4',
        y: likeStat.week4.length,
      },
      {
        name:'week5',
        y: likeStat.week5.length,
      }]
    }],
    accessibility:{
        enabled:false
    },
    credits:false
  }


  const options3 = {
    title: {
      text: ''
    },
    chart:{
    type:'column'
    },
    xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4','Week 5']
    },
    series: [{
        name:'Comments',
      data: [commentStat.week1.length,commentStat.week2.length,commentStat.week3.length,
        commentStat.week4.length,commentStat.week5.length],
    }],
    accessibility:{
        enabled:false
    },
    credits:false
  }


  const options4 = {
    title: {
      text: ''
    },
    chart:{
    type:'line'
    },
    xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4','Week 5']
    },
    series: [{
        name:'Users',
      data: [userStat.week1.length,userStat.week2.length,userStat.week3.length,
        userStat.week4.length,userStat.week5.length]
    }],
    accessibility:{
        enabled:false
    },
    credits:false
  }



  
  const options5 = {
    title: {
      text: ''
    },
    chart:{
    type:'line'
    },
    xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4','Week 5']
    },
    series: [{
        name:'Articles',
      data: [articleStat.week1.length,articleStat.week2.length,articleStat.week3.length,
        articleStat.week4.length,articleStat.week5.length]
    }],
    accessibility:{
        enabled:false
    },
    credits:false
  }




  const options6 = {
    title: {
      text: ''
    },
    chart:{
    type:'column'
    },
    xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4','Week 5']
    },
    series: [{
        name:'Categories',
      data: [categoryStat.week1.length,categoryStat.week2.length,categoryStat.week3.length,
        categoryStat.week4.length,categoryStat.week5.length],
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
},[viewCurrentMonth,viewCurrentYear])

useEffect(()=>{
getLikeStat();
},[likeCurrentMonth,likeCurrentYear])

useEffect(()=>{
    getCommentStat();
},[commentCurrentMonth,commentCurrentYear])
     
useEffect(()=>{
    getUserStat();
},[userCurrentMonth,userCurrentYear])

useEffect(()=>{
    getArticleStat();
},[articleCurrentMonth,articleCurrentYear]);

useEffect(()=>{
    getCategoryStat();
},[categoryCurrentMonth,categoryCurrentYear])

useEffect(()=>{
loadCategoriesCount();
loadarticlesCount();
loadViewsCount();
loadCommentsCount();
loadLikesCount();
loadUsersCount();
},[])


    return(
        <>
        <div className='mainHeading'>
            <p>Analytics / Metrics</p>
        </div>

        <div className='adminstat1con' style={{marginTop:'7px'}}>
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
                <p>Total Likes</p>
                <p>{likesCount}</p>
                </div>
            </div>

            <div className='adminstat1'>
                <div className='adminstat1icon'>
                <div style={{background:'rgba(60, 179, 113,0.4)',color:'rgb(60, 179, 113)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Comments</p>
                <p>{commentsCount}</p>
                </div>
            </div>

        </div>




        <div className='adminstat1con'>
            <div className='adminstat1'>
                <div className='adminstat1icon'>
                    <div style={{background:'rgba(255, 124, 1,0.4)',color:'rgb(255, 124, 1)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Users</p>
                <p>{usersCount}</p>
                </div>
            </div>

            <div className='adminstat1'>
                <div className='adminstat1icon'>
                <div style={{background:'rgba(238, 130, 238,0.4)',color:'rgb(238, 130, 238'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Categories</p>
                <p>{categoriesCount}</p>
                </div>
            </div>

            <div className='adminstat1'>
                <div className='adminstat1icon'>
                <div style={{background:'rgba(230, 5, 5, 0.4)',color:'rgb(230, 5, 5)'}}>
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
        <div className='chartInfo'>Week 1 <p>(1th - 7th)</p></div>
        <div className='chartInfo'>Week 2 <p>(8th - 14th)</p></div>
        <div className='chartInfo'>Week 3 <p>(15th - 21th)</p></div>
        <div className='chartInfo'>Week 4 <p>(22th - 28th)</p></div>
        <div className='chartInfo'>Week 5 <p>(29th - 31th)</p></div>
        </div>
                <div className='chartfilterscon'>
                <select value={viewCurrentYear} onChange={(e)=>setviewCurrentYear(e.target.value)}>
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
                    <select value={viewCurrentMonth} onChange={(e)=>setviewCurrentMonth(e.target.value)}>
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
        <div className='chartInfo'>Week 1 <p>(1th - 7th)</p></div>
        <div className='chartInfo'>Week 2 <p>(8th - 14th)</p></div>
        <div className='chartInfo'>Week 3 <p>(15th - 21th)</p></div>
        <div className='chartInfo'>Week 4 <p>(22th - 28th)</p></div>
        <div className='chartInfo'>Week 5 <p>(29th - 31th)</p></div>
        </div>
                <div className='chartfilterscon'>
                <select value={likeCurrentYear} onChange={(e)=>setlikeCurrentYear(e.target.value)}>
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
                    <select value={likeCurrentMonth} onChange={(e)=>setlikeCurrentMonth(e.target.value)}>
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





        <div className='adminstat2con'>
            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Comments Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options3}
                />
                </div>
        <div className='chartfilterscon'>
        <div className='chartInfo'>Week 1 <p>(1th - 7th)</p></div>
        <div className='chartInfo'>Week 2 <p>(8th - 14th)</p></div>
        <div className='chartInfo'>Week 3 <p>(15th - 21th)</p></div>
        <div className='chartInfo'>Week 4 <p>(22th - 28th)</p></div>
        <div className='chartInfo'>Week 5 <p>(29th - 31th)</p></div>
        </div>
                <div className='chartfilterscon'>
                <select value={commentCurrentYear} onChange={(e)=>setcommentCurrentYear(e.target.value)}>
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
                    <select value={commentCurrentMonth} onChange={(e)=>setcommentCurrentMonth(e.target.value)}>
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
                <div className='adminstat2heading'><p>Users Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options4}
                />
                </div>
        <div className='chartfilterscon'>
        <div className='chartInfo'>Week 1 <p>(1th - 7th)</p></div>
        <div className='chartInfo'>Week 2 <p>(8th - 14th)</p></div>
        <div className='chartInfo'>Week 3 <p>(15th - 21th)</p></div>
        <div className='chartInfo'>Week 4 <p>(22th - 28th)</p></div>
        <div className='chartInfo'>Week 5 <p>(29th - 31th)</p></div>
        </div>
                <div className='chartfilterscon'>
                <select value={userCurrentYear} onChange={(e)=>setuserCurrentYear(e.target.value)}>
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
                    <select value={userCurrentMonth} onChange={(e)=>setuserCurrentMonth(e.target.value)}>
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



        <div className='adminstat2con'>
            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Articles Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options5}
                />
                </div>
        <div className='chartfilterscon'>
        <div className='chartInfo'>Week 1 <p>(1th - 7th)</p></div>
        <div className='chartInfo'>Week 2 <p>(8th - 14th)</p></div>
        <div className='chartInfo'>Week 3 <p>(15th - 21th)</p></div>
        <div className='chartInfo'>Week 4 <p>(22th - 28th)</p></div>
        <div className='chartInfo'>Week 5 <p>(29th - 31th)</p></div>
        </div>
                <div className='chartfilterscon'>
                <select value={articleCurrentYear} onChange={(e)=>setarticleCurrentYear(e.target.value)}>
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
                    <select value={articleCurrentMonth} onChange={(e)=>setarticleCurrentMonth(e.target.value)}>
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
                <div className='adminstat2heading'><p>Categories Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options6}
                />
                </div>
        <div className='chartfilterscon'>
        <div className='chartInfo'>Week 1 <p>(1th - 7th)</p></div>
        <div className='chartInfo'>Week 2 <p>(8th - 14th)</p></div>
        <div className='chartInfo'>Week 3 <p>(15th - 21th)</p></div>
        <div className='chartInfo'>Week 4 <p>(22th - 28th)</p></div>
        <div className='chartInfo'>Week 5 <p>(29th - 31th)</p></div>
        </div>
                <div className='chartfilterscon'>
                <select value={categoryCurrentYear} onChange={(e)=>setcategoryCurrentYear(e.target.value)}>
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
                    <select value={categoryCurrentMonth} onChange={(e)=>setcategoryCurrentMonth(e.target.value)}>
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