import { motion } from 'framer-motion'

function JobCard(props) {
  const languages = props.languages.map((language) => {
    return (
      <div onClick={props.addToFilter} key={language} className='job-language'>
        {language}
      </div>
    )
  })

  const tools = props.tools.map((tools) => {
    return (
      <div onClick={props.addToFilter} key={tools} className='job-tools'>
        {tools}
      </div>
    )
  })

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      className='job-card-wrapper'
    >
      <div className={`job-card ${props.featured ? 'featured-border' : ''}`}>
        <img
          src={`${props.logo}`}
          alt={`${props.company} logo`}
          className='job-logo'
        />
        <div className='job-details'>
          <div className='job-info'>
            <p className='job-company'>{props.company}</p>
            {props.new ? <div className='job-new'>NEW!</div> : null}
            {props.featured ? (
              <div className='job-featured'>FEATURED</div>
            ) : null}
          </div>
          <h1 className='job-position'>{props.position}</h1>
          <div className='job-type-info'>
            <div className='job-postedAt'>{props.postedAt}</div>
            <div className='job-contract'>{props.contract}</div>
            <div className='job-location'>{props.location}</div>
          </div>
        </div>

        <hr className='hr-line show' />

        <div className='job-list'>
          <div onClick={props.addToFilter} className='job-role'>
            {props.role}
          </div>
          {props.level.length > 0 && (
            <div onClick={props.addToFilter} className='job-level'>
              {props.level}
            </div>
          )}
          {tools}
          {languages}
        </div>
      </div>
    </motion.div>
  )
}

export default JobCard
