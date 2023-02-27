import React from 'react';
import { Card, Row, CardBody, Media } from 'reactstrap';
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
                <Media className="py-4 px-4">
                    <Media body>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted text-uppercase font-size-12 font-weight-bold">{props.description}</span>
                            <button className="btn btn-link fs-20 text-muted"><i className="uil uil-eye"></i></button>
                        </div>
                        <h2 className="mb-0">{props.title}</h2>                        
                    </Media>
                </Media>
            </CardBody>
        </Card>
    );
};

export default StatisticsChartWidget;
