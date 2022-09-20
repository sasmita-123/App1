import React from "react";

const Section = () => {             //Arrow function
    return(
    <div>
        <table>
        <tr>
            <th>Emp_ID</th>
            <th>Emp_Name</th>
            <th>Emp_City</th>
            <th>Emp_State</th>
        </tr>
        <tr>
            <td>001</td>
            <td>Sasmita</td>
            <td>Hyderabad</td>
            <td>Telengana</td>
        </tr>
        <tr>
            <td>002</td>
            <td>Sangeeta</td>
            <td>Bengaluru</td>
            <td>Karnataka</td>
        </tr>
        <tr>
            <td>003</td>
            <td>Pawani</td>
            <td>Noida</td>
            <td>UP</td>
        </tr>
        </table>
    </div>
    );

};
export default Section;