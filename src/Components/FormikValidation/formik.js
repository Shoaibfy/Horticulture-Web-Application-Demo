import React from 'react';
import './newFormik.css';
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
                <h6>Form Validation for handling touched inputs: </h6>
                {/* onSubmit={formik.handleSubmit}  onsubmit added in formik field */}
                   <Row>
                       <Col>
                            <Col >
                                <Label htmlFor='name' >Name :</Label>
                                <Field type='text' name='name' placeholder='Name..'    />
                                {/* {...formik.getFieldProps('name')}  field will automatically handles the change with name attributes */}
                                {/* onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} */}
                            </Col>
                            <Row style={{color:'red',marginTop:'-20px',paddingLeft:'20px'}}>
                                <ErrorMessage name='name' />
                                {/* { formik.touched.name && formik.errors.name ? <p> {formik.errors.name} </p> : null} error massege with aname attribute */}
                            </Row>
                       </Col>
                       <Col>
                       <Row >
                        <Col >
                              <Label htmlFor='lastName' >LastName :</Label>
                            <Field type='text'  name='lastName' placeholder='LastName..'   />
                        </Col>
                        <Col style={{color:'red',marginTop:'-20px',paddingLeft:'20px'}}>
                          <ErrorMessage name='lastName' />
                        </Col>
                    </Row> 
                       </Col>
                   </Row>
                    <Row md={2}>
                        <Col >
                            <Label  htmlFor='email'>E-mail :</Label>
                              <Field type='email'  name='email' placeholder='Email..'  />
                        </Col>
                        <Col style={{color:'red',paddingLeft:'10px',marginTop:'30px'}}>
                        <ErrorMessage name='email' />
                        </Col>
                    </Row>
                    <Row md={2}>
                        <Col >
                            <Label  htmlFor='comments'  style={{color:'black',marginTop:'0px'}}>Comments :</Label>
                              <Field as='textarea'  name='comments' placeholder='comments..'  />
                        </Col>
                        <Col style={{color:'red',paddingLeft:'10px',marginTop:'20px'}}>
                        <ErrorMessage name='comments' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Row >
                        <Col >
                            <Label  htmlFor='facebook'  style={{color:'black',marginTop:'0px'}}>facebook :</Label>
                              <Field as='textarea'  name='comments' placeholder='comments..'  />
                        </Col>
                        <Col style={{color:'red',paddingLeft:'10px',marginTop:'20px'}}>
                        <ErrorMessage name='comments' />
                        </Col>
                    </Row>
                   
                        </Col>
                        <Col>
                        
                                <Col>
                                    <Label  htmlFor='twitter'  style={{color:'black',marginTop:'0px'}}>twitter :</Label>
                                    <Field as='textarea'  name='comments' placeholder='comments..'  />
                                </Col>
                                <Col style={{color:'red',paddingLeft:'10px',marginTop:'20px'}}>
                                    <ErrorMessage name='comments' />
                                </Col>
                            
                         </Col>


                    </Row>
                    <Row  md={1}>
                        <Col >
                              <Button type='submit'>Submit</Button>
                        </Col>
                        
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