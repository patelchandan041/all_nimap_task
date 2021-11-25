import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

const Chart = () => {
  const [month, setMonth] = useState("")
  //  const [chart, setChart] = useState({})
  const [data, setData] = useState("")
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])

  const opt = ["january","february","march","april","may","june","july","august","september","october","november","december"]

  const dataBar = {

    labels: data2,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#EC932F',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data1
      },
      // {
      //   label: 'My First dataset 2',
      //   backgroundColor: 'rgba(255,99,132,0.2)',
      //   borderColor: 'rgba(255,99,132,1)',
      //   borderWidth: 1,
      //   hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      //   hoverBorderColor: 'rgba(255,99,132,1)',
      //   data: data2
      // }
    ]
  };

  const Add = () => {
    setData1((prev) => {
      return [...prev, data]
    })
    setData2((prev) => {
      return [...prev, month]
    })

  }

  // const Add = () => {
  //   data1.push(data)
  //   data2.push(month)
  // }

  console.log(data1)


  return (
    <div>
      {/* <input type="text" value={month} onChange={(e)=>setMonth(e.target.value)} /> */}
      <select value={month} onChange={(e)=>setMonth(e.target.value)} style={{width:"200px"}}>
        {opt.map((ele)=>(
          <option>{ele}</option>
              ))}
      </select>

      <input type="number" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={Add}>Add Task</button>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={dataBar}
      // width={100}
      // height={50}
      />
      <h2>Horizontal Bar Example</h2>
      {/* <Line data={dataHorBar} /> */}
    </div>
  );

}


export default Chart;