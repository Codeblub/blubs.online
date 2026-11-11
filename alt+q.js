<script>
    document.addEventListener('keydown', function(event) {
    // Check if the 'Alt' key is pressed AND the key pressed is 'q' or 'Q'
    if (event.altKey && (event.key === 'q' || event.key === 'Q')) {
        // Prevent the default browser behavior if necessary
        event.preventDefault();
        
        // Navigate to the target local page
        window.location.href = './ena/index.html';
    }
});
</script>
