import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [searchApiData, SetsearchApiData] = useState([])
  const [filtervalue, setFitterValue] = useState(' ')
  const useref = useRef()
  useEffect(() => {

    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => {

        setData(json);
        SetsearchApiData(json);
      })

    }
    fetchData();
    // useref.current.focus()
  }, [])

  const getValue = (e) => {
   
    if (e.target.value === '') {
      setData(searchApiData);
    } 
    else {
      const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
      if(filterResult.length>0){
      setData(filterResult);  
      }
      else{
         setData([])
      }   
    }
    setFitterValue(e.target.value);    
  }
  return (
    <>
      <input type="text" ref={useref} placeholder='Search for user' value={filtervalue} onInput={(e) => getValue(e)} />
      <table>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>city</th>
        </tr>
        {
          data.map((values) => {
            return (
              <>
                <tr>
                  <td>{values.name}</td>
                  <td>{values.username}</td>
                  <td>{values.email}</td>
                  <td>{values.address.city}</td>
                </tr>
              </>
            )
          })


        }
      </table>

    </>
  )
}

export default App
