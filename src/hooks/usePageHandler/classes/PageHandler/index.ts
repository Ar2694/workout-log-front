// Event Emitter Class

interface ClassProps {
    events?: { [key: string]: any }
    data: { [key: string]: any } | null
    page?: { [key: string]: any } | null
    pageProps?: { [key: string]: any } | null
    onPageChange?: Function | null
    updatePage: React.SetStateAction<any>
    refreshPage: Function | null
}

export default class PageHandler {
    _events
    _data
    _page
    _pageProps
    _onPageChange
    _updatePage
    _refreshPage

    constructor({ data, page = null, onPageChange = null, pageProps = null, updatePage, refreshPage, events = {} }: ClassProps) {
        this._events = events;
        this._data = data;
        this._page = page;
        this._pageProps = pageProps;
        this._onPageChange = onPageChange
        this._updatePage = updatePage;
        this._refreshPage = refreshPage;
    }

    get events() {
        return this._events;
    }

    set events(value) {
        this._events = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get page() {
        return this._page;
    }

    set page(value) {
        this._page = value;
    }

    get pageProps() {
        return this._pageProps;
    }

    set pageProps(value) {
        this._pageProps = value;
    }
    get onPageChange() {
        return this._onPageChange;
    }

    set onPageChange(value) {
        this._onPageChange = value;
    }

    get updatePage() {
        return this._updatePage;
    }

    set updatePage(value) {
        this._updatePage = value;
    }

    set refreshPage(value) {
        this._refreshPage = value;
    }

    get refreshPage() {
        return this._refreshPage;
    }


    listener(name: string, callback: Function) {
        this._events[name] = this._events[name] ? this._events[name] : [];
        this._events[name].push(callback);

        return this;
    }

    handler(event: string, value?: any): any {
        return (() => {
            if (this.events[event]) {
                this._events[event].forEach((callback: Function) => callback(value, this));
            }
        })
    }

    removeListener(event: any, callback: Function) {
        if (this._events[event]) {
            this._events[event] = this._events[event].filter((cb: Function) => cb !== callback);
        }
    }

    static init(value: ClassProps) {
        return new PageHandler(value)
    }
}
