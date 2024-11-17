document.getElementById('ticketForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const ticketId = document.getElementById('ticketId').value.trim();
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (ticketId === '') {
        confirmationMessage.innerHTML = '<span style="color: red;">Please enter a valid Ticket ID.</span>';
        return;
    }

    // Simulate confirmation logic
    confirmationMessage.innerHTML = `<span style="color: green;">Thank you! Ticket ID <strong>${ticketId}</strong> has been successfully confirmed. We look forward to seeing you at the party!</span>`;

    // Redirect to hosted file or landing page after 3 seconds
    setTimeout(() => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1McDo81wHEF0bjSeCnSoBoMjU_8gm0OcK'; // Change this link to your hosted file
    }, 3000);
});
