import React from 'react'
import Featurs from '../../components/Features/Featurs'
import Chart from '../../components/Chart/Chart'
import {XaxisData} from '../../datas'
import Widgetsm from '../../components/Widgetsm/Widgetsm'
import Widgetlg from '../../components/widgetlg/Widgetlg'
export default function Home() {
  return (
    <div className='w-full flex-4'>
      <Featurs />
      <Chart grid title="Month Sale" data={XaxisData} dataKey="sale"/>
      <div className='under-chart flex'>
        <Widgetsm/>
        <Widgetlg/>
      </div>
    </div>
  )
}
