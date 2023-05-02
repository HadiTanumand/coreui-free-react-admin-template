import React, { useState ,useContext,useEffect } from 'react'
import { CCard, CProgress, CProgressBar, CFormSelect, CRow, CButton } from '@coreui/react'
import { DocsExample } from 'src/components'
import PersonalInfo from './PersonalInfo'
import CustomerService from './CustomerService'
import PartyService from './PartyService'
import PhotographyService from './PhotographyService'
import { AuthContext } from 'src/context/auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const Contract = () => {
  const {dispatch} = useContext(AuthContext);
  const [page, setPage] = useState(0)
  const [nextStep, setNextStep] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contract_id: '',
    contract_number: '',
    customer_name: '',
    customer_id: '',
    fullnameMan: '',
    fullnameWoman: '',
    mobbileMan: '',
    mobileWoman: '',
    manBirthdate: '',
    womanBirthdate: '',
    address: '',
    f_building: false,
    f_mahzar: false,
    p_building: false,
    p_lobby: false,
    p_first_floor: false,
    p_mahzar: false,
    p_house_flower: false,
    p_second_floor: false,
    p_roof_garden: false,
    p_hani_moon: false,
    number_of_camera: '',
    number_of_camera_man: '',
    number_of_cameras_woman: '',
    number_of_crane: '',
    number_of_crane_man: '',
    number_of_crane_woman: '',
    stop_laser: '',
    stop_laser_man: false,
    stop_laser_woman: false,
    heli_shot_entry: false,
    heli_shot_out: false,
    heli_shot_celebration_man: false,
    heli_shot_celebration_woman: false,
    t_celebration_man: false,
    t_celebration_woman: false,
    f_dowry: false,
    f_beauty_shop: false,
    live: false,
    clip: false,
    show_clip_atelie: false,
    show_clip_hall: false,
    edit_film: false,
    instagram_clip_count: false,
    picture_slide_show: false,
    play_pic_slide_hall: false,
    play_pic_slide_atelie_tv: false,
    play_pic_slide_atelie_videowall: false,
    celebration_date: '1402-01-31',
    celebration_time: '20:12:20',
    celebration_address: '',
    picture_type_id: '1',
    picture_size_id:'1',
    paperpic_type_id:'1',
    price:'0',
    discount:'0',
    albume_detail_id: '1',
    paper_type_id : '1',
    number_of_paper : '0',
    number_of_picpaper : '0',
    type_id:'1',
    albume_size_id:'1',
    skin_id:'1',
    bag_id:'2',
    number_of_papers:'0',
    travel_album_size_id: '1',
  })

  ///////////////////////////   Use Effect for check token
//   useEffect(()=>{
//     dispatch({
//       type : 'check',
//       payload : navigate
//     })
// } , [])

  const pageTitle = [
    'customerService',
    'personalInfo',
    'partyService',
    'photographyService',
  ]

  const addPage = () => {
    if (page === 0) {
      return <PersonalInfo formdata={formData} setformdata={setFormData} 
      nextStep={nextStep} setNextStep={setNextStep}/>
    }
    if (page === 1) {
      return <CustomerService formdata={formData} setformdata={setFormData} />
    }
    if (page === 2) {
      return <PartyService formdata={formData} setformdata={setFormData} />
    }
    else{
      return <PhotographyService formdata={formData} setformdata={setFormData} />
    } 
  }

  return (
    <>
      <div className="container bg-white p-4 ">
        <div className="mt-3">
          <CProgress height={35} className="mb-4">
            <CProgressBar color="success" variant="striped" animated value={page === 25 ? 0 : 25*(page+1)}>
            {page === 25 ? 0 : 25*(page+1)}%
            </CProgressBar >
          </CProgress>
        </div>
        <div className="m-4">{addPage()}</div>

        <div>
          <CButton color="success" className="text-light m-4"
           onClick={() => {
              setPage(page+1);
          }}
          disabled={!nextStep || page===3}
          >
             مرحله بعد
          </CButton>
          <CButton
            color="danger"
            disabled={page == 0}
            className="text-light m-4"
            onClick={() => {
              setNextStep(true)
              setPage(page - 1)
            }}
          >
            مرحله قبل
          </CButton>
        </div>
      </div>
    </>
  )
}

export default Contract
