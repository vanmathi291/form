form=document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    parent=document.querySelector('.user-data')

    container=document.createElement('div')

    fN=document.createElement('p')
    fN_data=document.querySelector('[placeholder*="First"]')
    fN.innerText=fN_data.value
    container.append(fN)

    lN=document.createElement('p')
    lN_data=document.querySelector('[placeholder*="Last"]')
    lN.innerText=lN_data.value
    container.append(lN)

    if(fN_data.value != '' && lN_data.value != ''){
        parent.append(container)
    }

    fN_data.value=''
    lN_data.value=''
    console.log('form submitted');


})
