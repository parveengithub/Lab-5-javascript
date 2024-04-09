document.addEventListener("DOMContentLoaded", function() {
    // Get battery level
    navigator.getBattery().then(function(battery) {
        updateBatteryImage(battery.level * 100);
        
        // Update image when battery level changes
        battery.addEventListener('levelchange', function() {
            updateBatteryImage(battery.level * 100);
        });
    });

    // Function to update image based on battery percentage
    function updateBatteryImage(percentage) {
        var imageUrl = 'https://robohash.org/' + Math.round(percentage) + 'percent.png';
        var imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        // Clear previous image
        var container = document.getElementById('batteryImage');
        container.innerHTML = '';

        // Append new image
        container.appendChild(imgElement);
    }
});
