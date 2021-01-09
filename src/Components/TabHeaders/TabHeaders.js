import React, { Component } from 'react'
import './Tabheaders.css'
import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk,faAppleAlt,faAdjust,faAnchor,faLeaf,faUser, 
    faEdit,faRoute,faPastafarianism,faAddressBook,faTable, faCocktail
 } from '@fortawesome/free-solid-svg-icons'
import TabContents from '../TabContent/TabContent';
import ProductName from '../ProductName/productName';


export class TabHeaders extends Component {
    constructor(props){
        super(props)
        this.state={
            id:1,
       
     }
 }
  

    displayContent=(id)=>{
      this.setState({
          id:id
      })
    }

       
    render() {
        return (
         <div>
         <ProductName productName='HORTICULTURE'/>
            <div className='header-with-content'>
           
                  <div className='tab-headers'>
                         <Row className='icon-row'  onClick={()=> this.displayContent(1)}  >
                                <Col><FontAwesomeIcon icon={faMailBulk}  spin className='icons-sizes' /></Col>
                                <Col className='icon-text'>Dashboard</Col>
                        </Row>
                        <Row className='icon-row' onClick={()=> this.displayContent(2)}   >
                                <Col><FontAwesomeIcon  spin icon={faAppleAlt} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Charts</Col>
                        </Row>
                        <Row className='icon-row'  onClick={()=> this.displayContent(3)}  >
                                <Col><FontAwesomeIcon spin icon={faCocktail}   className='icons-sizes' /></Col>
                                <Col className='icon-text'>Apps</Col>
                        </Row>
                        <Row className='icon-row'   onClick={()=> this.displayContent(4)} >
                                <Col><FontAwesomeIcon spin icon={faAdjust} className='icons-sizes' /></Col>
                                <Col className='icon-text'>IconName</Col>
                        </Row>
                        <Row className='icon-row'   onClick={()=> this.displayContent(5)}  >
                                <Col><FontAwesomeIcon  spin icon={faAnchor} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Transaction</Col>
                        </Row>
                        <Row className='icon-row'  onClick={()=> this.displayContent(6)} >
                                <Col><FontAwesomeIcon  spin icon={faEdit} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Editables</Col>
                        </Row>
                        <Row className='icon-row'   onClick={()=> this.displayContent(7)}  >
                                <Col><FontAwesomeIcon spin icon={faRoute} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Hartculture</Col>
                        </Row>
                        <Row className='icon-row'   onClick={()=> this.displayContent(8)}  >
                                <Col><FontAwesomeIcon spin icon={faTable} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Tables</Col>
                        </Row>
                        <Row className='icon-row'  onClick={()=> this.displayContent(9)}  >
                                <Col><FontAwesomeIcon spin icon={faAddressBook} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Orders</Col>
                        </Row>
                        <Row className='icon-row'   onClick={()=> this.displayContent(10)} >
                                <Col><FontAwesomeIcon spin icon={faLeaf} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Flowers</Col>
                        </Row>
                        <Row className='icon-row'   onClick={()=> this.displayContent(11)}  >
                                <Col><FontAwesomeIcon spin icon={faPastafarianism} className='icons-sizes' /></Col>
                                <Col className='icon-text'>Plants</Col>
                        </Row>        
                        <Row className='icon-row'  onClick={()=> this.displayContent(12)}  >
                                <Col><FontAwesomeIcon spin icon={faUser} className='icons-sizes'  /></Col>
                                <Col className='icon-text'>About</Col>
                        </Row>     
                </div>
                <div>
                    {
                     this.state.id === 1 ? <TabContents title='DASHBOARD'/>:
                     this.state.id === 2 ? <TabContents title='CHARTS'/>:
                     this.state.id === 3 ? <TabContents title='APPS'/>:
                     this.state.id === 4 ? <TabContents title='ICON_NAMES'/>:
                     this.state.id === 5 ? <TabContents title='TRANSACTIONS'/>:
                     this.state.id === 6 ? <TabContents title='EDITABLES'/>:
                     this.state.id === 7 ? <TabContents title='HORTICULTURE'/>:
                     this.state.id === 8 ? <TabContents title='TABLES'/>:
                     this.state.id === 9 ? <TabContents title='ORDERS'/>:
                     this.state.id === 10 ? <TabContents title='FLOWERS'/>:
                     this.state.id === 11 ? <TabContents title='PLANTS'/>:
                     this.state.id === 12 ? <TabContents title='ABOUT'/>:
                      <TabContents title='Dashboard'/> 
                   }
                </div>
                </div>
         </div>
        )
    }
}

export default TabHeaders
