function notify(success, topText, bottomText) {
    const notificationContainer = document.getElementById('notification-container');

    let notification = document.createElement('div');
    notification.classList.add('notification');

    let icon = document.createElement('i');
    icon.classList.add('bx', 'icon');

    let textContainer = document.createElement('div');
    let title = document.createElement('div');
    title.style.fontSize = '16px';

    let message = document.createElement('div');
    message.style.fontSize = '14px';

    title.textContent = topText;
    message.textContent = bottomText;

    if (success) {
        icon.classList.add('bx-check-circle');
        notification.classList.add('success');
    } else {
        icon.classList.add('bx-error');
        notification.classList.add('error');
    }

    textContainer.appendChild(title);
    textContainer.appendChild(message);
    notification.appendChild(icon);
    notification.appendChild(textContainer);
    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notificationContainer.removeChild(notification);
    }, 4000);
}