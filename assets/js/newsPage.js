document.addEventListener('DOMContentLoaded', ()  => {
    const sharedTG = document?.querySelector('#shared-news-tg');
    const sharedVK = document?.querySelector('#shared-news-vk');
    let title = document?.querySelector('h1').textContent;
    let urlPage = window.location.href;
    if (sharedTG)
    sharedTG.setAttribute('href', `https://telegram.me/share/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(urlPage)}`);
    if (sharedVK)
    sharedVK.setAttribute('href', `https://vk.com/share.php?url=${encodeURIComponent(urlPage)}&title=${encodeURIComponent(title)}`);
})