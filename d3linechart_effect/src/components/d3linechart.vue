<template>
    <div class="lchart" ref="lchart">

    </div>
  </template>
  <script>
  import * as d3 from 'd3'
  export default {
    data () {
      return {
        svg: null,
        svgChart: null,
        xScale: null,
        yScale: null,
        xAxis: null,
        yAxis: null,
        yGridAxis: null,
        width: Math.min(window.innerWidth*0.9/1.2-100,550),
        height: 300,
        xDomain: [ 2015, 2019 ],
        yDomain: [ 25, 0 ],
        xTicks: 3,
        yTicks: 4,
        dataone:[
            {year:2015,percent:7.7},
            {year:2016,percent:9.2},
            {year:2017,percent:10.4},
            {year:2018,percent:12.5},
            {year:2019,percent:18.8},
        ],
        datatwo:[
            {year:2015,percent:16.1},
            {year:2016,percent:18.4},
            {year:2017,percent:17.4},
            {year:2018,percent:20.7},
            {year:2019,percent:22.2},
        ],
      }
    },
    methods:{
        draw(){
            this.svgChart
                .attr('transform', 'translate(50, 50)')
                .transition()
                .style('opacity', 1)
            this.xScale
                .range([30, this.width-30])
                .domain(this.xDomain)
            this.xAxis
                .ticks(this.xTicks)
                .tickFormat(function(d){return d+'年';});
            this.svgChart
                .select('.x-axis')
                .attr('transform', `translate(0, ${this.height})`)
                .call(this.xAxis)
                .selectAll('text')
                .classed('.axis-tick', true)
                .style('font-size', '15px')

            this.yScale
                .range([0, 300])
                .domain(this.yDomain)
            this.yAxis
                .ticks(this.yTicks)
                .tickFormat(function(d){return d+'%';});
            this.svgChart
                .select('.y-axis')
                .call(this.yAxis)
                .selectAll('text')
                .style('font-size', `15px`)

            this.yGridAxis
                .ticks(this.yTicks)
                .tickSize(-this.width)
                .tickFormat('')
            this.svgChart
                .select('.y-grid-axis')
                .call(this.yGridAxis)
                .selectAll('line')
                .attr('stroke', '#D3D3D3')
            
            this.svgChart
                .append('line')
                .attr('x1',0)
                .attr('x2',this.width)
                .attr('y1',300)
                .attr('y2',300)
                .attr('stroke', 'black')
                .attr('stroke-width', 1)
            
            this.svgChart
                .append('line')
                .attr('x1',0)
                .attr('x2',0)
                .attr('y1',0)
                .attr('y2',300)
                .attr('stroke', 'black')
                .attr('stroke-width', 1)

            this.svgChart
                .selectAll('.scatter-lineone')
                .data([ this.dataone ])
                .join(this.drawLineEnterone, this.drawLineUpdate, this.drawLineExit)
            this.svgChart
                .selectAll('.scatter-plotone')
                .data(this.dataone)
                .join(this.drawPlotEnterone, this.drawPlotUpdate, this.drawPlotExit)
            
            this.svgChart
                .selectAll('.scatter-linetwo')
                .data([ this.datatwo ])
                .join(this.drawLineEntertwo)
            this.svgChart
                .selectAll('.scatter-plottwo')
                .data(this.datatwo)
                .join(this.drawPlotEntertwo)
        },
        drawLineEnterone (enter) {
            let stroke = '#DB4E00';
            let strokeWidth = 2;
            let line = enter
                .append('path')
            line
                .classed('scatter-lineone', true)
                .attr('fill', 'none')
                .attr('stroke', stroke)
                .attr('stroke-width', strokeWidth)
                .attr('d', d3.line()
                    .x(d => this.xScale(d.year))
                    .y(d => this.yScale(d.percent))
                )
            let path = line.node()
            if (path) {
                let len = path.getTotalLength()
                line
                .attr('stroke-dasharray', len)
                .attr('stroke-dashoffset', len)
                .transition()
                .duration(3000)
                .ease(d3.easeLinear)
                .attr('stroke-dashoffset', 0)
            }
        },
        drawLineEntertwo (enter) {
            let stroke = '#0E67BE';
            let strokeWidth = 2;
            let line = enter
                .append('path')
            line
                .classed('scatter-linetwo', true)
                .attr('fill', 'none')
                .attr('stroke', stroke)
                .attr('stroke-width', strokeWidth)
                .attr('d', d3.line()
                    .x(d => this.xScale(d.year))
                    .y(d => this.yScale(d.percent))
                )
            let path = line.node()
            if (path) {
                let len = path.getTotalLength()
                line
                .attr('stroke-dasharray', len)
                .attr('stroke-dashoffset', len)
                .transition()
                .duration(3000)
                .ease(d3.easeLinear)
                .attr('stroke-dashoffset', 0)
            }
        },
        drawPlotEnterone (enter) {
            const totlaTime = 3000
            const stepUnitTime = totlaTime / this.dataone.length
            // enter
            let plot = enter
                .append('g')
                .classed('scatter-plotone', true)
            plot
                .append('circle')
                .attr('cx', d => this.xScale(d.year))
                .attr('cy', d => this.yScale(d.percent))
                .attr('r', 0)
                .attr('fill', '#ffffff')
                .attr('stroke', '#DB4E00')
                .attr('stroke-width', 2)
                .style('opacity', 0)
                .transition()
                .duration(300)
                .delay((d, index) => index * stepUnitTime)
                .attr('r', 5)
                .style('opacity', 1)
        },
        drawPlotEntertwo (enter) {
            const totlaTime = 3000
            const stepUnitTime = totlaTime / this.datatwo.length
            // enter
            let plot = enter
                .append('g')
                .classed('scatter-plottwo', true)
            plot
                .append('circle')
                .attr('cx', d => this.xScale(d.year))
                .attr('cy', d => this.yScale(d.percent))
                .attr('r', 0)
                .attr('fill', '#ffffff')
                .attr('stroke', '#0E67BE')
                .attr('stroke-width', 2)
                .style('opacity', 0)
                .transition()
                .duration(300)
                .delay((d, index) => index * stepUnitTime)
                .attr('r', 5)
                .style('opacity', 1)
        }
    },
    
    mounted () {
        const svg = d3
            .select(this.$refs.lchart)
            .append('svg')
            // .attr("width", this.width+200)
			// .attr("height", this.height+200);
        const svgChart = svg
            .append('g')
            .style('opacity', 0)
            // .attr("width", this.width)
			// .attr("height", this.height);

        const xScale = d3.scaleLinear()
        const yScale = d3.scaleLinear()
        const xAxis = d3.axisBottom(xScale)
        const yAxis = d3.axisLeft(yScale)
        const yGridAxis = d3.axisLeft(yScale)
        // add y-grid-axis
        svgChart
            .append('g')
            .classed('y-grid-axis', true)
        // add x-axis
        svgChart
            .append('g')
            .classed('x-axis', true)

        // add y-axis
        svgChart
            .append('g')
            .classed('y-axis', true)
        // add x-axis title
        // svgChart
        //     .append('text')
        //     .classed('axis-title', true)
        //     .classed('x-axis-title', true)
        //     .text('西元年')
        //     .attr('text-anchor', 'end')
        //     .attr('fill', '#949494')
        // add y-axis title
        // svgChart
        //     .append('text')
        //     .classed('axis-title', true)
        //     .classed('y-axis-title', true)
        //     .text('投票率（百分比%）')
        //     .attr('text-anchor', 'end')
        //     .attr('fill', '#949494')
        // .style('writing-mode', 'tb')
        this.svg = svg
        this.svgChart = svgChart
        this.xScale = xScale
        this.yScale = yScale
        this.xAxis = xAxis
        this.yAxis = yAxis
        this.yGridAxis = yGridAxis
        this.draw();
    }
  }
  </script>
  
<style lang="scss">

.lchart{
    position: relative;
    width: 100%;
    height: 100%;
    svg{
        width: 100%;
        height: 100%;
    }
}

</style>