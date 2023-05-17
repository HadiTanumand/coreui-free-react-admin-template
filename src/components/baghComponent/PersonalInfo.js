import React, { useState } from 'react'
import { CFormInput } from '@coreui/react'
import { toast, ToastContainer } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CSpinner,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import axios from 'axios'

const PersonalInfo = (props) => {
  const [disableBtn, setDisableBtn] = useState(false)
  const [usersList, setUsersList] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [helpContractName, setHelpContractName] = useState(1)
  const [subcontract, setSubcontract] = useState(1)
  const [subTwocontract, setSubTowcontract] = useState(1)
  const [contractType, setContractType] = useState([
    {
      id: 'a',
      name: 'جشن',
      type: [
        {
          id: 'a-1',
          name: 'جشن عروسی',
          data: [],
        },
        {
          id: 'a-2',
          name: 'جشن نامزدی',
          data: [],
        },
        {
          id: 'a-3',
          name: 'جشن محضر',
          data: [
            {
              id: 'a-3-1',
              name: 'محضر آتلیه',
            },
            {
              id: 'a-3-2',
              name: 'محضرهای دیگر',
            },
          ],
        },
        {
          id: 'a-4',
          name: 'جشن های جانبی عروسی',
          data: [],
        },
        {
          id: 'a-5',
          name: 'خدمات عروسی',
          data: [],
        },
      ],
    },
    {
      id: 'b',
      name: 'باغ',
      type: [
        {
          data: [],
        },
      ],
      type: [
        {
          data: [],
        },
      ],
    },
    {
      id: 'c',
      name: 'فرمالیته',
      type: [
        {
          id: 'c-1',
          name: 'فرمالیته اطراف مشهد',
          data: [],
        },
        {
          id: 'c-2',
          name: 'فرمالیته شمال',
          data: [],
        },
        {
          id: 'c-3',
          name: 'فرمالیته جنوب',
          data: [],
        },
        {
          id: 'c-4',
          name: 'فرمالیته خارج از کشور',
          data: [],
        },
        {
          id: 'c-5',
          name: 'پارت صبح (ویژه آتلیه)',
          data: [],
        },
      ],
    },
    {
      id: 'd',
      name: 'متفرقه',
      type: [
        {
          id: 'd-1',
          name: 'تولد',
          data: [],
        },
        {
          id: 'd-2',
          name: 'اسپرت',
          data: [],
        },
        {
          id: 'd-3',
          name: 'آتلیه کودک',
          data: [
            {
              id: 'd-3-1',
              name: 'آتلیه نوزاد',
            },
            {
              id: 'd-3-2',
              name: 'آتلیه کودک',
            },
            {
              id: 'd-3-2',
              name: 'آتلیه بارداری',
            },
          ],
        },
        {
          id: 'd-4',
          name: 'عکاسی های متفرقه',
          data: [],
        },
      ],
    },
  ])

  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')
  const data = {
    api_key: localStorage.getItem('api_key'),
    user_type: 7,
    current_user: currentUser,
  }

  const searchUser = async () => {
    setSpinner(true)
    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetUsers',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setUsersList(result.data.users)
        setSpinner(false)
      })
      .catch((err) => {
        console.log(err)
        setSpinner(false)
        toast.error('خطا در دریافت لیست مشتریان مجددا تلاش کنید', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  const handleBuildContract = () => {
    setSpinner(true)
    const data = {
      api_key: localStorage.getItem('api_key'),
      contract_type: `${helpContractName}-${subcontract}-${subTwocontract}`,
      current_user: currentUser,
      customer_id: props.formdata.customer_id,
    }
    axios({
      method: 'post',
      url: '/api/AdminDashboard/BuildContract',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        props.setformdata({
          ...props.formdata,
          contract_number: result.data.contract_number,
          contract_id: result.data.contract_id,
        })
        setDisableBtn(true);
        props.setNextStep(true)
        setSpinner(false)
        toast.success('قرارداد جدید با موفقیت ثبت شد.', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      .catch((err) => {
        console.log(err)
        setSpinner(false)
        toast.error('خطا در ایجاد قرارداد جدید مجددا تلاش کنید', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  return (
    <>
      <ToastContainer rtl bodyClassName="toastBody" />
      <CCol xs={12} className="shadow">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>انتخاب مشتری برای ثبت قرارداد جدید باغ</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol lg={6}>
                <CFormInput
                  className="mt-4 shadow"
                  value={`${props.formdata.customer_name}`}
                  placeholder="نام مشتری را واردکنید و جستجو رابزنید..."
                  type="text"
                  id="validationServer01"
                  required
                />
              </CCol>
              <CCol lg={6} className="mt-4">
                <CButton
                  onClick={searchUser}
                  className="shadow text-white"
                  color="info"
                  type="submit"
                >
                  {spinner ? <CSpinner component="span" size="sm" aria-hidden="true" /> : 'جستجو'}
                </CButton>
              </CCol>
            </CRow>

            <CListGroup className="mt-4 col-lg-4 shadow">
              {usersList.map((user) => {
                return (
                  <CListGroupItem
                    component="button"
                    onClick={() => {
                      props.setformdata({
                        ...props.formdata,
                        customer_id: user.id,
                        customer_name: user.full_name,
                      })
                    }}
                  >
                    {user.full_name}
                  </CListGroupItem>
                )
              })}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12} className="shadow">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>فرم اطلاعات کلی قرارداد</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis"></p>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01"> قرارداد</CFormLabel>
                <CFormSelect
                  id="validationServer01"
                  className="shadow"
                  required
                  value={helpContractName}
                  onChange={(e) => {
                    console.log('e.target  ' + e.target.value)
                    setHelpContractName(e.target.value)
                    setSubcontract(1)
                    setSubTowcontract(1)
                  }}
                >
                  {contractType.map((c, index) => {
                    return <option value={index + 1}>{c.name}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer02" required>
                  نوع قرارداد
                </CFormLabel>
                <CFormSelect
                  id="validationServer02"
                  className="shadow"
                  value={subcontract}
                  onChange={(e) => {
                    setSubcontract(e.target.value)
                    setSubTowcontract(1)
                    console.log(e.target.value)
                  }}
                >
                  {contractType[helpContractName -1].type.map((c, index) => {
                    return <option value={index + 1}>{c.name}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer03" required>
                  {subcontract == 3 && helpContractName != 3 ? 'آپشن' : ''}
                </CFormLabel>
                <CFormSelect
                  hidden={subcontract == 3 && helpContractName != 3 ? false : true}
                  value={subTwocontract}
                  onChange={(e) => {
                    setSubTowcontract(e.target.value)
                    // console.log(
                    //   'gesmat1 :' +
                    //     helpContractName +
                    //     '   ghesmat2' +
                    //     subcontract +
                    //     '   ghesmat3' +
                    //     e.target.value,
                    // )
                  }}
                  id="validationServer03"
                  className="shadow"
                >
                  {contractType[helpContractName -1].type[subcontract -1].data.map((d, index) => {
                    return <option value={index + 1}>{d.name}</option>
                  })}
                </CFormSelect>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol> */}
      <CCol xs={12} className="shadow">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>
              لطفا پیش از رفتن به مراحل بعدی قرار داد دکمه ثبت و دریافت شماره قرارداد را بزنید تا
              قرارداد شما در سیستم ایجاد و ذخیر شود
            </strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis"></p>
                    {'شماره قرارداد: '}
              <CListGroupItem >{props.formdata.contract_number}</CListGroupItem>
              {'آی دی قرارداد: '}
              <CListGroupItem>{props.formdata.contract_id}</CListGroupItem>

            <CButton 
            color="primary" 
            type="submit" 
            className="mt-4"
            disabled={disableBtn} 
            onClick={handleBuildContract}>
              {spinner ? (
                <CSpinner component="span" size="sm" aria-hidden="true" />
              ) : (
                'ثبت و دریافت شماره قرارداد'
              )}
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default PersonalInfo
