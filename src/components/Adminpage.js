import React from 'react';
import './Adminpage.css'; // Import the CSS file

function AdminPage() {
    return (

        <div className="container-ad">

            <div className="report-header">
                <p className="header-text">Report DashBoard</p>
                <button className='sub-button'>ทั้งหมด</button>
                <table className="table">
                    <tr className="row">
                        <th>Detail</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Priority</th>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='Ban-ad'>Ban</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='Ban-ad'>Ban</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>
                    <tr className="row">
                        <td>Email not linked</td>
                        <td>Tom Cruise</td>
                        <td>May 26 2019</td>
                        <td><button className='normal-ad'>Normal</button></td>

                    </tr>

                </table>
            </div>
        </div>

    );
}

export default AdminPage;
