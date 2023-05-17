import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CTable,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody 

} from '@coreui/react'
import axios from 'axios'

const PhotographyService = ({ formdata, setformdata }) => {
  const [albumType, setAlbumType] = useState({ albume_types: [] })
  const [disable, setDisable] = useState(true)
  const [albumSkin, setAlbumSkin] = useState({ albume_skins: [] })
  const [albumBag, setAlbumBag] = useState({ albume_bags: [] })
  const [objSize, setObjSize] = useState({ object_sizes: [] })
  const [paperType, setPaperType] = useState({ paper_types: [] })
  const [pictureBoard, setPictureBoard] = useState({ picture_boards: [] })
  const [albumePaperList, setAlbumPaperList] = useState([])
  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')
  const data = {
    api_key: localStorage.getItem('api_key'),
    contract_detail_id: formdata.contract_id,
    current_user: currentUser,
  }

  useEffect(() => {
    getData('/api/AdminDashboard/GetAlbumeType', setAlbumType)
    getData('/api/AdminDashboard/GetAlbumeSkin', setAlbumSkin)
    getData('/api/AdminDashboard/GetAlbumeBag', setAlbumBag)
    getData('/api/AdminDashboard/GetObjectSize', setObjSize)
    getData('/api/AdminDashboard/GetPaperType', setPaperType)
    getData('/api/AdminDashboard/GetPictureBoard', setPictureBoard)
  }, [])

  function getData(url, fun) {
    axios({
      method: 'post',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        fun(result.data)
      })
      .catch((err) => {
        toast.error('خطا در دریافت اطلاعات', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  const RegisterAlbumDetail = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      contract_detail_id: formdata.contract_id,
      current_user: currentUser,
      type_id: formdata.type_id,
      albume_size_id: formdata.albume_size_id,
      skin_id: formdata.skin_id,
      bag_id: formdata.bag_id,
      number_of_papers: formdata.number_of_papers,
      travel_album_size_id: formdata.travel_album_size_id,
    }
    console.log(data)
    axios({
      method: 'post',
      url: '/api/AdminDashboard/RegisterAlbumeDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setDisable(false)
        console.log(result.data.albume_detail_id)
        setformdata({ ...formdata, albume_detail_id: result.data.albume_detail_id })
        toast.success(' عملیات با موفقیت ثبت شد.', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در ایجاد مجددا تلاش کنید', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  const RegisterAlbumPaperDetail = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      contract_detail_id: formdata.contract_id,
      current_user: currentUser,
      albume_detail_id: formdata.albume_detail_id,
      paper_type_id: formdata.paper_type_id,
      number_of_paper: formdata.number_of_paper,
    }
    axios({
      method: 'post',
      url: '/api/AdminDashboard/RegisterAlbumePaperDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        getPaperList()
        toast.success(' عملیات با موفقیت ثبت شد.', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      .catch((err) => {
        toast.error('خطا در ایجاد مجددا تلاش کنید', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  const getPaperList = ()=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      albume_detail_id: formdata.albume_detail_id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetContractAlbumePapers',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        setAlbumPaperList(result.data.albume_papers)
        if (result.data.albume_papers.length==0) {
          toast.success('کاغذی وجود ندارد', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'dark',
          })
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  const RegisterPictureBoardDetail = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      contract_detail_id: formdata.contract_id,
      current_user: currentUser,
      picture_type_id: formdata.picture_type_id,
      picture_size_id: formdata.picture_size_id,
      paper_type_id: formdata.paperpic_type_id,
      number_of_paper: formdata.number_of_picpaper,
      price: formdata.price,
      discount: formdata.discount,
    }
    sendDataForServer('/api/AdminDashboard/RegisterPictureBoardDetail', data)
  }

  function sendDataForServer(url, data) {
    axios({
      method: 'post',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        toast.success(' عملیات با موفقیت ثبت شد.', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در ایجاد مجددا تلاش کنید', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        })
      })
  }

  return (
    <>
      <ToastContainer rtl bodyClassName="toastBody" />
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> خدمات آلبوم </strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04"> نوع آلبوم</CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      type_id: Number(e.target.value) + 1,
                    })
                  }}
                  required
                >
                  {/* <option>انتخاب کنید</option> */}
                  {albumType.albume_types.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04" required>
                  سایز آلبوم
                </CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      albume_size_id: Number(e.target.value) + 1,
                    })
                  }}
                >
                  {/* <option>انتخاب کنید</option> */}
                  {objSize.object_sizes.map((a, index) => {
                    return <option value={index}>{a.ob_size}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01" required>
                  تعداد صفحات:
                </CFormLabel>
                <CFormInput
                min={0}
                  className="shadow"
                  type="number"
                  value={formdata.number_of_papers}
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      number_of_papers: e.target.value,
                    })
                  }}
                  required
                />
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>کیف و جنس جلد آلبوم</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04"> جنس آلبوم</CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      skin_id: Number(e.target.value) + 1,
                    })
                  }}
                  required
                >
                  {/* <option>انتخاب کنید</option> */}
                  {albumSkin.albume_skins.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04" required>
                  کیف آلبوم
                </CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      bag_id: Number(e.target.value) + 1,
                    })
                  }}
                >
                  <option value={-1}>نیاز ندارد</option>
                  {albumBag.albume_bags.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04" required>
                  سایز کیف مسافرتی
                </CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      travel_album_size_id: Number(e.target.value) + 1,
                    })
                  }}
                >
                  <option value={-1}>نیاز ندارد</option>
                  {objSize.object_sizes.map((a, index) => {
                    return <option value={index}>{a.ob_size}</option>
                  })}
                </CFormSelect>
              </CCol>
            </CForm>
            <CButton color="primary" onClick={RegisterAlbumDetail} type="submit" className="mt-4">
              ثبت و ارسال
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>جنس و تعداد صفحات آلبوم</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04"> نوع صفحه</CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      paper_type_id: Number(e.target.value) + 1,
                    })
                  }}
                  required
                >
                  {/* <option>انتخاب کنید</option> */}
                  {paperType.paper_types.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01" required>
                  تعداد صفحات:
                </CFormLabel>
                <CFormInput
                min={0}
                  type="number"
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      number_of_paper: e.target.value,
                    })
                  }}
                  className="shadow"
                />
              </CCol>
            </CForm>
            <CButton
              disabled={disable}
              color="primary"
              onClick={RegisterAlbumPaperDetail}
              type="submit"
              className="mt-4"
            >
              ثبت و ارسال
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} className="shadow mb-4">
        <CTable className="mt-5">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col"> نوع کاغذ</CTableHeaderCell>
              <CTableHeaderCell scope="col"> تعداد کاغذ</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {albumePaperList.map((paper , index) => {
              return (
                <CTableRow key={paper.id}>
                  <CTableHeaderCell scope="row">{index +1}</CTableHeaderCell>
                  <CCol md={4}>
                <CFormSelect
                size='sm'
                  value={paper.paper_type_id}
                  required
                >
                  {/* <option>انتخاب کنید</option> */}
                  {paperType.paper_types.map((a, index) => {
                    return <option value={index +1}>{a.title}</option>
                  })}
                </CFormSelect>
              </CCol>
                  <CTableDataCell>{paper.number_of_paper}</CTableDataCell>
                  <CTableDataCell>
                  </CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>خدمات چاپ </strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation">
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04"> نوع شاسی</CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      picture_type_id: Number(e.target.value) + 1,
                    })
                  }}
                  required
                >
                  {/* <option>انتخاب کنید</option> */}
                  {pictureBoard.picture_boards.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04" required>
                  جنس
                </CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      paperpic_type_id: Number(e.target.value) + 1,
                    })
                  }}
                >
                  {/* <option>انتخاب کنید</option> */}
                  {paperType.paper_types.map((a, index) => {
                    return <option value={index}>{a.title}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer04" required>
                  سایز
                </CFormLabel>
                <CFormSelect
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      picture_size_id: Number(e.target.value) + 1,
                    })
                  }}
                >
                  {/* <option>انتخاب کنید</option> */}
                  {objSize.object_sizes.map((a, index) => {
                    return <option value={index}>{a.ob_size}</option>
                  })}
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01" required>
                  تعداد:
                </CFormLabel>
                <CFormInput
                min={0}
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      number_of_picpaper: Number(e.target.value) + 1,
                    })
                  }}
                  className="shadow"
                  type="number"
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01" required>
                  هزینه (تومان):
                </CFormLabel>
                <CFormInput
                  className="shadow"
                  type="text"
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      price: Number(e.target.value) + 1,
                    })
                  }}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationServer01" required>
                  تخفیف (درصد):
                </CFormLabel>
                <CFormInput
                  className="shadow"
                  type="text"
                  onChange={(e) => {
                    setformdata({
                      ...formdata,
                      discount: Number(e.target.value) + 1,
                    })
                  }}
                />
              </CCol>
            </CForm>
            <CButton
              color="primary"
              onClick={RegisterPictureBoardDetail}
              type="submit"
              className="mt-4"
            >
              ثبت و ارسال
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default PhotographyService
