// Initialize Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Traffic',
      data: [3000, 4000, 3500, 5000, 4500, 6000],
      borderColor: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      borderWidth: 2
    }]
  }
});

// Initialize Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Group A', 'Group B', 'Group C', 'Group D'],
    datasets: [{
      label: 'Users',
      data: [1200, 1900, 3000, 1700],
      backgroundColor: ['#9b59b6', '#3498db', '#e74c3c', '#2ecc71']
    }]
  }
});

