fetch("https://books-backend.p.goit.global/books/category-list",{method:"GET",headers:{accept:"application/json"}}).then((function(o){if(!o.ok)throw new Error(o.statusText);return o.json()})).then((function(o){console.log(o)})).catch((function(o){console.error("Error:",o)}));
//# sourceMappingURL=index.94a9a5ad.js.map
