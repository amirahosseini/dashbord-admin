import React from 'react';
import avatar from '../../assets/image/74.jpg';
import { transactions } from '../../datas';

export default function Widgetlg() {
    const Butt = ({ type }) => {
        return (
            <button className={`px-2 py-1 text-white rounded-lg ${
                type === 'green' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
            }`}>
                {type}
            </button>
        );
    };

    return (
        <div className='widgetlg flex-2 p-[20px] shadow '>
            <h3 className='widgetlgtitle text-[22px] font-semibold'>Latest Transactions</h3>
            <table className='widgetlgtable w-full '>
                <thead>
                    <tr>
                        <th className='widgetlgth'>Customer</th>
                        <th className='text-center'>Date</th>
                        <th className='text-center'>Amount</th>
                        <th className='text-center'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className='text-center'>
                            <td className='widgetlguser flex items-center'>
                                <img src={avatar} alt="" className='w-[40px] h-[40px] rounded-[50%] object-cover m-[10px]'/>
                                <span> {transaction.name} </span>
                            </td>
                            <td className='font-light'>{transaction.date}</td>
                            <td className='font-light'>{transaction.amount}</td>
                            <td>
                                <Butt type={transaction.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
