import React, { Component } from 'react'
import {Typography,Grid,Box,Stepper,StepLabel,Step,StepContent,
  TextField,Autocomplete,Stack,Fab,Button,IconButton} from '@mui/material'
  import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
  import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
  import AccountCircle from '@mui/icons-material/AccountCircle';
  import AddBoxIcon from '@mui/icons-material/AddBox';

export default function AddModel({ innerWidth,handleNext }) {

  const steps = [
    {
        label: 'Patient Detail',
        description: 'Enter the medical history about the patient.',
    },
    {
        label: 'Arrival Departure',
        description: 'Enter the medical history about the patient.',
    },
    {
        label: 'Accomondations',
        description: "Enter the patient's accommodation information.",
    },
];
 
    return (
      
      <Box item xs={12} md={12} sx={{ width: innerWidth < 830 ? '100%' : '70%', height: '100%' }}>
        <Grid container sm={12} md={12}  sx={{ width: '100%', height: '87%', }}>
           {/* SideBar */}  
                            <Box item xs={12} md={12} sx={{ borderRight: '1px solid', borderColor: '#EEEEEE', width: '30%', height: '100%', }}>
                                <Box sx={{ width: '100%', height: '60%', }}>
                                    <Stepper  orientation="vertical" sx={{ ml: '29px', pt: '15px' }}>
                                        {steps.map((step) => (
                                            <Step key={step.label}>
                                                <StepLabel>
                                                    <strong>{step.label}</strong>
                                                </StepLabel>
                                                <StepContent>
                                                    <Typography sx={{ fontSize: '12px' }}>{step.description}</Typography>
                                                </StepContent>
                                            </Step>
                                        ))}
                                    </Stepper>

                                </Box>
                               
                            </Box>
                            
                            <Grid  sx={{ width: '75%', height: innerWidth < 570 ? 'auto' : '50%', display: 'inline-block', justifyContent: 'space-around' }}>
                    {/* 1 line */}
                    <Stack direction={innerWidth < 570 ? 'column' : 'row'} spacing={2} sx={{ width: '100%', }}>
                        <Grid width={innerWidth < 570 ? '100%' : '33%'}>
                            <Typography sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                                Name
                            </Typography>
                            <TextField
                                size='small'
                                id="name"
                                key='name'
                                placeholder='Name'
                                variant="outlined"

                                sx={{ color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                            />
                        </Grid>
                        <Grid >
                            <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                                Surname
                            </Typography>
                            <TextField
                                size='small'
                                id="surname"
                                key='surname'
                                placeholder='Surname'
                                variant="outlined"
                            
                                sx={{ color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                            />
                        </Grid> 
                        <Grid  >
                            <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                                Source of Booking
                            </Typography>
                            <Autocomplete
                                size="small"
                                disablePortal
                                id="combo-box-demo"
                                options={[{ label: 'The Shawshank Redemption', year: 1994 }]}
                                renderInput={(params) => 
                                <TextField size="small" className="text_input" placeholder="Operation"  {...params} fullWidth id="outlined-basic" variant="outlined" />}
                            />
                          
                        </Grid> 
                         </Stack>
                    {/* 2 line */}
                    <Stack direction={innerWidth < 570 ? 'column' : 'row'} spacing={2} sx={{ width: '100%', }}>
                        <Grid width={innerWidth < 570 ? '100%' : '33%'}>
                            <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                                Gender
                            </Typography>
                            <TextField
                                size='small'
                                id="gender"
                                key='gender'
                                placeholder='Gender'
                                variant="outlined"
                                InputProps={{
                                  
                                }}
                                sx={{ color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                            />
                        
                        </Grid>               
                         
                        <Grid width={innerWidth < 570 ? '100%' : '33%'} >
                            <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                                Date of Birth
                            </Typography>
                            <TextField size="small"
                                id="date"
                                type="date"
                                placeholder='Date of Birth'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                            />
                        </Grid>
                        <Grid width={innerWidth < 570 ? '100%' : '33%'} >
                            <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                                Language
                            </Typography>
                            <Autocomplete
                                size="small"
                                disablePortal
                                id="lang"
                                options={[{ label: 'Turkish', }, { label: 'English' }]}
                                renderInput={(params) =>
                                    <TextField
                                        size="small"
                                        placeholder="English"
                                        {...params}
                                        fullWidth
                                        id="outlined-basic"
                                        variant="outlined"
                                        sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                                    />
                                }
                            />
                            
                        </Grid>
                        </Stack>
                </Grid>
                <Grid>
                <Fab sx={{
                        width: '90%',
                        height: '130px', 
                        display: 'inline-flex',
                        border: '1px dashed #00000040',
                        borderRadius: '10px',
                        background: '#EFFFF7',
                    }}>
            <Grid container direction='column'
             sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: '100%', }}>
                            <img alt="" src="" style={{ maxHeight: '100%', maxWidth: '100%', }} />
                            <span style={{ fontSize: '10px', }}>
                                Select a photo or drag
                                and drop here
                            </span>
                        </Grid>
                    </Fab>



 {/* 3 line */}
                    <Stack direction={innerWidth < 570 ? 'column' : 'row'} spacing={2} sx={{ width: '100%', mt: '10px', height: innerWidth < 570 ? 'auto' : '23%' }}>
                    <Grid width={innerWidth < 570 ? '100%' : '33%'}>
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Phone Number
                        </Typography>
                        <TextField
                            size='small'
                            id="phone"
                            key='phone'
                            placeholder='Phone Number'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <PhoneInTalkOutlinedIcon position="start" sx={{ color: '#C2C2C2', mr: '6px', }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '33%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            E-Mail Address
                        </Typography>
                        <TextField
                            size='small'
                            id="email"
                            key='email'
                            placeholder='E-Mail Address'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <MailOutlinedIcon position="start" sx={{ color: '#C2C2C2', mr: '6px', }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '33%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Passport Number
                        </Typography>
                        <TextField
                            size='small'
                            id="email"
                            key='email'
                            placeholder='Passport Number'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <img alt="" src="" style={{ color: '#C2C2C2', marginRight: '6px', width: '20px' }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                </Stack>
                {/* 4 line */}
                <Stack direction={innerWidth < 570 ? 'column' : 'row'} spacing={2} sx={{ width: '100%', mt: '10px', height: innerWidth < 570 ? 'auto' : '23%' }}>
                    <Grid width={innerWidth < 570 ? '100%' : '40%'}>
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Country
                        </Typography>
                        <Autocomplete
                            size="small"
                            disablePortal
                            id="country"
                            options={[{ label: 'Turkey', }, { label: 'United Kingdom' }, { label: 'Russia' }]}
                            renderInput={(params) =>
                                <TextField
                                    size="small"
                                    placeholder="Turkey"
                                    {...params}
                                    fullWidth
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                                />
                            }
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '40%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            City
                        </Typography>
                        <Autocomplete
                            size="small"
                            disablePortal
                            id="city"
                            options={[{ label: 'Istanbul', }, { label: 'Ankara' }, { label: 'Bursa' }]}
                            renderInput={(params) =>
                                <TextField
                                    size="small"
                                    placeholder="Istanbul"
                                    {...params}
                                    fullWidth
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                                />
                            }
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '20%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Blood Group
                        </Typography>
                        <TextField
                            size='small'
                            id="blood"
                            placeholder='Blood Group'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <img alt="" src="" style={{ color: '#C2C2C2', marginRight: '6px', width: '15px' }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                </Stack>
            </Grid>

            {/* 2 side */}
            <Grid direction='row' sx={{ width: '100%', height: innerWidth < 570 ? 'auto' : '53%', px: '10px', py: '10px', }}>
                {/* 1 line */}
                <Stack direction='row' spacing={0} sx={{ width: '100%', height: innerWidth < 570 ? 'auto' : '10%', }}>
                    <Typography variant='h6' sx={{ pt: '3px', color: '#000000' }}>
                        Add Companian
                    </Typography>
                    <IconButton>
                        <AddBoxIcon sx={{ color: '#0C1116' }} />
                    </IconButton>
                </Stack>
                {/* 2 line */}
                <Stack direction={innerWidth < 570 ? 'column' : 'row'} spacing={2} sx={{ width: '100%', height: innerWidth < 570 ? 'auto' : '25%', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid width={innerWidth < 570 ? '100%' : '19%'}>
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Name
                        </Typography>
                        <TextField
                            size='small'
                            id="name"
                            placeholder='Name'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <AccountCircle position="start" sx={{ color: '#C2C2C2', mr: '6px', }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '19%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Surname
                        </Typography>
                        <TextField
                            size='small'
                            id="surname"
                            placeholder='Surname'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <AccountCircle position="start" sx={{ color: '#C2C2C2', mr: '6px', }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '12%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Gender
                        </Typography>
                        <TextField
                            size='small'
                            id="gender"
                            key='gender'
                            placeholder='Gender'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <img alt="" src="" style={{ color: '#C2C2C2', marginRight: '6px', width: '20px' }} />
                                ),
                            }}
                            sx={{ color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '20%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Date of Birth
                        </Typography>
                        <TextField size="small"
                            id="date"
                            type="date"
                            placeholder='Date of Birth'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '30%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Passport Number
                        </Typography>
                        <TextField
                            size='small'
                            id="email"
                            key='email'
                            placeholder='Passport Number'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <img alt="" src="" style={{ color: '#C2C2C2', marginRight: '6px', width: '20px' }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                </Stack>
                {/* 3 line  */}
                <Stack direction={innerWidth < 570 ? 'column' : 'row'} spacing={2} sx={{ width: '100%', height: innerWidth < 570 ? 'auto' : '25%', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #EEEEEE', }}>
                    <Grid width={innerWidth < 570 ? '100%' : '33%'}>
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Emergency Name
                        </Typography>
                        <TextField
                            size='small'
                            id="Ename"
                            placeholder='Emergency Name'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <AccountCircle position="start" sx={{ color: '#C2C2C2', mr: '6px', }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '27%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Emergency Sur Name
                        </Typography>
                        <TextField
                            size='small'
                            id="Esurname"
                            placeholder='Emergency Surname'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <AccountCircle position="start" sx={{ color: '#C2C2C2', mr: '6px', }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '25%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Passport Number
                        </Typography>
                        <TextField
                            size='small'
                            id="email"
                            key='email'
                            placeholder='Passport Number'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <img alt="" src="" style={{ color: '#C2C2C2', marginRight: '6px', width: '20px' }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                    <Grid width={innerWidth < 570 ? '100%' : '15%'} >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Relation
                        </Typography>
                        <TextField
                            size='small'
                            id="relation"
                            placeholder='Relation'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <img alt="" src="" style={{ color: '#C2C2C2', marginRight: '6px', width: '20px' }} />
                                ),
                            }}
                            sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                        />
                    </Grid>
                </Stack>
                {/* 4 line */}
                <Stack direction='row' spacing={2} sx={{ width: '100%', height: innerWidth < 570 ? 'auto' : '25%', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #EEEEEE', }}>
                    <Grid width='50%'>
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Sales Person
                        </Typography>
                        <Autocomplete
                            size="small"
                            disablePortal
                            id="sperson"
                            options={[{ label: 'Mike', }, { label: 'Hamza' }, { label: 'Jack' }]}
                            renderInput={(params) =>
                                <TextField
                                    size="small"
                                    placeholder="Sales Person"
                                    {...params}
                                    fullWidth
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                                />
                            }
                        />
                    </Grid>
                    <Grid width='50%' >
                        <Typography variant="h3" sx={{ fontSize: '80%', lineHeight: '20px', fontWeight: '600', color: '#000000', }} component="div" >
                            Contact Person
                        </Typography>
                        <Autocomplete
                            size="small"
                            disablePortal
                            id="cperson"
                            options={[{ label: 'Mike', }, { label: 'Hamza' }, { label: 'Jack' }]}
                            renderInput={(params) =>
                                <TextField
                                    size="small"
                                    placeholder="Contact Person"
                                    {...params}
                                    fullWidth
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: '100%', color: '#B3B3B3', background: '#FAFCFE', borderColor: '#E8EAEE', }}
                                />
                            }
                        />
                    </Grid>
                </Stack>
                <Stack direction='row' sx={{ width: '100%', mt: '15px', justifyContent: 'flex-end', height: innerWidth < 570 ? 'auto' : '10%' }}>
                    <Button onClick={() => handleNext()} variant="contained" sx={{ backgroundColor: '#7167E8', width: innerWidth < 570 ? '40%' : '20%', height: '100%', borderRadius: '5px', }} >
                        <img alt="" src="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Button>
                    </Stack>
                </Grid>
                </Grid>
                </Box>
    )
  
}
