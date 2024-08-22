import React from 'react';
import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddWidgetCard = ({ addWidget }) => (
    <Card
        bordered={false}
        onClick={addWidget}
        style={{ textAlign: 'center',
            cursor: 'pointer',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px'
    }}
    >
        <PlusOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
        <p>Add Widget</p>
    </Card>
);

export default AddWidgetCard;
