(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{26:function(e,a,t){e.exports=t(78)},33:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),s=(t(33),t(2)),o=t(4),i=t.n(o),m=(t(51),t(52),t(73),t(25)),d=function(e){var a=e.char;console.log(a);var t,r,l=Object(n.useState)(!1),o=Object(s.a)(l,2),d=o[0],u=o[1],p=Object(n.useState)("undefined"),b=Object(s.a)(p,2),f=b[0],g=b[1];return t=a.episode,i.a.get.apply(i.a,Object(m.a)(t)).then((function(e){console.log(e.data.name),g(e.data.name)})),console.log(f),c.a.createElement("div",{className:"flippable-card ".concat(d?"flip":""),onClick:function(){return u((function(e){return!e}))}},c.a.createElement("div",{className:"card mb-2 p-0 char-card d-flex flex-column justify-content-center front"},"Dead"===(r=a.status)?c.a.createElement("div",{className:"position-absolute badge bg-danger"},r):"Alive"===r?c.a.createElement("div",{className:"position-absolute badge bg-success"},r):c.a.createElement("div",{className:"position-absolute badge bg-secondary"},r),c.a.createElement("img",{className:"card-img-top img",src:a.image,alt:a.name}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title fs-5 fw-bold mb-4"},a.name),c.a.createElement("div",{className:"card-text"},c.a.createElement("p",{className:"fs-6 fw-normal"},"Last Location"),c.a.createElement("p",{className:"fs-5"},a.origin.name)))),c.a.createElement("div",{className:"card mb-2 char-card p-1 d-flex flex-column justify-content-center back"},c.a.createElement("div",{className:"card-body p-2"},c.a.createElement("h5",{className:"card-title fs-5 fw-bold mb-4"},a.name),c.a.createElement("div",{className:"card-text"},c.a.createElement("p",{className:"fs-5 fw-normal mb-1"},"Species:"),c.a.createElement("p",{className:"fs-6 fw-light"},a.species),c.a.createElement("p",{className:"fs-5 fw-normal mb-1"},"Gender:"),c.a.createElement("p",{className:"fs-6 fw-light"},a.gender),c.a.createElement("p",{className:"fs-5 fw-normal mb-1"},"First Appearance:"),c.a.createElement("p",{className:"fs-6 fw-light"},f),c.a.createElement("p",{className:"fs-5 fw-normal mb-1"},"Origin:"),c.a.createElement("p",{className:"fs-6 fw-light"},a.origin.name),c.a.createElement("p",{className:"fs-5 fw-normal mb-1"},"Current location:"),c.a.createElement("p",{className:"fs-6 fw-light"},a.origin.name)))))},u=(t(74),function(e){var a,t=e.results;return a=t?t.map((function(e){return c.a.createElement("div",{key:e.id,className:"col-md-4"},c.a.createElement(d,{char:e}))})):c.a.createElement("p",null,"No results to display"),c.a.createElement("div",{className:"col-lg-9 col-12"},c.a.createElement("div",{className:"row gy-3"},a))}),p=t(24),b=t.n(p),f=function(e){var a=e.pageNumber,t=e.info,r=e.updatePageNumber,l=Object(n.useState)(window.innerWidth),o=Object(s.a)(l,2),i=o[0],m=o[1],d=function(){m(window.innerWidth)};Object(n.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("style",{jsx:!0},"\n                    a {\n                        color: white; text-decoration: none;\n                    }\n\n                    @media (max-width: 768px) {\n                        .pagination {font-size: 12px}\n\n                        .next,\n                        .prev {display: none}\n                    }\n\n                    @media (max-width: 768px) {\n                        .pagination {font-size: 14px}\n                    }\n                "),c.a.createElement(b.a,{className:"pagination justify-content-center my-4 gap-4",nextLabel:"Next",previousLabel:"Prev",previousClassName:"btn btn-primary fs-5 prev",nextClassName:"btn btn-primary fs-5 next",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",forcePage:1===a?0:a-1,marginPagesDisplayed:i<576?1:2,pageRangeDisplayed:i<576?1:2,pageCount:null===t||void 0===t?void 0:t.pages,onPageChange:function(e){r(e.selected+1)}}))},g=function(e){var a=e.input,t=e.task,n=e.updatePageNumber,r=e.index,l=e.name;return c.a.createElement(c.a.Fragment,null,c.a.createElement("style",{jsx:!0},'\n                    .x:checked + label {\n                    background-color: #0b5ed7;\n                    color: white }\n                    input[type="radio"] { display: none; }\n                '),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input x",type:"radio",name:l,id:"".concat(l,"-").concat(r)}),c.a.createElement("label",{onClick:function(e){t(a),n(1)},className:"btn btn-outline-primary",for:"".concat(l,"-").concat(r)}," ",a," ")))},N=function(e){var a=e.updateGender,t=e.updatePageNumber;return c.a.createElement("div",{className:"accordion-item"},c.a.createElement("h2",{className:"accordion-header",id:"headingThree"},c.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Gender ")),c.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},c.a.createElement("div",{className:"accordion-body d-flex flex-wrap gap-3"},["female","male","genderless","unknown"].map((function(e,n){return c.a.createElement(g,{name:"gender",index:n,key:n,updatePageNumber:t,task:a,input:e})})))))},E=function(e){var a=e.updateSpecies,t=e.updatePageNumber;return c.a.createElement("div",{className:"accordion-item "},c.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},c.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," Species ")),c.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},c.a.createElement("div",{className:"accordion-body d-flex flex-wrap gap-3"},["Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","Planet"].map((function(e,n){return c.a.createElement(g,{name:"species",index:n,key:n,updatePageNumber:t,task:a,input:e})})))))},h=function(e){var a=e.updateStatus,t=e.updatePageNumber;return c.a.createElement("div",{className:"accordion-item"},c.a.createElement("h2",{className:"accordion-header",id:"headingOne"},c.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Status ")),c.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},c.a.createElement("div",{className:"accordion-body d-flex flex-wrap gap-3"},["Alive","Dead","Unknown"].map((function(e,n){return c.a.createElement(g,{key:n,index:n,name:"status",task:a,updatePageNumber:t,input:e})})))))},v=(t(75),function(e){e.pageNumber;var a=e.updatePageNumber,t=e.updateStatus,n=e.updateGender,r=e.updateSpecies;return c.a.createElement("div",{className:"col-lg-3 col-12 mb-5"},c.a.createElement("div",{className:"text-center fw-bold fs-4 mb-2"},"Filters"),c.a.createElement("div",{style:{cursor:"pointer",color:"var(--white)"},onClick:function(){t(""),n(""),r(""),a(1),window.location.reload(!1)},className:"text-decoration-underline text-center mb-3"}," Clear Filters "),c.a.createElement("div",{className:"accordion",id:"accordionExample"},c.a.createElement(h,{updatePageNumber:a,updateStatus:t}),c.a.createElement(E,{updatePageNumber:a,updateSpecies:r}),c.a.createElement(N,{updatePageNumber:a,updateGender:n})))}),x=(t(76),function(e){var a=e.setSearch,t=e.updatePageNumber,r=Object(n.useRef)();return c.a.createElement("form",{className:"search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5"},c.a.createElement("input",{placeholder:"Search for characters",className:"input",type:"text",ref:r}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),t(1),a(r.current.value)},className:"btn btn-primary fs-5"},"Search"))});function w(){var e=Object(n.useState)(1),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),m=o[0],d=o[1],p=Object(n.useState)(""),b=Object(s.a)(p,2),g=b[0],N=b[1],E=Object(n.useState)(""),h=Object(s.a)(E,2),w=h[0],y=h[1],j=Object(n.useState)(""),O=Object(s.a)(j,2),k=O[0],S=O[1],P=Object(n.useState)([]),C=Object(s.a)(P,2),T=C[0],A=C[1],L="https://rickandmortyapi.com/api/character/?page=".concat(t,"&name=").concat(m,"&status=").concat(g,"&gender=").concat(w,"&species=").concat(k),D=T.info,G=T.results;return Object(n.useEffect)((function(){i.a.get(L).then((function(e){A(e.data)}))}),[L]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"text-center mb-3 header-text p-3 fs-3"},c.a.createElement("span",{className:"brand fs-1"},"Rick And Morty")," Character Cards"),c.a.createElement(x,{setSearch:d,updatePageNumber:r}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(v,{pageNumber:t,status:g,updateStatus:N,updateGender:y,updateSpecies:S,updatePageNumber:r}),c.a.createElement(u,{results:G})),c.a.createElement(f,{info:D,pageNumber:t,updatePageNumber:r})))}l.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.29c37903.chunk.js.map