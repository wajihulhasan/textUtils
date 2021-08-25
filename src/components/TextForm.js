import React, {useState} from 'react'


export default function TextForm(props) {

    //convert the text in upperCase
    const upperCase=()=>{
        if(text.length!==0)
        {
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert('converted in upper case','success');
        }
        
    }
    //convert the text in lowerCase
    const lowerCase=()=>{
        if(text.length!==0)
        {
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert('converted in lower case','success');
        }
        
    }
    //remove extra spaces
    const removeExtraSpaces=()=>{
        if(text.length!==0)
        {
            setText(text.replace(/\s+/g,' ').trim());
            props.showAlert('extra spaces removed','success');
        }
    }
    //clear text function
    const clearText=()=>{
        if(text.length!==0)
        {
            setText("");
            props.showAlert('Text cleared','success');
        }
        
    }
    //action listner for textarea
    const changeText=(event)=>{
        setText(event.target.value);
    }

    //frequency of words
    const wordFrequency=()=>{
        const wordRepetation=[];
        let newText=text.toLowerCase();
        let arr=newText.split(' ');
        for(let i=0; i<arr.length;i++)
        {
            let x=false;
            for(let k=i-1;k>=0;k--)
            {
                if(arr[i]===arr[k])
                {
                    x=true;
                    break;
                }
            }
            if(x===false)
            {
                let count=1;

                for(let j=0;j<arr.length;j++)
                {
                    if(i===j)
                    continue;
                    if(arr[i]===arr[j])
                    {
                        count=count+1;
                    }

                }
                wordRepetation[i]=count;
            }
        }
        for(let i=0;i<arr.length;i++)
        {
            let x=false;
            for(let k=i-1;k>=0;k--)
            {
                if(i===k)
                    continue;
                
                if(arr[i]===arr[k])
                {
                    x=true;
                }

            }
            if(x===false)
                console.log(` ${arr[i]} ${wordRepetation[i]} times`)
        }
    }

    const [text , setText]=useState("");
    return (
        <>
        <div className="containver" style={{color:props.mode === 'dark'? 'white':'black'}}>
        <h1 >{props.textTitle}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'black'}} onChange={changeText} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>        
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={upperCase}>Convert Text in upperCase</button>
        <button type="button" className="btn btn-secondary mx-1 my-1" onClick={lowerCase}>Convert Text in lowerCase</button>     
        <button type="button" className="btn btn-info mx-1 my-1" onClick={wordFrequency}>Frequency of words</button> 
        <button type="button" className="btn btn-light mx-1 my-1" onClick={removeExtraSpaces}>clear extra spaces</button>
        <button type="button" className="btn btn-dark mx-1 my-1" onClick={clearText}>clear extra spaces</button>
        </div>
         <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'black'}}>
             <h1>Text Summary.</h1>
             <p>Word count is: {text.split(" ").filter((element)=>{return element.length!==0}).length}. Character Count is: {text.length}. Sentence Count: {text.split(".").length-1}</p>
             <h1>Preview</h1>
             <p>{text}</p>
             </div>   
        </>  
    )
}