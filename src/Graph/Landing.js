import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

/* Component */
export default function MyD3Component(props) {
  /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
  const d3Container = useRef(null);

  /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
  useEffect(
    () => {
      if (props.propsMatrix && d3Container.current) {
        const svg = d3.select(d3Container.current);

        // Bind D3 data
        const update = svg.append("g").selectAll("text").data(props.data);

        // Enter new D3 elements
        update
          .enter()
          .append("text")
          .attr("x", (d, i) => i * 25)
          .attr("y", 40)
          .style("font-size", 24)
          .text((d) => d);

        // Update existing D3 elements
        update.attr("x", (d, i) => i * 40).text((d: number) => d);

        // Remove old D3 elements
        update.exit().remove();
      }
    },

    /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
    [props.data, d3Container.current]
  );

  return (
    <svg className="d3-component" width={400} height={200} ref={d3Container} />
  );
}

let d3Tree = {};
d3Tree.create = function (el, props, state) {
  let svg = d3
    .select(el)
    .append("svg")
    .attr("width", props.width)
    .attr("height", props.height);

  this.width = props.width;
  this.height = props.height;

  this.update(el, state);
};

d3Tree.update = function (el, state) {
  this._drawTree(el, state.data);
};

d3Tree._drawTree = function (el, data) {
  let tree = d3.layout.tree().size([500, 250]);
  let svg = d3.select(el).select("svg");
  let nodes = tree.nodes(data);
  let g = svg.selectAll("g.node");
  let node = g.data(nodes);
  node
    .enter()
    .append("svg:g")
    .attr("class", "node")
    .attr("transform", (d) => {
      return `translate(${d.x},${d.y + 10})`;
    })
    .append("svg:circle")
    .attr("r", 6);

  node.transition().attr("transform", (d) => `translate(${d.x},${d.y})`);

  node.exit().remove();

  let p = svg.selectAll("path.link");
  let link = p.data(tree.links(nodes));
  link
    .enter()
    .insert("svg:path", "g")
    .attr("class", "link")
    .attr(
      "d",
      d3.svg.diagonal().projection(function (d) {
        return [d.x, d.y];
      })
    );

  link.transition().attr(
    "d",
    d3.svg.diagonal().projection(function (d) {
      return [d.x, d.y];
    })
  );

  link.exit().remove();
};

class TreeChart extends React.Component {
  componentDidMount() {
    var el = ReactDOM.findDOMNode(this);
    d3Tree.create(
      el,
      {
        width: "100%",
        height: "300px",
      },
      this.getChartState()
    );
  }

  componentDidUpdate() {
    var el = ReactDOM.findDOMNode(this);
    d3Tree.update(el, this.getChartState());
  }

  getChartState() {
    return {
      data: this.props.data,
    };
  }

  render() {
    return <div className="TreeChart"></div>;
  }
}
