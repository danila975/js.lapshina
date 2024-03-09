async function task(x) {
    let y = 'https://kodaktor.ru/api/m/' + x
    const response = await fetch(y, {    headers: {
        "Content-Type": "application/json"}});
    const text = await response.json();
    console.log(text.result);
}

task(5);
