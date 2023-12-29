import "./style.css";

function div(content: string) {
  const d = document.createElement("div");
  d.innerText = content;
  return d;
}

document.querySelector<HTMLDivElement>("#app")!.appendChild(div(":-)"));
