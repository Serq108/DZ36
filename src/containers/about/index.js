import React from 'react'
import Service from '../../service/service';
import moment from 'moment';
import './course.css';

//const fheader = ['Название курса','Описание Курса', 'Начало занятий'];

const tableBody = (dataRows) => {
    //return(dataRows.map(({title, descrpt, date_begin}, count) => {
    return(dataRows.map((row, count) => {            
        //console.log('Table', count, lesson);
        return (
            <ul key={count}>
                <li><strong>Название курса: {row.title}</strong></li>
                <li>Описание :{row.descrpt}</li>
                <li>Дата начала занятий: {moment(row.date_begin).format('DD/MM/YYYY')}</li>
            </ul>
        );
    }));    
};

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title:'', descrpt:'', date_begin:''},
                {title:'', descrpt:'', date_begin:''}
            ]
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
        let getdat = await Service.getReq('course/')
        console.log('res', getdat )
        if('errorMessage' in getdat){
            //this.setState({ data: this.state.data});
        }else{
            this.setState({ data: getdat});    
        }
        
    }
    render() {
        console.log("render()");
        return (
            <div className="course-list">
                <h3>Наши курсы</h3>
                <div>
                    <div>{tableBody(this.state.data)}</div>
                </div>
            </div>
        )
    }
}
export default About