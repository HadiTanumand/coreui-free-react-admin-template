import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNoteAdd,
  cilDrop,
  cilList,
  cilPencil,
  cilUserFollow,
  cilSpeedometer,
  cilCursor,
  cilStar,
  cilPlaylistAdd,
  cilListNumberedRtl,
  cilListRich
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'پنل مدیریتی',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'ثبت قراردادها',
  },
  {
    component: CNavGroup,
    name: 'انواع قراردادها',
    to : '/Contract',
    icon: <CIcon icon={cilPlaylistAdd} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'قرارداد جشن',
        to: '/Contract',
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'قرارداد باغ',
        to: '/ContractGarden',
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'قرارداد فرمالیته',
        to: '/ContractFormalite',
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'قرارداد متفرقه',
        to: '/ContractMotafaregh',
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
    ],
    
  },
  {
    component: CNavTitle,
    name: 'لیست قراردادها',
  },
  {
    component: CNavGroup,
    name: 'لیست قراردادها',
    to : '/Contract',
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'لیست جشن',
        to: '/ContractList',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'لیست باغ',
        to: '/BaghList',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'لیست فرمالیته',
        to: '/FormaliteList',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'لیست متفرقه',
        to: '/MotafareghehList',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />
      },
    ],
    
  },

  {
    component: CNavItem,
    name: 'تسک ها',
    to: '/ContractList',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'افزودن کاربر',
    to: '/AddUser',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },  // {
  //   component: CNavItem,
  //   name: 'ثبت قرار داد',
  //   to: '/Contract',
  //   icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
  // }
]

export default _nav
