export const crearTabla = (data) => {
    if (!Array.isArray(data)) return null;
  
    const tabla = document.createElement("tabla");
  
    tabla.appendChild(crearHeader(data[0]));
    tabla.appendChild(crearBody(data));
  
    return tabla;
  };
  
  const crearHeader = (element) => {
    const tHead = document.createElement("thead"),
      headRow = document.createElement("tr");
  
    for (const key in element) {
      if (key === "id") continue;
  
      const th = document.createElement("th");
      th.textContent = key;
      headRow.appendChild(th);
    }
  
    tHead.appendChild(headRow);
    return tHead;
  };
  
  const crearBody = (data) => {
      if (!Array.isArray(data)) return null;
    
      const tBody = document.createElement("tbody");
    
      data.forEach((element) => {
        const tr = document.createElement("tr");
        for (const key in element) {
            if(key === "id"){
                tr.setAttribute("data-id", element[key]);
            } else {
                const td = document.createElement("td");
                td.textContent = element[key];
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
      });
    
      return tBody;
    };