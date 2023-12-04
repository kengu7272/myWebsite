export default function darkModeToggle(option: string) {
    const root = document.documentElement;
    const header = document.getElementById('header')!;

    if(option === 'true') {
        root.style.backgroundColor = '#0a0a0a';
        root.style.color = '#ececec';
        header.style.backgroundColor = '#0a0a0a';
    }
    else {
        root.style.backgroundColor = '#ececec';
        root.style.color = '#0a0a0a';
        header.style.backgroundColor = '#f5f5f5';
    }
}