import { faArrowRightArrowLeft, faPlaneArrival, faPlaneDeparture, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Form, Row } from 'antd'
import { useForm } from 'react-hook-form'
import { FlightsProps, onSubmit, schema } from './on-submit'
import { yupResolver } from '@hookform/resolvers/yup'
import { DataPickerField, InputField } from '../../ui-kit'

import styles from './flights.module.css'

export const Flights = () => {
  const locations = ['Bishkek', 'London', 'Paris']
  const { formState: { errors }, handleSubmit, control, setValue } = useForm<FlightsProps>({
    resolver: yupResolver(schema)
  })

  // const changeLoacation = () => {
  //   setValue()
  // }

  return (
    <div className={styles.wrapper}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Row gutter={16}>
          <Col span={5}>
            <InputField
              name='fromLocation'
              control={control}
              label='From:'
              placeholder='Select Loacation'
              error={errors.fromLocation}
              size='large'
              dataList={locations}
              icon={<FontAwesomeIcon icon={faPlaneDeparture} />}
            />
          </Col>
          <Col span={1}>
            <Button type='text'>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </Button>
          </Col>
          <Col span={5}>
            <InputField
              name='toLocation'
              control={control}
              label='To:'
              placeholder='Select Loacation'
              error={errors.fromLocation}
              size='large'
              dataList={locations}
              icon={<FontAwesomeIcon icon={faPlaneArrival} />}
            />
          </Col>

          <Col span={5}>
            <Form.Item>
              <DataPickerField
                name='dateFly'
                control={control}
                size='large'
                placeholder='Select Date'
                className={styles.datapicker}
                label='Date'
                error={errors.dateFly}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <InputField
              name='passengers'
              control={control}
              label='Passangers & Cabin class'
              error={errors.passengers}
              size='large'
              icon={<FontAwesomeIcon icon={faUser} />}
            />
          </Col>
          <Col span={3}>
            <Button htmlType='submit' type='primary'>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>

  )
}