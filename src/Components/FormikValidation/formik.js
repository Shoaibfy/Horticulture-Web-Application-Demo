import React from 'react';
import './formik.css';
import {Label,Row,Col, Button} from 'reactstrap'
import {Formik, useFormik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';


const  initialValues = {
    name:'',
    lastName:'',
    email:'',
    comments:'',
    address:'',
    social :{
        facebook:'',
        twitter :''
    }
   
}

const  onSubmit = values => {
    console.log(values)
}

    const validationSchema = Yup.object ({
        name : Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        email : Yup.string().email("Invalid Email").required('Invalid Email!'),
        comments : Yup.string().required('Please Enter comment!'),
        address : Yup.string().required('Enter Address')

    })

function FormikValidation()  {

const formik = useFormik({initialValues,onSubmit,validationSchema})  //validate
console.log(formik.touched)
    
        return (
            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
           
            >
                <Form  className='formAlignment'  >  
                <h6 className='validation-heading'>Form Validations for touched inputs fields: </h6>
                {/* onSubmit={formik.handleSubmit}  onsubmit added in formik field */}
                       <Row>
                                <Label htmlFor='name' md={2} className='lastname-label' >Name :</Label>
                                <Field type='text' name='name' placeholder='Name..'  className='input-field'   />
                                {/* {...formik.getFieldProps('name')}  field will automatically handles the change with name attributes */}
                                {/* onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} */}
                            
                            <Row style={{color:'red',marginTop:'0px',paddingLeft:'20px'}}>
                                <ErrorMessage name='name' />
                                {/* { formik.touched.name && formik.errors.name ? <p> {formik.errors.name} </p> : null} error massege with aname attribute */}
                            </Row>
                       <Row  >
                           
                              <Label htmlFor='lastName' md={2} className='lastname-label' >LastName:</Label>
                              <Field type='text'  name='lastName' placeholder='LastName..'   className='input-field'   />
                        
                        {/* <Col > */}
                            <Row style={{color:'red',marginTop:'0px',paddingLeft:'20px'}}>
                            <ErrorMessage name='lastName'  />
                            </Row>
                                       
                    </Row> 
                       
                   </Row>
                    <Row>
                            <Label  htmlFor='email'  md={2} className='lastname-label'>E-mail :</Label>
                              <Field type='email'  name='email' placeholder='Email..' className='input-field'   />
                        
                            <Row style={{color:'red',paddingLeft:'10px',marginTop:'0px'}}>
                            <ErrorMessage name='email' />
                            </Row>
                   </Row>
                     <Row>             
                            <Label  htmlFor='comments'  md={2} className='lastname-label'>Address:</Label>
                              <Field as='textarea'  name='comments' placeholder='comments..'  className='comment-field'   />

                              <Col style={{color:'red',paddingLeft:'10px',marginTop:'0px'}}>
                                 <ErrorMessage name='comments' />
                              </Col>         
                    </Row>
                    <Row>
                            <Label  htmlFor='facebook'   md={2} className='lastname-label'>Review :</Label>
                              <Field as='textarea'  name='comments' placeholder='comments..' className='comment-field'   />
                        
                        <Col style={{color:'red',paddingLeft:'10px',marginTop:'20px'}}>
                           <ErrorMessage name='comments' />
                        </Col>   
                   </Row>
                     <Row> 
                           <Label  htmlFor='twitter'  md={2} className='lastname-label'> Support :</Label>
                           <Field as='textarea'  name='comments' placeholder='comments..' className='comment-field'   />
                          <Col style={{color:'red',paddingLeft:'10px',marginTop:'10px'}}>
                                    <ErrorMessage name='comments' />
                          </Col>
                    </Row>
                    <Row  md={3}>
                  
                              <Button type='submit' style={{backgroundColor:'blue',marginTop:'30px',marginLeft:'150px'}}>Submit</Button>
                    </Row>
                   
                    
                </Form>
            </Formik>
        )
    
}

export default FormikValidation




// Address field 

// <Row md={2}>
// <Col  >
//     <Label  htmlFor='address'  style={{color:'black',marginLeft:'10px'}}>Address</Label>
//       <Field as='textarea'  name='address' placeholder='address..'    >
//           { (props)=>{
//               const { field,meta } =props
//               return (
//                 <div    style={{color:'red',paddingLeft:'10px',marginTop:'0px'}}>
//                 <input  type='text'  {...field}  placeholder='address..' />
//                 {/* {meta.touched && meta.error ? <p > {meta.error} </p> : ''} */}
//                 </div>
//                 )
//           } 

//            }
//       </Field>
// </Col>
// <Col style={{color:'red',paddingLeft:'100px',marginTop:'25px'}}>
// <ErrorMessage name='address' />
// </Col>
// </Row>