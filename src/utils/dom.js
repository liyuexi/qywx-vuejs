export function getId(selector) {
    return document.getElementById(selector)
}

export function getTag(tagName) {
    // 其他的工具类
    return document.getElementsByTagName(tagName)
}

export function getClass(className) {
    // 其他的工具类
    return document.getElementsByClassName(className)
}

export function removeClass(className) {
    // 其他的工具类
     let selectClass= document.getElementsByClassName(className)
     if(selectClass){
     	 document.body.removeChild(selectClass[0])
     }

}


