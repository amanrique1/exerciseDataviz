const canvas = d3.select("#canvas");

const data = [
    { name: "Juan", age: 3 },
    { name: "Orlando", age: 39 },
    { name: "María", age: 7 },
    { name: "Sandra", age: 35 },
    { name: "Fernanda", age: 16 },
    { name: "Maribel", age: 45 },
    { name: "Sofía", age: 6 }
];

//RETO 1
/**
const table = canvas.append("table");
const thead = table.append("thead").append("tr");
const tbody = table.append("tbody");

thead.append("th").text("Name");
thead.append("th").text("Age");

data.forEach(d => {
    const tr = tbody.append("tr");
    tr.append("td").text(d.name);
    tr.append("td").text(d.age);
});
 */
//FIN RETO 1


/**
 * Ejemplo 2
 const ul = canvas.append("ul");

const li = ul.selectAll("li").data(data);

li.enter()
    .append("li")
    .text(d => d.name);
 */


 //RETO 2
/*
const svg = canvas.append("svg");
const fig = svg.selectAll("rect").data(data);

svg.attr("width", 100);
svg.attr("heigth", 100);

let iter = 0;

fig.enter()
    .append("rect")
    .attr("x",(d,i)=> 10+i*25)
    .attr("y",d=> 100- d.age )
    .attr("width", 20)
    .attr("height", d => 100 * d.age / 100
    )
    .style("fill", "steelblue");
    */

//FIN RETO 2

//RETO 3   
/*
let draw=(data2,numMayor)=>{
    const width = 700;
    const height = 500;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;
    
    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);
    
    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    
    const y = d3.scaleLinear()
        .domain([0, numMayor])
        .range([iheight, 0]);
    
    const x = d3.scaleBand()
        .domain(data2.map(d => d.name))
        .range([0, iwidth])
        .padding(0.1);
    
    const bars = g.selectAll("rect").data(data2);
    
    bars.enter().append("rect")
        .attr("class", "bar")
        .style("fill", "steelblue")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => iheight - y(d.value))
        .attr("width", x.bandwidth())
    
    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);
    
    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));
    }
   d3.json("https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json").then(data => {
    draw(data,973306);
});
*/
//FIN RETO 3

//RETO 4

let draw=(data2,numMayorX,numMayorY,numMayorZ)=>{
    const width = 700;
    const height = 500;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;
    
    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);
    
    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    
    const y = d3.scaleLinear()
        .domain([0, numMayorY])
        .range([iheight, 0]);
    
    const x = d3.scaleBand()
        .domain([0, numMayorX])
        .range([0, iwidth]);
    
    const circles = g.selectAll("circle").data(data2);
    
    circles.enter().append("circle")
        .attr("r", d => d.purchasingpower/numMayorZ)
        .style("fill", "steelblue")
        .attr("cx", d => x(d.purchasingpower))
        .attr("cy", d => y(d.lifeexpectancy))
        
    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);
    
    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));
    }
   d3.json("https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json").then(data => {
    draw(data,81.2,34435.37,204341763);
});

//FIN RETO 4