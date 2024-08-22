import React, { useState } from 'react';
import { Menu, Input, Button, Typography } from 'antd';
import { SearchOutlined, CloseCircleOutlined, SettingOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Navbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const clearSearch = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
                <Title level={5} style={{ fontWeight: 'bold', margin: 0 }}>Home > Dashboards</Title>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
                <Input
                    prefix={<SearchOutlined />}
                    value={searchTerm}
                    placeholder="Search widgets..."
                    style={{ width: '300px', marginRight: '10px' }}
                    onChange={handleSearch}
                    suffix={searchTerm ? <CloseCircleOutlined onClick={clearSearch} /> : null}
                />
                <Button icon={<BellOutlined />} shape="circle" style={{ marginRight: '10px' }} />
                <Button icon={<UserOutlined />} shape="circle" style={{ marginRight: '10px' }} />
                <Button icon={<SettingOutlined />} shape="circle" />
            </div>
        </Menu>
    );
};

export default Navbar;
