

import { Col, Row, Typography } from 'antd'


const { Title } = Typography
const Contact = () => {
  return (
    <main>
      <div className="container text-center">
        <Row>
          <Col span={24}>
                <Title level={1} >Contact Page</Title>
                <Title level={2} >Contact Section</Title>             
          </Col>
        </Row>
      </div>
    </main>
  )
}

export default Contact