import React,{useState} from 'react'

function Forms() {
    const [firstName,setFirstName]=useState("");
    const [people,setPeople]=useState([]);



    const handleSubmit=(e)=>{
        e.preventDefault();//this is uded to prevent deafult behaviour of browser
        console.log("hello world");
        if(firstName)
        {
            console.log("submit the value");
            const people={id:new Date().getTime().toString(),firstName};
            console.log(people);
            const person={firstName}
            setPeople((people)=>{
                return [...people,person];
            });
            setFirstName('');
        }
        else
        {
            console.log("empty value");
        }
    }
    return (
      <>
      <article>
          <form className='form' onSubmit={handleSubmit}>
              <div className='form-control'>
                  <label htmlFor='firstName'>Name</label>
                  <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
              </div>
              <button type="submit">Add</button>
          </form>
          
          {
              people.map((person,index)=>{
                  const {id,firstName}=person;
                  return(
                      <div className='item' key={'id'}>
                          <h4>{firstName}</h4>
                      </div>
                  )
              })
          }
      </article>
      </>
    )
}

export default Forms
