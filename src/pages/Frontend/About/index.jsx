import { Col, Row,  Typography } from 'antd'


const { Title } = Typography
const About = () => {
  return (
    <main>
      <div className="container text-center">
        <Row>
          <Col span={24}>
                <Title level={1} >About Page</Title>
                <Title level={2} >About Section</Title>  
                  
                         
          </Col>
        
        </Row>
      </div>
    </main>
  )
}

export default About