import React,{Component} from 'react'

import { Row, DropdownMenu,Dropdown,DropdownToggle,DropdownItem} from 'reactstrap'
import './country.css';

class Country extends Component {
    constructor(props){
        super(props)
        this.state={
            dropdownOpen:false,
            countries:[
                {
                  label: "Apple",
                  value: "apple",
                },
                {
                  label: "Mango",
                  value: "mango",
                },
                {
                  label: "Banana",
                  value: "banana",
                },
                {
                  label: "Pineapple",
                  value: "pineapple",
                },
              ],
            countryDetails:''
        }
    }
  

    toggle=()=>{
        this.setState({
            dropdownOpen:!this.state.dropdownOpen
        })
        console.log(this.state.countries.keys())
    }

    render(){

        return (
            <Row className='country-table'>
                 <Dropdown isOpen={this.state.dropdownOpen} onClick={this.toggle}>
            <DropdownToggle caret>
              country
              </DropdownToggle>
                <DropdownMenu>
                <DropdownItem header>{this.state.countries[0].label}</DropdownItem>
                <DropdownItem> {this.state.countries[1].label}</DropdownItem>
                <DropdownItem> South Afica</DropdownItem>
                <DropdownItem> China</DropdownItem>
                <DropdownItem> Japan</DropdownItem>
                <DropdownItem text>Indonesia</DropdownItem>
                {/* <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem> */}
                </DropdownMenu>
            </Dropdown>
            {this.state.countries.label === 'Mango' ? 
              <Row>
                Mango
              </Row>  :
               <Row>
               select India
             </Row>

              }
          
                 
            </Row>
         
        );
    }


// const Country = (props) => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
  
//     const toggle = () => setDropdownOpen(prevState => !prevState);
  

  }

  export default Country;
