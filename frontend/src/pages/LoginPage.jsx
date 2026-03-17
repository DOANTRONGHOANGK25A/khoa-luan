import React, { useState } from "react";
import { Form, Input, Button, Card, Checkbox, Typography, Space, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import api from "../api/api";
import "../styles/login.css";

const { Title, Text } = Typography;



export function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // Nếu đã đăng nhập rồi thì không cho vào trang login nữa
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
        return <Navigate to="/verify" replace />;
    }

    // Trang mà user muốn truy cập trước khi bị chuyển về login
    const from = location.state?.from?.pathname || "/verify";

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await api.post("/auth/login", {
                username: values.username,
                password: values.password,
            });

            if (res.data.ok) {
                const { token, user } = res.data.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                message.success("Đăng nhập thành công!");
                navigate(from, { replace: true });
            }
        } catch (err) {
            const msg = err.response?.data?.message || "Đăng nhập thất bại";
            message.error(msg);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="login-container">
            <div className="login-background">
                <div className="login-overlay"></div>
            </div>

            <div className="login-content">
                <Card className="login-card">
                    <div className="login-header">
                        <div className="login-logo">
                            <img src="/hdu1.png" alt="HDU Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                        </div>
                        <Title level={2} className="login-title">
                            Trường Đại học Hồng Đức
                        </Title>
                        <Text type="secondary">
                            Hệ thống quản lý văn bằng số
                        </Text>
                    </div>

                    <Form
                        name="login"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                        size="large"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: "Vui lòng nhập tên đăng nhập!" },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="input-icon" />}
                                placeholder="Tên đăng nhập"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: "Vui lòng nhập mật khẩu!" },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="input-icon" />}
                                placeholder="Mật khẩu"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Space style={{ width: "100%", justifyContent: "space-between" }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                                </Form.Item>
                                <a className="login-forgot" href="#">
                                    Quên mật khẩu?
                                </a>
                            </Space>
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 12 }}>
                            <Button type="primary" htmlType="submit" block loading={loading}>
                                Đăng nhập
                            </Button>
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 0 }}>
                            <Button block onClick={() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem("user");
                                navigate("/verify");
                            }}>
                                Truy cập với tư cách Khách
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

                <div className="login-info">
                    <Text type="secondary">© 2026 Hệ thống Văn bằng số HDU</Text>
                </div>
            </div>
        </div>
    );
}
