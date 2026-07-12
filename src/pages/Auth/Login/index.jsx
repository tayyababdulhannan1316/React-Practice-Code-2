import { useState } from "react";
import { Button, Col, Divider, Form, Input, message, Row, Typography  } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth";

const { Title } = Typography;
const initialState = {email:"",password:""}

const Login = () => {
  const {setIsAuth , setUser} = useAuthContext()
  const [state , setState] = useState(initialState)
  const [isProcessing , setIsProcessing] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => setState(s=> ({...s, [e.target.name]: e.target.value}))

  const handleLogin = ()=>{
    let {email,password} = state
    const users = JSON.parse(localStorage.getItem("users"))||[]
    const user = users.find((user)=> user.email===email && user.password === password)
    if(!user) {return message.error("Invalid Credentials")}
    localStorage.setItem("user", JSON.stringify(user))
    // console.log('user :>> ', user);
    setIsAuth(true)
    setUser(user)
    setIsProcessing(true)
    message.success("Login successful;")
    setIsProcessing(false)
    navigate("/")
  }
    
    
    

   
    // localStorage.setItem("users",JSON.stringify(users))
 
  return (
    <main className="auth">
      <div className="container">
        <div className="card p-3">
          <Title level={1} className="text-center mb-5">
            Login
          </Title>
          <Divider />
          <Form layout="vertical">
           <Row>
            <Col span={24}>
              <Form.Item label="Email" name="email"  required>
                <Input size="large" type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Password" name="password"  required >
                <Input.Password size="large" name="password"  placeholder="Enter your password" onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type="primary" size="large" htmlType="submit" block loading={isProcessing} onClick={handleLogin}>Login</Button>
            </Col>
           </Row>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Login;
