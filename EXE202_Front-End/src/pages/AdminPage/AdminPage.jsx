import { Menu } from 'antd'
import React from 'react'
import { useState } from 'react'
import { getItem } from '../../utils'
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons"
import HeaderBottom from '../../components/home/Header/HeaderBottom'
import AdminUser from '../../components/AdminUser/AdminUser'
import AdminProduct from '../../components/AdminProduct/AdminProduct'

const AdminPage = () => {
    const items = [
        getItem('User', 'user', <UserOutlined />),
        getItem('Product', 'product', <AppstoreOutlined />),
    ];
    const [keySelected, setKeySelected] = useState('')

    const renderPage = (key) => {
        switch (key) {
            case 'user':
                return (
                    <AdminUser />
                )
            case 'product':
                return (
                    <AdminProduct />
                )
            default:
                return <></>
        }
    }

    const handleOnClick = ({ key }) => {
        setKeySelected(key)
    }
    console.log('keySelected', keySelected)

    return (
        <>
            <HeaderBottom />
            <div style={{ display: 'flex', }}>
                <Menu
                    mode="inline"
                    style={{
                        width: 256,
                        boxShadow: '1px 1px 2px #ccc',
                        height: '100vh',
                    }}
                    items={items}
                    onClick={handleOnClick}
                />
                <div style={{ flex: 1, padding: '15px' }}>
                    {renderPage(keySelected)}
                </div>
            </div>
        </>
    )
}

export default AdminPage
