import React, { Component } from 'react';
import './invoice.css';

export class GenerateInvoice extends Component {
render() {
return (
                    
                <div className='generate-invoice-background'>
                <h3>Generate Invoice</h3>
                <div className='seprateing-divs'>

                <div className='invoice-background'>
                <div className='client-col'>
                <div>
                <div className='client-text'>
                Client
                </div>
                <div>
                <select className='client-types' >
                <option>Internal</option>
                </select>
                </div>
                </div>
                <div className='client-textarea'>
                project Text area
                </div>
                <div>
                <div className='client-text'>
                Date Range
                </div>
                <div className='date-selection-row'>
                <div>
                <select className='from-date-range' >
                <option>Internal</option>
                <option>External</option>
                </select>
                </div>
                <div className='to-text'>
                to
                </div>
                <div>
                <select className='to-date-range' >
                <option>Internal</option>
                <option>External</option>
                </select>
                </div>
                </div>
                </div>

                </div>
                <div className='time-entry-col'>
                <div >
                <div className='client-text'>
                Time Entry Formatting
                </div>

                <div className='detailed-group'>
                <div className='radio-button'>
                <input type='radio' checked/>
                </div>
                <div>
                Detailed : Each time entry is its own line time
                </div>

                </div>
                <div className='grouped-details'>
                <div className='radio-button'>
                <input type='radio' /><br/>
                </div>
                <div>
                Grouped :<p style={{fontSize:'17px'}}> Each time entry is its own line time</p>
                </div>

                </div>
                <div className='grouped-details'>
                <div className='radio-button'>
                <input type='radio' /><br/>
                </div>
                <div>
                single : Each time entry is its own line time
                </div>

                </div>
                </div>
                <div className='note-text'>
                <b style={{color:'red'}}>Note:</b><p> Use "Single Line" method when your Billing Method is "Flat Project Amount" else records will not get displayed over the invoice.</p>
                </div>
                <div>
                <div className='client-text'>
                Staff Formatting
                </div>
                <div className='staff-detailed'>
                <div className='radio-button'>
                <input type='radio' />
                </div>
                <div>
                Detailed : Each time entry is its own line time
                </div>

                </div>
                <div className='staff-grouped'>
                <div className='radio-button'>
                <input type='radio' /><br/>
                </div>
                <div>
                Grouped :<p style={{fontSize:'17px'}}> Each time entry is its own line time</p>
                </div>
                </div>
                </div>

                </div>

                </div>
                <div className='buttons-row'>
                <div >
                <label className='generate-invoice-button'>Genrate Invoice</label>
                </div>
                <div >
                <label className='cancel-invoice-button'>Cancel</label>
                </div>
                </div>



         </div>
  </div>
                )
}
}

export default GenerateInvoice