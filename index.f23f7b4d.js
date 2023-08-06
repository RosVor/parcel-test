fetch("https://books-backend.p.goit.global/books/category-list",{method:"GET",headers:{accept:"application/json"}}).then((o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})).then((o=>{console.log(o)})).catch((o=>{console.error("Error:",o)}));
//# sourceMappingURL=index.f23f7b4d.js.map
