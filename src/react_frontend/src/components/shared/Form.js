import React from 'react';

function Form({legend, method, action, callback, children}){
    return(
            <form method={method} action={action}>
                <fieldset>
                    <legend>{legend}</legend>
                    {children}
                    <input type="submit" onClick={callback}></input>
                </fieldset>
            </form>
    )
}

export default Form;