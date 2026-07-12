import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, Card, message } from "antd";
import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Replace with your actual API call
      // await axios.post("/api/auth/forgot-password", { email: values.email });

      console.log("Reset link requested for:", values.email);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setEmailSent(true);
      message.success("Reset link sent to your email!");
    } catch (error) {
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f2f5",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          borderRadius: 12,
        }}
      >
        {!emailSent ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <Title level={3} style={{ marginBottom: 8 }}>
                Forgot Password?
              </Title>
              <Text type="secondary">
                Enter your email and we'll send you a link to reset your
                password.
              </Text>
            </div>

            <Form layout="vertical" onFinish={onFinish} autoComplete="off">
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email address" },
                ]}
              >
                <Input
                  prefix={<MailOutlined style={{ color: "#999" }} />}
                  placeholder="you@example.com"
                  size="large"
                />
              </Form.Item>

              <Form.Item style={{ marginTop: 24, marginBottom: 12 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  loading={loading}
                  style={{ background: "#1d3550" }}
                >
                  Send Reset Link
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Title level={4}>Check your inbox</Title>
            <Text type="secondary">
              We've sent a password reset link to your email address. It may
              take a few minutes to arrive.
            </Text>
            <Button
              type="link"
              onClick={() => setEmailSent(false)}
              style={{ marginTop: 16, padding: 0 }}
            >
              Didn't receive it? Try again
            </Button>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link
            to="/auth/login"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#1d3550",
              fontWeight: 500,
            }}
          >
            <ArrowLeftOutlined /> Back to Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;