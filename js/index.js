let wrapper = document.getElementById('wrapper');
let contentHeight = wrapper.scrollHeight ;
let newWrapperHeight = 'height: ' + contentHeight.toString() + 'px;';

console.log('hello!')
console.log('content height ' + contentHeight);

console.log('window height ' + window.innerHeight);


const pageSizer = () => {
    if (wrapper) {
        console.log('ok')
        if (contentHeight > window.innerHeight) {
            wrapper.setAttribute('style', newWrapperHeight);
            console.log('this')
            console.log(newWrapperHeight)
        } else {
            wrapper.setAttribute('style', 'height: ' + window.innerHeight + 'px;');
            console.log(`that`)
        }
    }
}

pageSizer;
