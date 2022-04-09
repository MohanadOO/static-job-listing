import { useState } from 'react'
import './App.css'
import JobCard from './components/JobCard'
import dataJSON from '../data.json'
import Filter from './components/Filter'

function App() {
  const [data, setDate] = useState(dataJSON)
  const [filterItems, setFilterItems] = useState([])

  function clearFilter() {
    setFilterItems([])
  }

  function clearFilterItem(item) {
    setFilterItems((prevItems) => {
      const newItems = []
      prevItems.map((filterItems) => {
        filterItems === item ? '' : newItems.push(filterItems)
      })
      return newItems
    })
  }

  function addToFilter(e) {
    const newItem = filterItems.some((item) => {
      return item === e.target.innerText
    })
    if (!newItem) {
      setFilterItems((prevFilterItems) => {
        return [...prevFilterItems, e.target.innerText]
      })
    }
  }

  const JobCardList = data.map((job) => {
    //If the filter Items is empty, return all the jobs
    if (filterItems.length === 0) {
      return (
        <JobCard
          key={job.id}
          company={job.company}
          contract={job.contract}
          featured={job.featured}
          languages={job.languages}
          level={job.level}
          location={job.location}
          logo={job.logo}
          new={job.new}
          position={job.position}
          postedAt={job.postedAt}
          role={job.role}
          tools={job.tools}
          addToFilter={addToFilter}
        />
      )
    } else {
      //Check all of the filter items if they matched a specific job or not and return true if the job matched all of the filter items or false if it didn't
      const criteria = filterItems.every((item) => {
        //Going through each job languages to check if one of them match the item from the filter items list and return true if on of them is true or false if none of them match
        const languages = job.languages.some((language) => {
          return language === item
        })
        //Going through each job tools to check if one of them match the item from the filter items list and return true if on of them is true or false if none of them match
        const tools = job.tools.some((tools) => {
          return tools === item
        })
        return item === job.role || item === job.level || languages || tools
      })

      //The criteria here is the job that match all of the filter items.
      if (criteria === true) {
        return (
          <JobCard
            key={job.id}
            company={job.company}
            contract={job.contract}
            featured={job.featured}
            languages={job.languages}
            level={job.level}
            location={job.location}
            logo={job.logo}
            new={job.new}
            position={job.position}
            postedAt={job.postedAt}
            role={job.role}
            tools={job.tools}
            addToFilter={addToFilter}
          />
        )
      }
    }
  })
  return (
    <div className='App'>
      <img
        className='bg-header show'
        src='./images/bg-header-mobile.svg'
        alt='Mobile Header'
      />
      <img
        className='bg-header hide'
        src='./images/bg-header-desktop.svg'
        alt='Desktop Header'
      />
      <div className='filter-wrapper'>
        <Filter
          filter={filterItems}
          clearFilter={clearFilter}
          clearFilterItem={clearFilterItem}
        />
      </div>
      {JobCardList}
    </div>
  )
}

export default App
