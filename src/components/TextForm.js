import React, {useState} from 'react';



export function TextForm({headings, ID,dayLightColorSetting,showAlert}){


    const {darkStateModifier,darkModeState} =dayLightColorSetting;
    
    const [inputmyText, inputmyTextHandler ] = useState("")
    
    function HandleUpperClick(event){
        inputmyTextHandler(inputmyText.toUpperCase());
        showAlert("Text been converted to Uppercase!!", "success",2);
    }
    
    function HandlelowerClick(){
        inputmyTextHandler(inputmyText.toLowerCase());
        showAlert("Text been converted to Lowercase!!", "success",2);
    }

    function HandleOnChange(event){
        inputmyTextHandler(event.target.value);
    }

    function HandleSelectAll(event){
        const txtbox = document.getElementById(ID);
        txtbox.select();
        showAlert("All Text Selected!!!", "success",2);
    }

    function HandleBlankSpace(event){
        const removeBlankSpace = inputmyText.replace(/\n\s*\n+/g, '\n');
        inputmyTextHandler(removeBlankSpace);

    }

    function totalWords(){
        let splitted_array = inputmyText.split(' ');
        let  totalWords =0;
        for( let i=0;i<splitted_array.length;i++){
            if(splitted_array[i]!=''){
                totalWords=totalWords +1;
            }
        }
        return totalWords;
    } 

    // style={(darkModeState)?darkStyles.AboutUs.body:whiteStyles}

    return(
        <div className={`container-fluid Textform-${darkModeState}-container`}>
            <div className="mb-3 mx-5">


                {/* constainer for heading and select all functionality */}
                <div className="row justify-content-between" >
                    <div className="col-4 align-self-center">
                        <label htmlFor={ID} className="form-label font-size-xl">{headings}</label>
                    </div>

                    {/* col-md-2 offset-md-7 pb-3 */}
                    <div className="col-4 row justify-content-start">
                        <div className="col-sm-4 align-self-center pb-3">
                            <button className="btn btn-danger  pt-1 opacity-75" onClick={HandleSelectAll}>Select All</button>
                        </div>

                        <div className='col-sm-6 align-self-center pb-3'>
                            <button className="btn btn-danger  opacity-75 pt-1" onClick={HandleBlankSpace} >Remove Blank Space</button>
                        </div>
                    </div>
                </div>

            {/* textbox and buttons */}
            <textarea value={inputmyText} onChange={HandleOnChange} className={`form-control Textform-${darkModeState}-textbox input-textbox`} id={ID} rows="10" ></textarea>

            <button className="btn btn-primary mt-3" onClick={HandleUpperClick}>CONVERT UPPERCASE</button>
            <button className="btn btn-primary mx-2 mt-3" onClick={HandlelowerClick}>CONVERT LOWERCASE</button>
            </div>

            {/* text summary , word count , preview  section */}
            <div className="container mx-4 my-4">
                <h4>Text Summary</h4>
                <h6 className='mx-3'>Words: {totalWords()}</h6>
                <h6 className='mx-3'>Estimated Read Time: {inputmyText.split(" ").length/200} Mins </h6>
                <h4 className='mt-5 '>Preview:</h4>
                <p className='mx-2 word-break inputText' >{inputmyText}</p>
            </div>
            

        </div> 
    )
}





