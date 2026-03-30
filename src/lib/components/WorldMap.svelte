<script>
  import { onMount } from 'svelte';

  let currentMapMode = 'lived';
  let mapCanvas;
  let mapImage;
  let tooltip;

  const mapDots = {
    lived: [
      { x: 11.07, y: 39.45, name: 'New York' },
      { x: 63.57, y: 78.02, name: 'Auroville' },
      { x: 61.43, y: 44.45, name: 'Delhi' },
      { x: 58.04, y: 63.02, name: 'Mumbai' },
      { x: 61.43, y: 73.02, name: 'Bangalore', isLive: true }
    ],
    been: [
      { x: 73.39, y: 75.73, name: 'Port Blair' },
      { x: 74.46, y: 76.09, name: 'Havelock' },
      { x: 74.46, y: 77.52, name: 'Neil Island' },
      { x: 44.82, y: 47.88, name: 'Dahab' },
      { x: 32.32, y: 25.38, name: 'London' },
      { x: 41.79, y: 45.02, name: 'Cairo' },
      { x: 41.43, y: 42.88, name: 'Alexandria' },
      { x: 61.96, y: 85.73, name: 'Colombo' },
      { x: 62.86, y: 84.66, name: 'Kandy' },
      { x: 63.21, y: 85.73, name: 'Ella' },
      { x: 62.32, y: 86.81, name: 'Galle' },
      { x: 62.86, y: 87.52, name: 'Mirissa' },
      { x: 62.68, y: 83.23, name: 'Dambula' },
      { x: 62.14, y: 83.95, name: 'Sigiriya' },
      { x: 77.32, y: 52.88, name: 'Sa Pa' },
      { x: 78.93, y: 56.81, name: 'Hanoi' },
      { x: 79.64, y: 56.81, name: 'Ha Long Bay' },
      { x: 79.64, y: 60.38, name: 'Hue' },
      { x: 80.54, y: 62.16, name: 'Hoi An' },
      { x: 80.54, y: 64.66, name: 'Da Lat' },
      { x: 79.82, y: 66.09, name: 'Saigon' },
      { x: 79.46, y: 67.52, name: 'Can Tho' },
      { x: 44.11, y: 47.52, name: 'Mt Sinai' },
      { x: 77.14, y: 53.95, name: 'Mt Fansipan' },
      { x: 41.61, y: 77.16, name: 'Maputo' },
      { x: 39.46, y: 75.73, name: 'Victoria Falls Town' },
      { x: 39.64, y: 74.31, name: 'Livingstone' },
      { x: 40.36, y: 73.23, name: 'Lusaka' },
      { x: 40.89, y: 72.52, name: 'South Luangwa' },
      { x: 76.79, y: 64.31, name: 'Bangkok' },
      { x: 66.96, y: 41.45, name: 'Kathmandu' },
      { x: 65.36, y: 39.66, name: 'Pokhara' },
      { x: 8.04,  y: 38.95, name: 'Chicago' },
      { x: 10.36, y: 41.09, name: 'Philadelphia' },
      { x: 10.54, y: 42.16, name: 'Washington DC' },
      { x: 65.54, y: 66.45, name: 'Vishakhapatnam' },
      { x: 60.00, y: 45.73, name: 'Jaipur' },
      { x: 59.29, y: 48.95, name: 'Udaipur' },
      { x: 64.46, y: 46.45, name: 'Benares' },
      { x: 63.39, y: 45.02, name: 'Lucknow' },
      { x: 61.79, y: 38.95, name: 'Dharamshala' },
      { x: 59.64, y: 79.66, name: 'Fort Kochi' },
      { x: 63.93, y: 76.81, name: 'Pondicherry' },
      { x: 58.75, y: 72.16, name: 'Panjim' },
      { x: 61.79, y: 78.59, name: 'Madurai' },
      { x: 64.11, y: 75.38, name: 'Mahabalipuram' },
      { x: 62.86, y: 75.02, name: 'Vellore' },
      { x: 62.14, y: 81.81, name: 'Rameshwaram' },
      { x: 62.68, y: 81.81, name: 'Dhanushkodi' },
      { x: 62.50, y: 80.38, name: 'Tuticorin' },
      { x: 61.79, y: 80.38, name: 'Oovari' },
      { x: 63.57, y: 70.38, name: 'Vijayawada' },
      { x: 63.21, y: 71.45, name: 'Guntur' },
      { x: 62.50, y: 69.31, name: 'Hyderabad' },
      { x: 61.11, y: 83.81, name: 'Kanyakumari' }
    ]
  };

  function addDot(dotData, mode) {
    if (!mapCanvas || !tooltip) return;

    const dot = document.createElement('div');
    dot.className = 'map-dot';

    if (mode === 'been') {
      dot.style.background = '#22a050';
      dot.style.width = '4px';
      dot.style.height = '4px';
    } else {
      dot.style.background = '#d0116f';
    }

    if (dotData.isLive) {
      dot.classList.add('live-location');
      dot.style.background = '#d0116f';
      dot.style.borderColor = '#d0116f';
    }

    dot.style.left = dotData.x + '%';
    dot.style.top = dotData.y + '%';

    dot.addEventListener('mouseenter', function() {
      tooltip.textContent = dotData.name + (dotData.isLive ? ' (current)' : '');
      tooltip.style.opacity = '1';
      tooltip.style.left = dotData.x + '%';
      tooltip.style.top = (dotData.y - 5) + '%';
      tooltip.style.transform = 'translate(-50%, -100%)';
    });

    dot.addEventListener('mouseleave', function() {
      tooltip.style.opacity = '0';
    });

    mapCanvas.appendChild(dot);
  }

  function renderDots() {
    if (!mapCanvas) return;
    mapCanvas.querySelectorAll('.map-dot').forEach(dot => dot.remove());

    // Always show "lived" cities
    mapDots.lived.forEach(dot => addDot(dot, 'lived'));

    // If in "been" mode, also show "been" cities
    if (currentMapMode === 'been') {
      mapDots.been.forEach(dot => addDot(dot, 'been'));
    }
  }

  function setMapMode(mode) {
    currentMapMode = mode;
    renderDots();
  }

  onMount(() => {
    // Create tooltip
    tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip';
    mapCanvas.appendChild(tooltip);

    renderDots();
  });
</script>

<div class="world-map">
  <div class="map-container" id="mapContainer">
    <img src="/world-map.svg" alt="World map" id="mapImage" bind:this={mapImage}>
    <div class="map-canvas" id="mapCanvas" bind:this={mapCanvas}></div>
    <div class="map-toggle">
      <button
        class="map-toggle-btn"
        class:active={currentMapMode === 'lived'}
        on:click={() => setMapMode('lived')}
      >lived</button>
      <button
        class="map-toggle-btn"
        class:active={currentMapMode === 'been'}
        on:click={() => setMapMode('been')}
      >been</button>
    </div>
  </div>
</div>
