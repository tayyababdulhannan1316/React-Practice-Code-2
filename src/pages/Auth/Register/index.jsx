import { useState } from "react";
import { Button, Col, Divider, Form, Input, message, Row, Typography  } from "antd";

const { Title } = Typography;
const initialState = {fullName:"",email:"",password:"",confirmPassword:""}

const Register = () => {
  const [state , setState] = useState(initialState)
  const [isProcessing , setIsProcessing] = useState(false)

  const handleChange = e => setState(s=> ({...s, [e.target.name]: e.target.value}))

  const handleRegister = ()=>{
    let {fullName,email,password,confirmPassword} = state

    if(password !== confirmPassword)  {return message.error("password does not match")}

    // console.log('fullName :>> ', fullName);
    // console.log('email :>> ', email);
    // console.log('password :>> ', password);
    // console.log('confirmPassword :>> ', confirmPassword);

    
    const id = Math.random().toString(36).slice(2)+ Math.random().toString(36).slice(2)
    // console.log('id :>> ', id);
    const user = {fullName,email,password,id,status:"pending", createdAt:new Date().getTime()}
    
    const users = JSON.parse(localStorage.getItem("users"))||[]
    const isUserFound = users.find((user)=> user.email===email)
    if(isUserFound) {return message.error("user already exist")}

    setIsProcessing(true)
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    setIsProcessing(false)
    message.success("A new user has been registered successfully")
    // setTimeout(() => {
    //   message.success("A new user has been registered")
    //   setIsProcessing(false)
    // }, 1000);
  }
  return (
    <main className="auth">
      <div className="container">
        <div className="card p-3">
          <Title level={1} className="text-center mb-5">
            Register
          </Title>
          <Divider />
          <Form layout="vertical">
           <Row>
            <Col span={24}>
              <Form.Item label="Full Name" name="fullName"  required>
                <Input size="large" type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange} />
              </Form.Item>
            </Col>
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
              <Form.Item label="Confirm Password" name="confirmPassword" required >
                <Input.Password size="large" name="confirmPassword"  placeholder="Please confirm your password" onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type="primary" size="large" block loading={isProcessing} onClick={handleRegister}>Register</Button>
            </Col>
           </Row>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Register;
