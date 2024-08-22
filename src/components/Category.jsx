import React from 'react';
import { Card, Row, Col } from 'antd';
import Widget from './Widget';
import AddWidgetCard from './AddWidgetCard';

const Category = ({ category, addWidget, removeWidget }) => (
    <Card title={category.name} bordered={false} >
        <Row gutter={16}>
            {category.widgets.map((widget) => (
                <Col span={8} key={widget.id}>
                    <Widget widget={widget} removeWidget={() => removeWidget(category.name, widget.id)} />
                </Col>
            ))}
            <Col span={8}>
                <AddWidgetCard addWidget={addWidget} />
            </Col>
        </Row>
    </Card>
);

export default Category;
