import React from 'react'
import Component from 'react'
import axios from "axios"
import "./index.css"
class Products extends React.Component
{

 state={sum:0,arr:[],searchVal:'primes',len:0}

   componentDidMount()
   {
    this.getCompany()
   }
  
   getCompany=async()=>
   {
    const {searchVal}=this.state
    const url=`http://20.244.56.144/numbers/${searchVal}`
    const bearerToken="wwrrwhfsnrenernnene,sns,"
    const method={
        method:"GET",
        mode:"no-cors" 
    }
    const res=await fetch(url);
    const d=await res.json();
    const numbers=d.numbers
    let sum=0;
     this.setState((prev)=>({arr:numbers}))
    numbers.map((each)=>{
        sum+=each
    })
  
    this.setState({sum:sum,len:numbers.length})
   }

 onSelectChange=(e)=>
 {
   console.log(e.target.name)
   this.setState({searchVal:e.target.value},this.getCompany)
 }

    render()
    {
        const {arr,sum,searchVal,len}=this.state
       
        return(
            <div className='bg-con'>
                <select className='option' onChange={this.onSelectChange}>
                    <option value="primes">Prime</option>
                    <option value="rand">Random</option>
                    <option value="even">Even</option>
                    <option value="fibo">Fibonacci</option>
                </select>
               <h1 className='head'>{searchVal.toUpperCase()}</h1>
               <div className='Con numbers'>
               {arr.map((each)=>
               {
                 return(
                    <h1>{`${each} |`}</h1>
                 )
               })}
               </div>
               <h1 className='sum'>SUM : {sum}</h1>
               <h1 className='avg'>AVG : {sum/len}</h1>
            </div>
        )
    }
}
export default Products

