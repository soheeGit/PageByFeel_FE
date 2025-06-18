import React from 'react';
import * as echarts from 'echarts';

const EmotionChart: React.FC = () => {
  // 차트 초기화
  React.useEffect(() => {
    const chartDom = document.getElementById('emotions-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['월', '화', '수', '목', '금', '토', '일']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: '행복',
            type: 'line',
            stack: 'Total',
            data: [3, 4, 3, 5, 3, 4, 4],
            smooth: true,
            lineStyle: {
              width: 2
            },
            itemStyle: {
              color: '#FFD166'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255, 209, 102, 0.3)'
                }, {
                  offset: 1, color: 'rgba(255, 209, 102, 0.1)'
                }]
              }
            }
          },
          {
            name: '위로',
            type: 'line',
            stack: 'Total',
            data: [2, 3, 4, 2, 5, 3, 2],
            smooth: true,
            lineStyle: {
              width: 2
            },
            itemStyle: {
              color: '#EF476F'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(239, 71, 111, 0.3)'
                }, {
                  offset: 1, color: 'rgba(239, 71, 111, 0.1)'
                }]
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      
      const handleResize = () => {
        myChart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return <div id="emotions-chart" className="w-full h-48"></div>;
};

export default EmotionChart;
