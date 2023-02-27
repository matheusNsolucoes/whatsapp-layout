import React from 'react';
import { Card, Button, CardBody, Media } from 'reactstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';

const StatisticsChartWidget = (props) => { 
    
    if (props.button) {
        return (
            <button onClick={props.onClick}>
            </button>
        );           
    }

    return (
        <Card className={classNames(props.bgClass)}>
            <CardBody className="p-0">
                <Media className="p-3">
                    <Media body>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-uppercase font-size-12 font-weight-bold text-light">{props.description}</span>
                            <button className="btn btn-link text-light fs-20"><i className="uil uil-eye"></i></button>
                        </div>
                        <h2 className="mb-0 text-light">{props.title}</h2>     
                        <Button className="mt-2" color={props.textbutton.textClass}>{props.textbutton.text}</Button>            
                    </Media>
                </Media>
            </CardBody>
        </Card>
    );
};

export default StatisticsChartWidget;
