'use client'
import React, { PropsWithChildren } from 'react'
import { ConfigProvider, Image, Layout, Menu } from 'antd'
import { Color } from '@/utils/Color'
import { If, Then, Else } from 'react-if'
import styled from 'styled-components'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout

const LayoutCore = ({ children }: PropsWithChildren) => {
    const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
            children: [
                {
                    key: 1,
                    icon: React.createElement(icon),
                    label: "text"
                }
            ]
        }),
    );

    const [collapsed, setCollapsed] = React.useState<boolean>(false)
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        colorText: 'white',
                        popupBg: Color.Base,
                        itemHoverBg: Color.PinkEdot,
                        itemSelectedBg: Color.PinkEdot,
                        itemSelectedColor: 'white',
                        groupTitleColor: 'white',
                    },
                },
            }}
        >
            <Layout>
                <Sider
                    collapsed={collapsed}
                    breakpoint="lg"
                    onBreakpoint={(broken: any) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed: any, type: any) => {
                        console.log(collapsed, type);
                        setCollapsed(collapsed)
                    }}
                    width={268}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        scrollbarColor: 'white',
                        scrollbarWidth: 'none',
                        background: Color.Base,
                        width: '268px !important',
                        paddingLeft: '18px',
                        paddingRight: '18px',
                    }}
                >
                    <div className="flex items-center justify-center">
                        {!collapsed && (
                            <div>
                                <Image
                                    preview={false}
                                    width={140}
                                    height={72}
                                    src="/icons/logo-nabati.svg"
                                    alt="logo"
                                />
                            </div>
                        )}
                        <If condition={!collapsed}>
                            <Then>
                                <button
                                    className="flex h-7 w-7 items-center justify-center rounded bg-white/30"
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    <UserOutlined />
                                </button>
                            </Then>
                            <Else>
                                <button
                                    className="mt-8 flex h-7 w-7 items-center justify-center rounded bg-white/30"
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    <UserOutlined />
                                </button>
                            </Else>
                        </If>
                    </div>
                    <BaseMenu
                        collapsed={collapsed?.toString() ?? 'false'}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            marginTop: collapsed ? 40 : 0,
                        }}
                        defaultSelectedKeys={[]}
                        defaultOpenKeys={[]}
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <main className="bg-slate-100 text-slate-700 min-h-screen text-sm">
                    <div>
                        {children}
                    </div>
                </main>
            </Layout>
        </ConfigProvider>
    )
}

export default LayoutCore



interface BaseMenuProps {
    collapsed: string
}

const BaseMenu = styled(Menu) <BaseMenuProps>`
    .ant-menu-item-group-title {
        margin-left: 12px;
        text-transform: uppercase;
        border: none;
    }
    .ant-menu-item-group {
        border: none;
        display: ${({ collapsed }) => (collapsed?.toString() === 'true' ? 'none' : 'block')};
    }
`