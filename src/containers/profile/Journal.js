import React from 'react'
import Service from '../../service/service';
//import _ from 'lodash';
import './Profile.css';

const fheader = ['Студент', 'Название курса','Тема Урока', 'Номер Урока', 'Выполнен'];
//const bheader = ['student', 'course_title','lesson', 'order', 'done'];
const tableHeaders = (dataColumns) => {
    return(<thead>
        <tr>
            {dataColumns.map((column, count) => {
                return <th key={count}>{column}</th>;
            })}
        </tr>
        </thead>)
    };


const tableBody = (dataRows) => {
    return(dataRows.map(({student, course_title, lesson, order, done}, count) => {
        //console.log('Table', count, lesson);
        return (
            <tr key={count}>
                <td>{student}</td>
                <td>{course_title}</td>
                <td>{lesson}</td>
                <td>{order}</td>
                <td>{done === '0'?'Нет':'Да'}</td>
            </tr>
        );
    }));    
};
//key={count}
class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{student:'', course_title:'', lesson:'', order:'', done:''}]
        };
        this.getList = this.getList.bind(this)
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount()");
        this.getList();
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }
    async getList(){
        let getdat = await Service.getReq('gradelist/')
        this.setState({ data: getdat});
    }
    render() {
        console.log("render()");
        return (
            <div className="table">
                <h3>Журнал успеваемости</h3>
                <table>
                    {tableHeaders(fheader)}
                    <tbody>{tableBody(this.state.data)}</tbody>
                </table>
                
            </div>
        )
    }
}
export default Journal;
