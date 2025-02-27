import React from 'react'
import avatar from '../../assets/image/74.jpg'
export default function Widgetlg() {
    


  return (
    <div className='widgetlg'>
        <h3 className='widgetlgtitle'> latest transactions </h3>
        <table className='widgetlg table'>
            <tr>
                <th className='widgetlgth'>customer</th>
                <th> date </th>
                <th>amount</th>
                <th>status</th>
            </tr>
            <tr>
                <td className='widgetlguser'>
                    <img src={avatar} alt="" />
                    <span> amirhosseini </span>
                </td>
                <td>
                    2 july 2024
                </td>
                <td>
                    99.9$
                </td>
                
            </tr>
        </table>
    </div>
  )
}
