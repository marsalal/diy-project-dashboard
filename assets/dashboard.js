const esc=value=>String(value).replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
const projectById=(data,id)=>data.projects.find(project=>project.id===id);

function showPanel(panelId){
  document.querySelectorAll(".panel").forEach(panel=>{const active=panel.id===panelId;panel.classList.toggle("active",active);panel.hidden=!active});
  document.querySelectorAll(".nav-item").forEach(item=>{const active=item.dataset.panel===panelId;item.classList.toggle("active",active);if(active)item.setAttribute("aria-current","page");else item.removeAttribute("aria-current")});
  history.replaceState(null,"",`#${panelId}`);
  document.querySelector(".main").scrollIntoView({block:"start"});
}

document.querySelectorAll(".nav-item").forEach(item=>item.addEventListener("click",()=>showPanel(item.dataset.panel)));
document.querySelector(".brand").addEventListener("click",event=>{event.preventDefault();showPanel("overview")});

function projectStage(project){return project.progress<=20?"planned":"progress"}

function renderFlowCard(project){
  return `<article class="flow-card"><h3>${esc(project.name)}</h3><p>${esc(project.nextTasks[0])}</p><div class="mini-bar" aria-label="${project.progress}% complete"><i style="width:${project.progress}%"></i></div><div class="flow-meta"><span><i class="priority-dot"></i>Priority ${project.priority.rank}</span><span>${project.progress}%</span></div></article>`;
}

function renderLane(title,items){
  const content=items.length?items.map(item=>item.completedAt?`<article class="flow-card"><h3>${esc(item.name)}</h3><p>${esc(item.summary)}</p><div class="flow-meta"><span>Completed</span><span>${esc(item.completedAt)}</span></div></article>`:renderFlowCard(item)).join(""):'<p class="empty">Nothing here yet.</p>';
  return `<div class="lane"><div class="lane-head"><span>${esc(title)}</span><span>${items.length}</span></div>${content}</div>`;
}

function renderProject(project){
  const tasks=project.nextTasks.map(task=>`<li>${esc(task)}</li>`).join("");
  const materials=project.materials.map(material=>`<tr><td>${esc(material.item)}</td><td>${esc(material.quantity)}</td><td>${esc(material.note)}</td></tr>`).join("");
  const costReferences=project.costReferences?.length?`<h3>Recorded costs & price references</h3><p class="cost-summary"><strong>Documented total:</strong> ${esc(project.recordedCost)}</p><div class="table-wrap"><table class="materials-table"><thead><tr><th>Date</th><th>Item</th><th>Quantity</th><th>Amount</th><th>Reference note</th></tr></thead><tbody>${project.costReferences.map(reference=>`<tr><td>${esc(reference.date)}</td><td>${esc(reference.item)}</td><td>${esc(reference.quantity)}</td><td>${esc(reference.amount)}</td><td>${esc(reference.note)}</td></tr>`).join("")}</tbody></table></div>`:"";
  const tools=project.tools.map(tool=>`<span class="chip">${esc(tool)}</span>`).join("");
  const sources=project.sources.length?`<div class="sources"><h3>Sources</h3>${project.sources.map(source=>`<a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a>`).join("")}</div>`:"";
  return `<details class="project"><summary><div class="summary-row"><div><span class="status">Priority ${project.priority.rank} · ${esc(project.status)}</span><h2>${esc(project.name)}</h2><small>Open materials, tools, costs, assumptions, and next steps</small></div><span class="percentage">${project.progress}%</span></div><div class="project-progress" aria-label="${project.progress}% complete"><i style="width:${project.progress}%"></i></div></summary><div class="project-detail"><div class="detail-grid"><section class="detail-block"><h3>Next steps</h3><ul>${tasks}</ul></section><section class="detail-block"><h3>Plan snapshot</h3><div class="metrics"><div class="metric"><span>Labor</span><b>${esc(project.labor)}</b></div><div class="metric"><span>Remaining cost</span><b>${esc(project.cost)}</b></div><div class="metric"><span>ROI</span><b>${esc(project.priority.roi)}</b></div><div class="metric"><span>Complexity</span><b>${esc(project.priority.complexity)}</b></div></div></section></div><p class="assumption"><strong>Planning assumption:</strong> ${esc(project.assumption)}</p><h3>Quantified materials</h3><div class="table-wrap"><table class="materials-table"><thead><tr><th>Material</th><th>Quantity</th><th>Planning note</th></tr></thead><tbody>${materials}</tbody></table></div>${costReferences}<h3>Tools & equipment</h3><div class="chips">${tools}</div>${sources}</div></details>`;
}

function renderMaterialRows(projects){
  return projects.flatMap(project=>project.materials.map(material=>`<tr><td>${esc(material.item)}</td><td>${esc(material.quantity)}</td><td>${esc(project.name)}</td><td>${esc(material.note)}</td></tr>`)).join("");
}

async function loadDashboard(){
  try{
    const response=await fetch("data/projects.json",{cache:"no-store"});
    if(!response.ok)throw new Error("Project data request failed");
    const data=await response.json();
    const ranked=[...data.projects].sort((a,b)=>a.priority.rank-b.priority.rank);
    const current=projectById(data,data.currentProjectId);
    const planned=ranked.filter(project=>projectStage(project)==="planned");
    const inProgress=ranked.filter(project=>projectStage(project)==="progress");
    const materialsTotal=ranked.reduce((total,project)=>total+project.materials.length,0);
    document.querySelector("#updated").textContent=`Updated ${data.updatedAt} · Costa Rica · ${data.currency}`;
    document.querySelector("#active-count").textContent=`${ranked.length} active projects`;
    document.querySelector("#projects-count").textContent=`${ranked.length} active`;
    document.querySelector("#materials-count").textContent=`${materialsTotal} items`;
    document.querySelector("#history-count").textContent=`${data.completed.length} completed`;
    document.querySelector("#focus").innerHTML=`<div><p class="eyebrow">This week’s focus</p><h2>${esc(current.name)}</h2><p>${esc(current.nextTasks[0])}</p><div class="focus-meta"><span>${esc(current.cost)}</span><span>${esc(current.labor)}</span><span>Priority ${current.priority.score}/100</span></div></div><div class="ring" style="--progress:${current.progress}" aria-label="${current.progress}% complete"><span>${current.progress}%</span></div>`;
    document.querySelector("#project-flow").innerHTML=renderLane("Planned",planned)+renderLane("In progress",inProgress)+renderLane("Completed",data.completed);
    document.querySelector("#project-list").innerHTML=ranked.map(renderProject).join("");
    document.querySelector("#materials-list").innerHTML=renderMaterialRows(ranked);
    document.querySelector("#history-list").innerHTML=data.completed.length?data.completed.map(item=>`<article class="history-card"><span class="history-check" aria-hidden="true">✓</span><div><h2>${esc(item.name)}</h2><p>${esc(item.summary)}</p></div><time datetime="${esc(item.completedAt)}">${esc(item.completedAt)}</time></article>`).join(""):'<p class="empty">No completed projects recorded yet.</p>';
    const initial=location.hash.slice(1);if(["overview","projects","materials","history"].includes(initial))showPanel(initial);
  }catch(error){document.querySelector("#load-error").hidden=false;}
}

loadDashboard();
