import React, { useState } from 'react';
import { Layout } from 'antd';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import dashboardData from '../data/dashboardData.json';
import Navbar from './Navbar';

const { Content } = Layout;

const Dashboard = () => {
    const [categories, setCategories] = useState(dashboardData.categories);
    const [filteredCategories, setFilteredCategories] = useState(dashboardData.categories);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const addWidget = (category) => {
        setSelectedCategory(category);
        setModalVisible(true);
    };

    const handleAddWidget = (widgetData) => {
        if (selectedCategory) {
            const newCategories = categories.map(category => {
                if (category.name === selectedCategory.name) {
                    return {
                        ...category,
                        widgets: [...category.widgets, { ...widgetData, id: Date.now() }]
                    };
                }
                return category;
            });
            setCategories(newCategories);
            setFilteredCategories(newCategories);
            setModalVisible(false);
        }
    };

    const removeWidget = (categoryName, widgetId) => {
        const newCategories = categories.map(category => {
            if (category.name === categoryName) {
                return {
                    ...category,
                    widgets: category.widgets.filter(widget => widget.id !== widgetId)
                };
            }
            return category;
        });
        setCategories(newCategories);
        setFilteredCategories(newCategories);
    };

    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            setFilteredCategories(categories);
            return;
        }

        const searchResults = categories.map(category => {
            const filteredWidgets = category.widgets.filter(widget =>
                widget.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return { ...category, widgets: filteredWidgets };
        });

        setFilteredCategories(searchResults);
    };

    return (
        <Layout>
            <Navbar onSearch={handleSearch} />
            <Content style={{padding: '50px'}}>
                <h2>CNAAP Dashboard</h2>
                {filteredCategories.map(category => (
                    <div key={category.name} style={{marginBottom: '24px'}}>
                        <Category
                            category={category}
                            addWidget={() => addWidget(category)}
                            removeWidget={removeWidget}
                        />
                    </div>
                ))}
                <AddWidgetModal
                    visible={modalVisible}
                    onCancel={() => setModalVisible(false)}
                    onAdd={handleAddWidget}
                />
            </Content>
        </Layout>
    );
};

export default Dashboard;
