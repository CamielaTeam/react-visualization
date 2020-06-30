import * as d3 from "d3";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./forceGraph.module.css";

export function runForceGraph(
  links,
  nodes,
  nodeHoverTooltip,
  linkHoverTooltip
) {
  const colors = d3.scaleOrdinal(d3.schemeCategory10).domain(["foo", "baz"]);

  // Add the tooltip element to the graph
  const tooltip = document.querySelector("#graph-tooltip");
  if (!tooltip) {
    const tooltipDiv = document.createElement("div");
    tooltipDiv.classList.add(styles.tooltip);
    tooltipDiv.style.opacity = "0";
    tooltipDiv.id = "graph-tooltip";
    document.body.appendChild(tooltipDiv);
  }

  const drag = (simulation) => {
    const dragstarted = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = (d) => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    };

    const dragended = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    };

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  };
  const div = d3.select("#graph-tooltip");

  const addTooltip = (hoverTooltip, d, x, y, type) => {
    div.transition().duration(200).style("opacity", 1);
    div
      .html(hoverTooltip(d))
      .style("left", `${x}px`)
      .style("top", `${y - 28}px`)
      .style("background-color", "#202020")
      .style("border", "2px solid darkturquoise")
      .style("width", "auto");
  };

  const removeTooltip = () => {
    div.transition().duration(200).style("opacity", 0);
  };

  var svg = d3.select("svg");
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.name)
        .distance(200)
        .strength(1)
    )

    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));
  const link = svg
    .selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("marker-end", "url(#arrowhead)")
    .style("stroke", "darkturquoise")
    .style("stroke-opacity", 1)
    .style("stroke-width", 2);

  link
    .append("title")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .text((d) => {
      return "text";
    });

  const edgepaths = svg
    .selectAll(".edgepath")
    .data(links)
    .enter()
    .append("path")
    .attr("class", "edgepath")
    .attr("fill-opacity", 0)
    .attr("stroke-opacity", 0)
    .attr("id", function (d, i) {
      return "edgepath" + i;
    })
    .style("pointer-events", "none");

  const edgelabels = svg
    .selectAll(".edgelabel")
    .data(links)
    .enter()
    .append("text")
    .style("pointer-events", "none")
    .attr("class", "edgelabel")
    .attr("id", function (d, i) {
      return "edgelabel" + i;
    })
    .attr("font-size", 10)
    .attr("fill", "#aaa");

  edgelabels
    .append("textPath")
    .attr("xlink:href", function (d, i) {
      return "#edgepath" + i;
    })
    .style("text-anchor", "middle")
    .style("pointer-events", "none")
    .attr("startOffset", "50%")
    .text(function (d) {
      return d.type;
    });

  const node = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("stroke", "url(#svgGradient)")
    .attr("stroke-width", 4)
    .attr("class", "node")
    .call(drag(simulation));

  node
    .append("circle")
    .attr("class", "shadow")
    .attr("r", 20)
    .style("fill", "darkturquoise")
    .style("filter", "url(#shadow)");
  // .style("fill", function (d, i) {
  //   return colors(i);
  // });

  node
    .append("text")
    .attr("dy", -20)
    .attr("dx", 20)
    .text(function (d) {
      return d.name;
    })

    .attr("fill", "snow")
    .attr("stroke-width", 1)
    .attr("stroke", "snow");

  node
    .on("mouseover", (d) => {
      addTooltip(nodeHoverTooltip, d, d3.event.pageX, d3.event.pageY, "node");
    })
    .on("mouseout", () => {
      removeTooltip();
    });

  link
    .on("mouseover", (d) => {
      console.log("link d", d);
      addTooltip(linkHoverTooltip, d, d3.event.pageX, d3.event.pageY, "link");
    })
    .on("mouseout", () => {
      removeTooltip();
    });
  simulation.nodes(nodes).on("tick", ticked);
  simulation.force("link").links(links);

  function ticked() {
    //update link positions
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    // update node positions
    node.attr("transform", function (d) {
      return "translate(" + d.x + ", " + d.y + ")";
    });

    edgepaths.attr("d", function (d) {
      return (
        "M " +
        d.source.x +
        " " +
        d.source.y +
        " L " +
        d.target.x +
        " " +
        d.target.y
      );
    });

    edgelabels.attr("transform", function (d) {
      if (d.target.x < d.source.x) {
        var bbox = this.getBBox();

        const rx = bbox.x + bbox.width / 2;
        const ry = bbox.y + bbox.height / 2;
        return "rotate(180 " + rx + " " + ry + ")";
      } else {
        return "rotate(0)";
      }
    });
  }
  return {};
}
