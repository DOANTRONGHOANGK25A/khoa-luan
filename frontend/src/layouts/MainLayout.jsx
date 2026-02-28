import React, { useState } from "react";
import { Layout, Menu, Avatar, Dropdown, Space, Button, theme, Modal, Input, Form, message, Descriptions, Tag } from "antd";
import {
    SearchOutlined,
    FileTextOutlined,
    PlusCircleOutlined,
    CheckCircleOutlined,
    SendOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    LockOutlined,
    InboxOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import api from "../api/api";
import "../styles/layout.css";

const { Header, Content, Sider } = Layout;

const roleLabels = {
    ADMIN: "Quản trị viên",
    STAFF: "Nhân viên",
    MANAGER: "Quản lý",
    ISSUER: "Người cấp phát",
};

const menuItems = [
    {
        key: "/verify",
        icon: <SearchOutlined />,
        label: "Tra cứu văn bằng",
    },
    {
        key: "/diplomas",
        icon: <FileTextOutlined />,
        label: "Danh sách hồ sơ",
    },
    {
        key: "/create",
        icon: <PlusCircleOutlined />,
        label: "Tạo hồ sơ",
    },
    {
        key: "/my-diplomas",
        icon: <InboxOutlined />,
        label: "Hồ sơ của tôi",
    },
    {
        key: "/approval",
        icon: <CheckCircleOutlined />,
        label: "Duyệt hồ sơ",
    },
    {
        key: "/issuance",
        icon: <SendOutlined />,
        label: "Phát hành / Thu hồi",
    },
    {
        key: "/admin",
        icon: <UserOutlined />,
        label: "Quản lý người dùng",
    },
];

const userMenuItems = [
    {
        key: "profile",
        icon: <UserOutlined />,
        label: "Thông tin tài khoản",
    },
    {
        key: "change-password",
        icon: <LockOutlined />,
        label: "Đổi mật khẩu",
    },
    {
        type: "divider",
    },
    {
        key: "logout",
        icon: <LogoutOutlined />,
        label: "Đăng xuất",
        danger: true,
    },
];

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [pwdModalOpen, setPwdModalOpen] = useState(false);
    const [pwdLoading, setPwdLoading] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [pwdForm] = Form.useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;
    const role = user?.role || "GUEST";

    const getFilteredMenuItems = () => {
        if (!user) {
            return menuItems.filter(item => item.key === "/verify");
        }

        switch (role) {
            case "ADMIN":
                return menuItems.filter(item => ["/verify", "/diplomas", "/admin"].includes(item.key));
            case "STAFF":
                return menuItems.filter(item => ["/verify", "/diplomas", "/create", "/my-diplomas"].includes(item.key));
            case "MANAGER":
                return menuItems.filter(item => ["/verify", "/diplomas", "/approval"].includes(item.key));
            case "ISSUER":
                return menuItems.filter(item => ["/verify", "/diplomas", "/issuance"].includes(item.key));
            default:
                return menuItems.filter(item => item.key === "/verify");
        }
    };

    const handleMenuClick = (e) => {
        navigate(e.key);
    };

    const handleUserMenuClick = async ({ key }) => {
        if (key === "logout") {
            try {
                await api.post("/auth/logout");
            } catch (err) {
                console.error("Logout API failed", err);
            } finally {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
            }
        } else if (key === "change-password") {
            pwdForm.resetFields();
            setPwdModalOpen(true);
        } else if (key === "profile") {
            setProfileOpen(true);
        }
    };

    const handleChangePassword = async () => {
        try {
            const values = await pwdForm.validateFields();
            if (values.newPassword !== values.confirmPassword) {
                message.error("Mật khẩu xác nhận không khớp");
                return;
            }
            setPwdLoading(true);
            await api.put("/auth/change-password", {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
            });
            message.success("Đổi mật khẩu thành công!");
            setPwdModalOpen(false);
        } catch (e) {
            const msg = e.response?.data?.message || "Lỗi đổi mật khẩu";
            message.error(msg);
        } finally {
            setPwdLoading(false);
        }
    };

    return (
        <Layout className="main-layout">
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="main-sider"
                width={260}
            >
                <div className="logo-container">
                    <div className="logo">
                        <div className="logo-icon">🎓</div>
                        {!collapsed && <span className="logo-text">Hệ thống Văn bằng số</span>}
                    </div>
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    items={getFilteredMenuItems()}
                    onClick={handleMenuClick}
                    className="main-menu"
                />

                <div className="sider-footer">
                    {!collapsed && (
                        <div className="version-info">
                            <small>Phiên bản 1.0.0</small>
                        </div>
                    )}
                </div>
            </Sider>

            <Layout className="content-layout">
                <Header className="main-header" style={{ background: colorBgContainer }}>
                    <div className="header-left">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className="collapse-btn"
                        />
                        <div className="breadcrumb-info">
                            <span className="current-page">
                                {menuItems.find((item) => item.key === location.pathname)?.label || "Trang chủ"}
                            </span>
                        </div>
                    </div>

                    <div className="header-right">
                        {user ? (
                            <>
                                <div className="status-badge" style={{ marginRight: 16 }}>
                                    <span className="status-dot"></span>
                                    <span className="status-text">{roleLabels[role] || role}</span>
                                </div>
                                <Dropdown
                                    menu={{
                                        items: userMenuItems,
                                        onClick: handleUserMenuClick,
                                    }}
                                    placement="bottomRight"
                                    trigger={['click']}
                                >
                                    <Space className="user-dropdown">
                                        <Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
                                        <span className="user-name">{user.username || user.fullName || 'Người dùng'}</span>
                                    </Space>
                                </Dropdown>
                            </>
                        ) : (
                            <>
                                <div className="status-badge" style={{ marginRight: 16 }}>
                                    <span className="status-dot" style={{ backgroundColor: '#ccc' }}></span>
                                    <span className="status-text">Khách</span>
                                </div>
                                <Button type="primary" onClick={() => navigate('/login')}>
                                    Đăng nhập
                                </Button>
                            </>
                        )}
                    </div>
                </Header>

                <Content className="main-content">
                    <div
                        className="content-wrapper"
                        style={{
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>

            <Modal
                title="Đổi mật khẩu"
                open={pwdModalOpen}
                onOk={handleChangePassword}
                onCancel={() => setPwdModalOpen(false)}
                okText="Xác nhận"
                cancelText="Hủy"
                confirmLoading={pwdLoading}
            >
                <Form form={pwdForm} layout="vertical" style={{ marginTop: 16 }}>
                    <Form.Item
                        name="oldPassword"
                        label="Mật khẩu hiện tại"
                        rules={[{ required: true, message: "Vui lòng nhập mật khẩu hiện tại" }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu hiện tại" />
                    </Form.Item>
                    <Form.Item
                        name="newPassword"
                        label="Mật khẩu mới"
                        rules={[
                            { required: true, message: "Vui lòng nhập mật khẩu mới" },
                            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu mới" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Xác nhận mật khẩu mới"
                        rules={[{ required: true, message: "Vui lòng xác nhận mật khẩu mới" }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Nhập lại mật khẩu mới" />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Thông tin tài khoản"
                open={profileOpen}
                onCancel={() => setProfileOpen(false)}
                footer={<Button onClick={() => setProfileOpen(false)}>Đóng</Button>}
            >
                {user && (
                    <Descriptions bordered column={1} style={{ marginTop: 16 }}>
                        <Descriptions.Item label="Tên đăng nhập">{user.username}</Descriptions.Item>
                        <Descriptions.Item label="Mã người dùng">{user.id}</Descriptions.Item>
                        <Descriptions.Item label="Vai trò">
                            <Tag color="blue">{roleLabels[user.role] || user.role}</Tag>
                        </Descriptions.Item>
                    </Descriptions>
                )}
            </Modal>
        </Layout>
    );
}
