document.addEventListener('DOMContentLoaded', function() {
  // Function to check if user is in Bulgaria
  function isUserInBulgaria() {
    // This is a simple implementation. In production, you would use:
    // 1. A proper geolocation API (like ip-api.com)
    // 2. Or the browser's Geolocation API (requires user permission)

    // For testing purposes, we'll check the timezone
    // Bulgaria is in Eastern European Time (EET)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezone.includes('Europe/Sofia') ||
        navigator.language.includes('bg') ||
        navigator.languages.some(lang => lang.includes('bg'));
  }

  // If user is in Bulgaria, redirect or show message
  if (isUserInBulgaria()) {
    document.body.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h1>Access Restricted</h1>
                <p>This content is not available in your region.</p>
            </div>
        `;
  }
});
