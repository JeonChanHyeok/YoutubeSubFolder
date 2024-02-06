// function handleMutations(mutationsList, observer) {
//     for (const mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             if (document.querySelectorAll('ytd-guide-section-renderer').length === 5) {
//                 const obj1 = document.querySelectorAll('ytd-guide-section-renderer')[0];
//                 const obj = document.querySelectorAll('ytd-guide-section-renderer')[1];
//                 if (obj) {
//                     obj.querySelector('#items')
//                     let par = obj.parentElement;
//                     par.removeChild(obj);
//                     observer.disconnect();
//                     par.prototype.configureRendererStamper = function (){
//                         return{
//                             "p": {
//                                 id: "tempee"
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
//
// const observer = new MutationObserver(handleMutations);
// observer.observe(document.body, {childList: true});
