// import pageSizer from './index';
// const pageSize = require('./index');

let maximName = document.getElementById('maximName');
let maximBody = document.getElementById('maximContent');
// let maximBodyStyle = getComputedStyle(document.getElementById('maximBody'));
let paulaName = document.getElementById('paulaName');
let paulaBody = document.getElementById('paulaContent')

// console.log(maximBodyStyle.height)
// console.log(maximBodyStyle.height.substr(0, maximBodyStyle.height.length - 2))
// console.log(maximBody.offsetHeight)

if (maximName && maximBody) {
    maximName.onclick = () => {
        // console.log('this')
        maximBody.classList.toggle('clicked');
        // pageSize.pageSizer()
    }
}

if (paulaName && paulaBody) {
    paulaName.onclick = () => {
        paulaBody.classList.toggle('clicked');
        // pageSize.pageSizer()
    }
}