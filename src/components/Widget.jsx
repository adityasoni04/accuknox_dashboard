import React from 'react';
import { Card } from 'antd';
import { generatePieChart, generateBarChart } from '../utils/graphUtils';
import { CloseOutlined } from '@ant-design/icons';

const Widget = ({ widget, removeWidget }) => {
    const renderChart = () => {
        switch (widget.type) {
            case 'circle':
            case 'pie':
                return generatePieChart(widget.data);
            case 'bar':
                return generateBarChart(widget.data);
            default:
                return <p>{widget.name}</p>;
        }
    };

    return (
        <Card
            title={widget.name}
            extra={
                <CloseOutlined
                    onClick={() => removeWidget(widget.id)}
                    style={{ cursor: 'pointer' }}
                />
            }
            bordered={false}
            style={{
                marginBottom: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '8px'
            }}
        >
            <div style={{ marginBottom: '16px' }}>
                <strong>Details:</strong>
                <p>{widget.details}</p>
            </div>
            {renderChart()}
        </Card>
    );
};

export default Widget;
