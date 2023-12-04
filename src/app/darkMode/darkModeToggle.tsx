export default function darkModeToggle(option: string) {
    const root = document.documentElement;
    const header = document.getElementById('header')!;
    const main = document.getElementById('main')!;

    if(option === 'true') {
        root.style.backgroundColor = '#0a0a0a';
        root.style.color = '#f5f5f5';
        header.style.backgroundColor = '#0a0a0a';
        main.style.backgroundColor = '#111111'
    }
    else {
        root.style.backgroundColor = '#ececec';
        root.style.color = '#0a0a0a';
        header.style.backgroundColor = '#f5f5f5';
        main.style.backgroundColor = '#f5f5f5'
    }
}