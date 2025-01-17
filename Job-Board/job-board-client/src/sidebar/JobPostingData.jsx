import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
  const now = new Date();
  //console.log(now);
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
  //console.log(twentyFourHoursAgo);

  //convet date to string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
  const sevenDaysAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
  const ThirtyDaysAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
  //console.log(twentyFourHoursAgoDate);
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>date of Posting</h4>

      <div>
        <label className='sidebar-label-container'>
          <input 
          type="radio" 
          name="test" 
          id="test" 
          value="" 
          onChange={handleChange}
          />
          <span className='checkmark'></span>All Time
          </label>

          <InputField 
            handleChange={handleChange} 
            value={twentyFourHoursAgoDate} 
            title="Last 24 Hours"
            name="test"
           />
          <InputField 
            handleChange={handleChange} 
            value={sevenDaysAgoDate}
            title="Last 7 days"
            name="test"
           /> 
           <InputField 
            handleChange={handleChange} 
            value={ThirtyDaysAgoDate}
            title="Last Month"
            name="test"
           />
           
        </div>
    </div>
  )
}

export default JobPostingData