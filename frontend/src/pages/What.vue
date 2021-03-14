<template>
  <div :style="{ height: '100vh' }">
    <svg width="500" height="500"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import data from "~/assets/data.json";
export default {
  name: "App",
  data() {
    return {
      simulation: null,
    };
  },
  methods: {
    async generateNetwork(graph) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const svg = d3.select("svg").attr("width", width).attr("height", height);

      this.simulation = d3
        .forceSimulation()
        .force(
          "link",
          d3.forceLink().id(function (d) {
            return d.id;
          })
        )
        .force("charge", d3.forceManyBody().strength(-100).theta(0.8))
        .force(
          "collide",
          d3
            .forceCollide()
            .radius((d) => 40)
            .iterations(2)
        )
        .force("center", d3.forceCenter(width / 2, height / 2));

      // graph.links.forEach(function (d) {
      //   //     d.source = d.source_id;
      //   //     d.target = d.target_id;
      // });

      var link = svg
        .append("g")
        .attr("class", "link")
        .style("stroke", "#aaa")
        .selectAll("line")
        .data(graph.links)
        .enter()
        .append("line");

      var node = svg
        .append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter()
        .append("circle")
        .attr("r", 5)
        .call(
          d3
            .drag()
            .on("start", this.dragstarted)
            .on("drag", this.dragged)
            .on("end", this.draggended)
        );

      var label = svg
        .append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graph.nodes)
        .enter()
        .append("text")
        .attr("class", "label")
        .text(function (d) {
          return d.id;
        });

      this.simulation.nodes(graph.nodes).on("tick", ticked);

      this.simulation.force("link").links(graph.links);

      function ticked() {
        link
          .attr("x1", function (d) {
            return d.source.x;
          })
          .attr("y1", function (d) {
            return d.source.y;
          })
          .attr("x2", function (d) {
            return d.target.x;
          })
          .attr("y2", function (d) {
            return d.target.y;
          });

        node
          .attr("r", 5)
          .style("fill", "#555")
          .style("stroke", "#fff")
          .style("stroke-width", "3px")
          .attr("cx", function (d) {
            return d.x;
          })
          .attr("cy", function (d) {
            return d.y;
          });

        label
          .attr("x", function (d) {
            return d.x;
          })
          .attr("y", function (d) {
            return d.y;
          })
          .attr("dx", 12)
          .attr("dy", ".35em");
      }
    },
    dragged(event, d) {
      // console.log("dragged", event, d);
      d.fx = event.x;
      d.fy = event.y;
    },
    dragstarted(event, d) {
      // console.log("dragstarted", event, d);
      if (!event.active) this.simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    },
    draggended(event, d) {
      // console.log("draggended", event, d);
      if (!event.active) this.simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    },
    resizeNetwork() {},
  },
  mounted() {
    this.generateNetwork(data);
  },
};
</script>

<style>
.link {
  stroke: #aaa;
}

.node text {
  stroke: #333;
  cursor: pointer;
}

.node circle {
  stroke: #fff;
  stroke-width: 3px;
  fill: #555;
}
</style>
