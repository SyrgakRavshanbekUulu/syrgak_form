import { Col, Menu, Row } from 'antd'
import styles from './header.module.css'
import { Settings } from './settings'

export const HeaderComponent = (): JSX.Element => {
  const { Item } = Menu
  return (
    <Row justify='space-between'>
      <Col>
        FLYMETO
      </Col>
      <Col>
        <Menu mode='horizontal' className={styles.menu} activeKey='flights'>
          <Item key='flights'>
            Flights
          </Item>
          <Item key='hotels'>
            Hotels
          </Item>
          <Item key='bundles'>
            Bundles
          </Item>
        </Menu>
      </Col>
      <Col>
        <Settings />
      </Col>
    </Row>
  )
}