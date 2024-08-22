import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const AddWidgetModal = ({ visible, onCancel, onAdd }) => {
    const [form] = Form.useForm();
    const [widgetType, setWidgetType] = useState('');

    // Handle the OK action
    const handleOk = () => {
        form.validateFields().then(values => {
            const data = getDefaultData();
            onAdd({ ...values, data });  // Pass default data
            form.resetFields();
        });
    };

    // Get default data based on widget type
    const getDefaultData = () => {
        switch (widgetType) {
            case 'pie':
                return { Red: 12, Blue: 19, Yellow: 3, Green: 5 };
            case 'bar':
                return { January: 33, February: 53, March: 85, April: 41 };
            default:
                return { 'No Data': 1 };  // Default data
        }
    };

    // Check if form is valid
    const isFormValid = () => {
        return form.getFieldValue('name') &&
            form.getFieldValue('details') &&
            form.getFieldValue('type') &&
            form.isFieldsTouched() &&
            !form.getFieldsError().some(({ errors }) => errors.length);
    };

    return (
        <Modal
            visible={visible}
            title="Add Widget"
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>Cancel</Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={handleOk}
                    disabled={!isFormValid()}  // Disable Add button if form is not valid
                >
                    Add
                </Button>
            ]}
        >
            <Form form={form} layout="vertical" initialValues={{ data: getDefaultData() }}>
                <Form.Item
                    name="name"
                    label="Widget Name"
                    rules={[{ required: true, message: 'Please enter widget name' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="details"
                    label="Widget Details"
                    rules={[{ required: true, message: 'Please enter widget details' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Widget Type"
                    rules={[{ required: true, message: 'Please select widget type' }]}
                >
                    <Select onChange={(value) => setWidgetType(value)}>
                        <Option value="pie">Pie</Option>
                        <Option value="bar">Bar</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddWidgetModal;
