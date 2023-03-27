import React, { useState } from 'react'
import { CCard, CProgress, CProgressBar, CFormSelect, CRow, CButton } from '@coreui/react'
import { DocsExample } from 'src/components'
import PersonalInfo from './PersonalInfo'
import CustomerService from './CustomerService'
import PartyService from './PartyService'
import PhotographyService from './PhotographyService'
import MahzarService from './MahzarService'

const Contract = () => {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    case1: '',
    case2: '',
    case3: '',
    case4: '',
    case5: '',
    case6: '',
    case7: '',
    case8: '',
    case9: '',
    case10: '',
    case11: '',
    case12: '',
  })

  const pageTitle = [
    'customerService',
    'personalInfo',
    'partyService',
    'photographyService',
    'mahzarService',
  ]

  const addPage = () => {
    if (page === 0) {
      return <PersonalInfo formdata={formData} setformdata={setFormData} />
    }
    if (page === 1) {
      return <CustomerService formdata={formData} setformdata={setFormData} />
    }
    if (page === 2) {
      return <PartyService formdata={formData} setformdata={setFormData} />
    }
    if (page === 3) {
      return <PhotographyService formdata={formData} setformdata={setFormData} />
    } else {
      return <MahzarService formdata={formData} setformdata={setFormData} />
    }
  }

  return (
    <>
      <div className="container bg-white p-4 ">
        <div className="mt-3">
          <CProgress height={35} className="mb-4">
            <CProgressBar color="success" variant="striped" animated value={page === 20 ? 0 : 20*(page+1)}>
            {page === 20 ? 0 : 20*(page+1)}%
            </CProgressBar >
          </CProgress>
        </div>
        <div className="m-4">{addPage()}</div>

        <div>
          <CButton color="success" className="text-light m-4"
           onClick={() => {
            if(page === (pageTitle.length-1)){
                alert('submitted');
            }else{
              setPage(page+1);
            }
          }}>
             {page == (pageTitle.length - 1) ? 'ثبت و ارسال'  : 'مرحله بعد'}
          </CButton>
          <CButton
            color="danger"
            disabled={page == 0}
            className="text-light m-4"
            onClick={() => setPage(page - 1)}
          >
            مرحله قبل
          </CButton>
        </div>
      </div>
    </>

    // <>
    //   <CFormSelect aria-label="Default select example" className='text-center'>
    //     <option>انتخاب نوع قرارداد</option>
    //     <option value="1">جشن</option>
    //     <option value="2">باغ</option>
    //     <option value="3">فرمالیته</option>
    //   </CFormSelect>

    //   <div className='container rounded mt-4 border shadow p-3 d-flex flex-row mb-3 justify-content-evenly'>
    //     <CFormCheck id="flexCheckDefault" label="ماشین" className="checkbox-lg" />
    //     <CFormCheck id="flexCheckChecked" label="لباس"  className='' />
    //   </div>
    //   <div className='container rounded mt-4 border shadow p-3 d-flex flex-row mb-3 justify-content-evenly'>
    //     <CFormCheck id="flexCheckDefault" label="Default checkbox" className="" />
    //     <CFormCheck id="flexCheckChecked" label="Checked checkbox"  className='' />
    //   </div>
    //   <div className='container rounded mt-4 border shadow p-3 d-flex flex-row mb-3 justify-content-evenly'>
    //     <CFormCheck id="flexCheckDefault" label="Default checkbox" className="" />
    //     <CFormCheck id="flexCheckChecked" label="Checked checkbox"  className='' />
    //   </div>
    //   <CButton color='success' className='text-light m-4'>
    //   ثبت و تایید قرارداد
    //   </CButton>
    //   <CButton color='danger' className='text-light m-4'>
    //    انصراف
    //   </CButton>
    // </>
  )
}

export default Contract
