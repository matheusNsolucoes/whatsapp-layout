import React from 'react';
import classNames from 'classnames';
import { Col, Button } from 'reactstrap';

// types

const Activity = ({ activityTimeline }) => {
    return (
        <>
            {(activityTimeline || []).map((activity, index) => {
                return (
                    <React.Fragment key={index}>
                        <h5 className={index === 0 ? 'mt-1' : 'mt-4'}>{activity.activityTime}</h5>
                        <div className={classNames('left-timeline', 'mt-3', 'ps-3', { 'mb-3': index === 0 })}>
                            <Col md={'auto'} className="mb-3 Success">
                                <Button variant="success" color="success" type="submit" className="width-lg">
                                    Ativo
                                </Button>
                            </Col>
                        </div>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default Activity;
