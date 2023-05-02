import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CFormInput } from '@coreui/react'
import { toast, ToastContainer } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInputGroup,
  CInputGroupText,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormSwitch,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import 'react-multi-date-picker/styles/layouts/mobile.css'

import CustomerInfo from './customerInfo'
import PartyDetail from './partyDetail'
import PictureBoard from './pictureBoard'
import AlbumeDetail from './albumeDetail'

const editContract = () => {
  const params = useParams()
  const token = localStorage.getItem('token ateliyeh')
  const currentUser = localStorage.getItem('curent_user')
  const [formdata, setFormData] = useState({})
  const [albumePaperList, setAlbumPaperList] = useState([])
  const [albumeList, setAlbumList] = useState([])
  const [pictureBoardsList, setPictureBoardList] = useState([])

  useEffect(() => {
    getContractEdit()
  }, [])

  const getContractEdit = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetContractDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        setFormData(result.data.contract)
        console.log(result.data.contract)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSwitch = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.checked,
    })
  }


  const handleInput = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }


  const getListAlbume = () => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      contract_detail_id: params.id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/GetContractAlbumes',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        if(result.data.albumes) setAlbumList(result.data.albumes);
        if(result.data.albumes== null){
          toast.success("آلبومی وجود ندارد", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
          });
        }else{
          toast.success("لیست آلبوم ها به روز شد", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
          });
        }
       
      })
      .catch((err) => {
        console.log(err)
        toast.error('خطا در دریافت آلبوم ها دوباره تلاش کنید.', {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
      })
  }
  const getPictureList = () => {
    
  }
  const getPaperList = (id) => {
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      albume_detail_id: id,
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
        albumePaperList(result.data.albume_papers)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteAlbume = (id)=>{
    const data = {
      api_key: localStorage.getItem('api_key'),
      current_user: currentUser,
      albume_detail_id: id,
    }

    axios({
      method: 'post',
      url: '/api/AdminDashboard/DeleteAlbumeDetail',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((result) => {
        console.log(result);
        getListAlbume();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <ToastContainer rtl bodyClassName="toastBody" />
      <CustomerInfo formdata={formdata}
      handleSwitch={handleSwitch} 
      handleInput={handleInput} 
      setFormData={setFormData} />

      <PartyDetail formdata={formdata}
      handleSwitch={handleSwitch} 
      handleInput={handleInput} 
       setFormData={setFormData} />

      <AlbumeDetail formdata={formdata} 
      handleSwitch={handleSwitch} 
      handleInput={handleInput} 
      setFormData={setFormData}
      albumeList={albumeList}
      getListAlbume={getListAlbume}
      albumePaperList={albumePaperList}
      getPaperList={getPaperList}
      setAlbumPaperList={setAlbumPaperList}
      contract_id={params.id}
      deleteAlbume={deleteAlbume}
       />

      <PictureBoard formdata={formdata}
      handleSwitch={handleSwitch}  
      handleInput={handleInput}  
      setFormData={setFormData} 
      pictureBoardsList={pictureBoardsList}
      getPictureList={getPictureList}
      setPictureBoardList={setPictureBoardList}
      />
      
     
    </>
  )
}

export default editContract
