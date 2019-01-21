// @TODO: YOUR CODE HERE!
var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 4;
var margin = 20;
var labelArea = 110;
var tPadBot = 40;
var tPadLeft = 40;

// creating a layout for the graph
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");

  //setting the radius of each dot that will appear on the graph
  var circRadius:
  function crGet() {
    if (width <= 530) {
      circRadius = 5;
    }
    else {
      circRadius = 10;
    }
  }
  crGet():

//Labels for each axies

svg.append("g").attr("class", "xText");
var xText = d3.select(".xText");
    xText.attr(
      "transform",
      "translate("+
        ((width - labelArea)/ 2 + labelArea) +
        ", " +
        (height - margin - tPadBot) +
      ")"
    );

    xText
    .append("text")
    .attr("y", -26)
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("In Poverty (%)");

var leftTextX = margin + tPadLeft;
var leftTextY = (height + labelArea) /2 - labelArea;

svg.append("g").attr("class", "yText");
var yText = d3.select(".yText");

  yText.attr(
    "transform",
    "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
  );

    xText
    .append("text")
    .attr("y", 26)
    .attr("data-name", "healthcare")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Lacks Healthcare (%)");

//importing csv file
d3.csv("assets/data/date.csv").then(function(data){
  visualize(data);
  });

//creating function for visualization
  function visualize(theData) {
    var curX = "poverty"
    var curY = "healthcare";
    var xMin;
    var xMax:
    var yMin;
    var yMax;

    function xMinMax() {
      xMin = d3.min(theData, function(d) {
        return parseFloat(d[curX]) * 0.90;
      });
      xMax = d3.max(theData, function(d) {
        return parseFloat(d[curX]) * 1.10;
      });
    }
  yMinMax();
  yMinMax();

  var xScale = d3
    .scaleLiner()
    .domain([xMin, xMax])
    .range([margin + labelArea, width - margin]);
  var yScale = d3
    .scaleLiner()
    .domain([yMin, yMax])
    .range([height - margin - labelArea, margin]);

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);

  svg
    .append("g")
    .call(xAxis)
    .attr("class", "xAxis")
    .attr("transform", "translate(0," + (height - margin - labelArea) +")");
  svg
    .append("g")
    .call(yAxis)
    .attr("class", "yAxis")
    .attr("transform", "translate(" + (margin + labelArea) +", 0)");

  var theCircles = svg.selectAll("g theCircles").data(theData).enter();

  theCircles
    .append("circle")
    .attr("cx", function(d) {
      return xScale(d[curX]);
    })
    .attr("cy", function(d) {
      return yScale(d[curY]);
    })
    .attr("r", circRadius)
    .attr("class", function(d) {
      return "stateCircle" + d.abbr;
    })
  }
