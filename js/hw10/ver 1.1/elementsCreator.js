function createElement (appendBody,tagName,cssName,innerText,type,value,placeHolder) {
    let tagElement = document.createElement(tagName);
    (cssName !== undefined) ? tagElement.classList.add(cssName) : false;
    (innerText !== undefined) ? tagElement.innerText = innerText : false;
    (type !== undefined) ? tagElement.type = type : false;
    (value !== undefined) ? tagElement.value = value : false;
    (placeHolder !== undefined) ? tagElement.placeholder = placeHolder : false;
    appendBody ? document.body.appendChild(tagElement) : false;
    return tagElement
}
function iterKey (obj,divFather) {
    for (const [keyName,valueName] of Object.entries(obj)) {
        let divForNameValue = createElement(false,`div`,`key`)
        let divForNameKey = createElement(false,`div`,`key-name`,keyName)
        let divForValueKey = createElement(false,`div`,`key-value`,valueName)
        if (typeof valueName === `object`) {
            let divFather2 = createElement(false,`div`,`key-father`)
            let titleForDivFather2 = createElement(false,`div`,'title-group',keyName)
            divFather2.appendChild(titleForDivFather2)
            divFather.appendChild(divFather2)
            iterKey(valueName,divFather2)
        } else {
            divForNameValue.append(divForNameKey,divForValueKey)
            divFather.appendChild(divForNameValue)
        }
    }
}