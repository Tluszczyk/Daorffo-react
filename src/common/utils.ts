function queryOnLoad(querySelector: string): Promise<NodeListOf<HTMLElement>> {
    if (document.readyState !== 'complete') {
        console.log(`waiting for load: ${document.readyState}`);

        return new Promise<NodeListOf<HTMLElement>>((resolve) => {
    
            document.addEventListener('readystatechange', () => {
                const elements: NodeListOf<HTMLElement> = document.querySelectorAll(querySelector);
                resolve(elements)
            });
        });
    } else {
        console.log("already loaded");

        const elements: NodeListOf<HTMLElement> = document.querySelectorAll(querySelector);
        return Promise.resolve(elements);
    }
}

export { queryOnLoad };