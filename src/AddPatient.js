import React, { Component } from 'react'
import {Button,Typography} from '@mui/material'
export default function AddPatient({ handleSetModalOpen, }) {
 
    return (
      <div>
        <Button onClick={() => handleSetModalOpen(true)} variant="contained" sx={{ background: '#5BDCBD', height: '61px', width: '62.5px', fontSize: '45px', mr: '10px', }}>
        <Typography variant="h3" sx={{ fontSize: '16px', lineHeight: '30px', fontWeight: '700', color: '#1E1F20', }} component="div" >
                        Patient
                    </Typography> +
                </Button>
      </div>
    )
  }

