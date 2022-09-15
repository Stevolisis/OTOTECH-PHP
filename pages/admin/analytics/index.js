import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';

export default function AdminAnalytics(){
    const options = {
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
          data: [1, 2, 7,6]
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
            text:'Likes per week'
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


      const options3 = {
        title: {
          text: ''
        },
        chart:{
        type:'line'
        },
        xAxis:{
        categories:['Week 1','Week 2','Week 3','Week 4']
        },
        yAxis:{
        title:{
            text:'Likes per week'
        }
        },
        series: [{
          data: [3, 9, 7,6]
        }],
        accessibility:{
            enabled:false
        },
        credits:false
      }



     
      



    return(
        <>
        <div className='mainHeading'>
            <p>Analytics / Metrics</p>
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





        <div className='adminstat2con'>
            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Categories Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options3}
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
                <div className='adminstat2heading'><p>Articles Statistics</p></div>
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




        <div className='adminstat2con'>
            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Comments Statistics</p></div>
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
                <div className='adminstat2heading'><p>Users Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options3}
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