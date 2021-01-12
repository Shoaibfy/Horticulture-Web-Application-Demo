import React,{Component} from 'react'

import { Row, DropdownMenu,Dropdown,DropdownToggle,DropdownItem} from 'reactstrap'
import './country.css';
import India from './India/india';

class Country extends Component {
    constructor(props){
        super(props)
        this.state={
            dropdownOpen:false,
            countries:[
                {
                  label: "India",
                  value: "india",
                },
                {
                  label: "America",
                  value: "america",
                },
                {
                  label: "China",
                  value: "china",
                },
                {
                  label: "Nepal",
                  value: "nepal",
                },
              ],
            countryDetails:'',
            id:1
        }
    }
  

    toggle=()=>{
        this.setState({
            dropdownOpen:!this.state.dropdownOpen
        })
        console.log(this.state.countries[0].label)
    }

    displayContent=(id)=>{
        this.setState({
            id:id
        })
      }

    render(){

        return (
            <Row className='country-table'>
                  <Row>
                        <Dropdown isOpen={this.state.dropdownOpen} onClick={this.toggle}>
                    <DropdownToggle style={{backgroundColor:'rgb(15, 15, 92)'}} >
                    Select any Country
                    </DropdownToggle>
                        <DropdownMenu>
                        {/* <DropdownItem header> South Afica</DropdownItem> */}
                        <DropdownItem onClick={()=> this.displayContent(1)} >{this.state.countries[0].label}</DropdownItem>
                        <DropdownItem onClick={()=> this.displayContent(2)}> {this.state.countries[1].label}</DropdownItem>
                        <DropdownItem onClick={()=> this.displayContent(3)}> {this.state.countries[2].label} </DropdownItem>
                        <DropdownItem onClick={()=> this.displayContent(4)}> {this.state.countries[3].label}</DropdownItem>
                        <DropdownItem onClick={()=> this.displayContent(5)}> Japan</DropdownItem>
                        <DropdownItem onClick={()=> this.displayContent(6)} text>Indonesia</DropdownItem>
                        {/* <DropdownItem disabled>Action (disabled)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem> */}
                        </DropdownMenu>
                    </Dropdown>
                        
                    </Row>
                  
                    <Row>
                       
                    {
                            this.state.id === 1 ?<India Country='India' states={29} people={12.2}  likes={507} />  :
                            this.state.id === 2 ? <India Country='America' states={39} people={1.2} likes={107}  /> :
                            this.state.id === 3 ? <India Country='China' states={49} people={6.2}  likes={207} /> :
                            this.state.id === 4 ? <India Country='Nepal' states={59} people={8.2}  likes={587} /> :
                            this.state.id === 5 ? <India Country='Japan' states={69}  people={9.2} likes={877} /> :
                            this.state.id === 6 ? <India Country='Indonesia' states={79} people={3.2}  likes={767} /> :
                            ''
                        }
                    </Row>
                    

                 </Row>
         
        );
    }


// const Country = (props) => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
  
//     const toggle = () => setDropdownOpen(prevState => !prevState);
  

  }

  export default Country;
